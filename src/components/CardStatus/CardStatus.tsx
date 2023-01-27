import React from "react";
import './style.css'
import { cardStatusProps } from "./types";

export const CardStatus: React.FC<cardStatusProps> = ({isSelected, description, isOutOfStock, taste}) => {
    let title

    if (isSelected) {
        title = description
    } else if (isOutOfStock) {
        title = <span className="food-infolist__out-of-stock-title">{`Печалька, ${taste} закончился`}</span>
    } else {
        title = <>
            Чего сидишь? Порадуй котэ,{" "}
            <span className="food-infolist__buy-btn food-infolist__buy-btn_text-decoration-dashed">
                купи
            </span>
            <span className="food-infolist__buy-btn">.</span>
        </>
    }

    return <p className="food-infolist__description">{title}</p>;
};


