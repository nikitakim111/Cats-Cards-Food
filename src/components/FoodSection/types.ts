export type typeoffoodInfo = {
    id: number
    taste: string
    benefits: {
        mouse: number
        benefitPortion: number
    }
    foodWeightTitle: string
    underCardDescr: string
    outOfStock: boolean
    hoveredBuyBtn: boolean
    selected: boolean
    showRedText: boolean
}

export type reverseBooleanDataAtrrArgs = (event: React.SyntheticEvent, card: typeoffoodInfo, key: 'selected' | 'showRedText' | 'hoveredBuyBtn', isLeaved?: boolean) => void
