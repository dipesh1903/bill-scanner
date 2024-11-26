import { descTextField, amountTextField, rateTextField, serialNoTextField, quantityTextField, outputTextField } from "../constant";
import { textAnnotationsType } from "../type";

// const amtRegex = /^\d{1,3}(,\d{3})*(\.\d+)?$/;

export function onExtractBillInfo(textAnnotations: textAnnotationsType[]): any {
  const textAnnotation: textAnnotationsType[] = textAnnotations;
  console.log('text anno', textAnnotation);
  const boundingRects = {
     maxTopLeftX: 0,
     maxBottomLeftX: 0,
     maxBottomLeftY: textAnnotations[0].boundingPoly.vertices[3].y || 0,
     maxTopRightX: textAnnotations[0].boundingPoly.vertices[1].x || 0,
     maxBottomRightY: textAnnotations[0].boundingPoly.vertices[2].y || 0,
     maxBottomRightX: textAnnotations[0].boundingPoly.vertices[1].x || 0,
     maxTopLeftY: 0,
     maxTopRightY: 0
  }
  const descriptionBlock = textAnnotation.find(item => {
    return (descTextField.includes(item.description.toLowerCase()));
  })
  const hsnBlock = textAnnotation.find(item => {
    return (item.description.toLowerCase() === 'hsn' || item.description.toLowerCase() === 'sac');
  })
  const amtBlock = textAnnotation.find(item => {
    return (amountTextField.includes(item.description.toLowerCase()));
  })
  if (!!amtBlock) {
    boundingRects.maxTopRightY = amtBlock.boundingPoly.vertices[0].y || 0
  }
  const rateBlock = textAnnotation.find(item => {
    return (rateTextField.includes(item.description.toLowerCase()));
  })
  const serialBlock = textAnnotation.find(item => {
    return (serialNoTextField.includes(item.description.toLowerCase()));
  })
  if (!serialBlock) return;
  const serialBlockNo = textAnnotation.find(item => {
    return (['no.', 'no'].includes(item.description.toLowerCase())) && item.boundingPoly.vertices[0].x < serialBlock?.boundingPoly.vertices[2].x;
  })
  console.log('no', serialBlockNo)
  const quantityBlock = textAnnotation.find(item => {
    return (quantityTextField.includes(item.description.toLowerCase()));
  })
  if (!amtBlock || !hsnBlock || !serialBlock || !quantityBlock || !rateBlock || !descriptionBlock) return;
  if (!!serialBlock) {
    boundingRects.maxTopLeftY = serialBlock.boundingPoly.vertices[0].y || 0
    boundingRects.maxTopLeftX = serialBlock.boundingPoly.vertices[0].x || 0
  }
  const outputField =  textAnnotation.find(item => {
    return (item.boundingPoly.vertices[0].y && outputTextField.includes(item.description.toLowerCase()) && 
      item.boundingPoly.vertices[0].y > (hsnBlock?.boundingPoly.vertices[3]?.y || 0));
  })
  if (!!outputField) {
    boundingRects.maxBottomLeftY = outputField.boundingPoly.vertices[0].y || boundingRects.maxBottomLeftY
    boundingRects.maxBottomRightY = outputField.boundingPoly.vertices[0].y || boundingRects.maxBottomRightY
  }
  const minimums = {
    minTop: Math.min(boundingRects.maxTopLeftY, boundingRects.maxTopRightY),
    minLeft: Math.min(boundingRects.maxTopLeftX, boundingRects.maxBottomLeftX),
    maxRight: Math.max(boundingRects.maxTopRightX, boundingRects.maxBottomRightX),
    maxBottom: Math.max(boundingRects.maxBottomLeftY, boundingRects.maxBottomRightY),
  }
  const tableBounds = textAnnotation.filter(item => {
    const vertices = item.boundingPoly.vertices;
      return (
        (vertices[0].x || 0) >= minimums.minLeft &&
        ((vertices[0].y && vertices[0].y >= minimums.minTop) || (minimums.minTop === 0)) &&
        (vertices[3].x || 0)<= minimums.maxRight && 
        vertices[3].y && vertices[3].y<= minimums.maxBottom
      );
  })

  const angle = Math.atan2(amtBlock?.boundingPoly.vertices[0].y - hsnBlock?.boundingPoly.vertices[0].y,
    amtBlock?.boundingPoly.vertices[0].x - hsnBlock?.boundingPoly.vertices[0].x
  );

  console.log('angle is ', angle, serialBlock);

  const items = tableBounds.filter(item => item.boundingPoly.vertices[0].x < hsnBlock?.boundingPoly.vertices[0].x);
  console.log('table bound is ', tableBounds , '\n', minimums, '\n', boundingRects, textAnnotation.length);
  const hsnNos = tableBounds.filter(item =>  !isNaN(+item.description) && item.description.length === 8)
  const slNos = items.filter(item => {
    return ((((item.boundingPoly.vertices[0].x || 0) < (serialBlock?.boundingPoly.vertices[2].x)
    || (item.boundingPoly.vertices[0].x || 0) < (serialBlockNo?.boundingPoly.vertices[2].x)))
    && (item.boundingPoly.vertices[0].y || 0) > serialBlock?.boundingPoly.vertices[2].y)
    && !isNaN(+item.description) && +item.description <= hsnNos.length
  });
  const descriptions: textAnnotationsType[][] = [];
  console.log('sl', slNos , 'hsnNo', hsnNos, outputField)
  hsnNos.forEach((hsn, index) => {
    let topCheck = slNos[index].boundingPoly.vertices[0].y;
    if (descriptions.length) {
      topCheck = descriptions[descriptions.length - 1][descriptions[descriptions.length - 1].length - 1].boundingPoly.vertices[2].y;
    }
    const result = tableBounds.filter(item => {
      const vertices = item.boundingPoly.vertices;
      let maxCheck = 0;
     if (index+1 === hsnNos.length)
        maxCheck = outputField?.boundingPoly.vertices[0].y || 0
      else 
       maxCheck = hsnNos[index+1].boundingPoly.vertices[0].y || 0
    console.log('max check is', maxCheck)
      return !!((vertices[0].y || 0)  >=  topCheck && vertices[0].x > slNos[index].boundingPoly.vertices[1].x && vertices[0].x < hsn.boundingPoly.vertices[0].x && vertices[2].y < maxCheck);

    })
    descriptions.push(result);
  })
  console.log('descriptions are ', descriptions);
  const quantities: textAnnotationsType[][] = [];
  hsnNos.forEach((hsn, index) => {
    let topCheck = slNos[index].boundingPoly.vertices[0].y;
    if (quantities.length) {
      topCheck = quantities[quantities.length - 1][quantities[quantities.length - 1].length - 1].boundingPoly.vertices[2].y;
    }
    const result = tableBounds.filter(item => {
      const vertices = item.boundingPoly.vertices;
      let maxCheck = 0;
     if (index+1 === hsnNos.length)
        maxCheck = outputField?.boundingPoly.vertices[0].y || 0
      else 
       maxCheck = hsnNos[index+1].boundingPoly.vertices[0].y || 0
    console.log('max check is', maxCheck)
      return !!((vertices[0].y || 0)  >=  topCheck &&
      vertices[0].x > hsnBlock?.boundingPoly.vertices[1].x && vertices[0].x < quantityBlock.boundingPoly.vertices[1].x && vertices[2].y < maxCheck);

    })
    quantities.push(result);
  })
  console.log('quantities are ', quantities);

  const rate: textAnnotationsType[][] = [];
  hsnNos.forEach((hsn, index) => {
    let topCheck = slNos[index].boundingPoly.vertices[0].y;
    if (rate.length) {
      topCheck = rate[rate.length - 1][rate[rate.length - 1].length - 1].boundingPoly.vertices[2].y;
    }
    const result = tableBounds.filter(item => {
      // find largest y coord in the last result
      const vertices = item.boundingPoly.vertices;
      let maxCheck = 0;
     if (index+1 === hsnNos.length)
        maxCheck = outputField?.boundingPoly.vertices[0].y || 0
      else 
      maxCheck = hsnNos[index+1].boundingPoly.vertices[0].y || 0
      console.log('max check is', maxCheck)
      return !!((vertices[0].y || 0)  >=  topCheck &&
      vertices[0].x >= quantityBlock?.boundingPoly.vertices[1].x && vertices[0].x <= rateBlock.boundingPoly.vertices[1].x && vertices[2].y < maxCheck);

    })
    rate.push(result);
  })
  return ({
    descriptions: descriptions,
    rates: rate,
    quantities: quantities,
    hsn: hsnNos.map(item => item.description)
  })
}