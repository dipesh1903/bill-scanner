export type coordinates = {
    x?: number,
    y?: number
}

export type boundingPoly = {
    vertices: coordinates[]
}


export type textAnnotationsType = {
    boundingPoly: boundingPoly,
    description: string,
    locale?: string
}

export type ProductType = {
    description: string,
    hsn: string,
    rate: string,
}