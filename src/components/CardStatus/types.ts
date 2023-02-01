import { reverseBooleanDataAtrrArgs, typeoffoodInfo } from "../FoodSection/types"

export type cardStatusProps = {
    isSelected: boolean
    description: string
    isOutOfStock: boolean
    taste: string
    handleClick: reverseBooleanDataAtrrArgs
    product: typeoffoodInfo
}