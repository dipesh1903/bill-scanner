import './App.css'
import { amountTextField, descTextField, outputTextField, quantityTextField, rateTextField, serialNoTextField, textAnnotations } from './constant';
import { router } from './routes/route';
import { textAnnotationsType } from './type';
import { Outlet, RouterProvider } from "react-router-dom"

function App() {
  const amtRegex = /^\d{1,3}(,\d{3})*(\.\d+)?$/;
  function onAction() {
    const textAnnotation: textAnnotationsType[] = textAnnotations;
    const boundingRects = {
       maxTopLeftX: 0,
       maxBottomLeftX: 0,
       maxBottomLeftY: textAnnotations[0].boundingPoly.vertices[3].y || 0,
       maxTopRightX: textAnnotations[0].boundingPoly.vertices[1].x,
       maxBottomRightY: textAnnotations[0].boundingPoly.vertices[2].y || 0,
       maxBottomRightX: textAnnotations[0].boundingPoly.vertices[1].x,
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
    const quantityBlock = textAnnotation.find(item => {
      return (quantityTextField.includes(item.description.toLowerCase()));
    })
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

    console.log('angle is ', angle);

    const items = tableBounds.filter(item => item.boundingPoly.vertices[0].x < hsnBlock?.boundingPoly.vertices[0].x);
    console.log('table bound is ', tableBounds , '\n', minimums, '\n', boundingRects, textAnnotation.length);
    const hsnNos = tableBounds.filter(item =>  !isNaN(+item.description) && item.description.length === 8)
    const slNos = items.filter(item => {
      return (item.boundingPoly.vertices[0].x || 0) < (serialBlock?.boundingPoly.vertices[2].x) && !isNaN(+item.description) && +item.description <= hsnNos.length
    });
    const descriptions = []
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
    const quantities = [];
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

    const rate = [];
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
      const vv = [
        {
            "x": 1115,
            "y": 631
        },
        {
            "x": 1173,
            "y": 631
        },
        {
            "x": 1173,
            "y": 645
        },
        {
            "x": 1115,
            "y": 645
        }
    ]
    if (vertices[0].x === vv[0].x && vertices[0].y === vv[0].y) {
      console.log('is workig', rateBlock?.boundingPoly.vertices[2].y,  quantityBlock?.boundingPoly.vertices[1].x, rateBlock.boundingPoly.vertices[1].x, maxCheck)
    }
        return !!((vertices[0].y || 0)  >=  topCheck &&
        vertices[0].x >= quantityBlock?.boundingPoly.vertices[1].x && vertices[0].x <= rateBlock.boundingPoly.vertices[1].x && vertices[2].y < maxCheck);

      })
      rate.push(result);
    })
    console.log('rates are ', rate, quantityBlock, rateBlock);
  }

  return (
    <>
      <RouterProvider router={router}/>
      <Outlet />
    </>
  )
}
export default App
