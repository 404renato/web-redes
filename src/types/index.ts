export type PackageProps = {
    id: string
    name: string
    amount: number
    code: string
    batch: string
    origin: string
    expiringDate: string
    manufacturingDate: string
}

export type Interaction = {
    id: string,
    amount: number,
    newStockAmount?: number,
    newShelfAmount: number
}
