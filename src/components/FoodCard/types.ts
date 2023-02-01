import {typeoffoodInfo} from '../FoodSection/types'

export type FoodCardProps = {
    children: JSX.Element | JSX.Element[];
    isOutOfStock: boolean
    handleClick: (event: React.SyntheticEvent, card: typeoffoodInfo, key: 'selected' | 'showRedText', isLeaved?: boolean) => void
    product: typeoffoodInfo
}

export type StringChildrenProps = {
    children: string | JSX.Element
}

