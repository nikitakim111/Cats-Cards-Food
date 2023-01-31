import React from "react";
import './style.css'
import {FoodCardProps, StringChildrenProps} from './types'

// Использую dot notation для гибкости карточки

const Description: React.FC<StringChildrenProps> = ({children}) => <span className="food-card__description">{children}</span>

const Title: React.FC<StringChildrenProps> = ({children}) => <h3 className="food-card__title">Нямушка <span className="food-card__taste">{children}</span></h3>

const BenefitTitle: React.FC<StringChildrenProps> = ({children}) => <span className="food-card__benefit-title">{children}</span>

const FoodWeightTitle: React.FC<StringChildrenProps> = ({children}) => <div className="food-card__food-weight-circle"><span className="food-card__food-weight-title">{children}</span><span className="food-card__food-weight-kg">кг</span></div>

const FoodCard: React.FC<FoodCardProps> & FoodCardExtansions = ({children, isOutOfStock}) => {
    return <div className={isOutOfStock ? "food-card food-card_theme_fade" : "food-card"}>
        {children}
    </div>
}

FoodCard.Description = Description
FoodCard.Title = Title
FoodCard.BenefitTitle = BenefitTitle
FoodCard.FoodWeightTitle = FoodWeightTitle


type FoodCardExtansions = {
    Description: typeof Description
    Title: typeof Title
    BenefitTitle: typeof BenefitTitle
    FoodWeightTitle: typeof FoodWeightTitle
}

export {FoodCard}