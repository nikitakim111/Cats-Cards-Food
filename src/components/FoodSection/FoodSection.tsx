import { Heading } from "../Heading/Heading";
import { FoodCard } from "../FoodCard/FoodCard";
import "./style.css";
import typeoffoodInfo from "./types";
import React, { useState} from "react";
import { CardStatus } from "../CardStatus/CardStatus";

export const FoodSection = () => {
  const [foodInfo, setFoodInfo] = useState<typeoffoodInfo[]>([
    {
      taste: "с фуа-гра",
      benefits: {
        mouse: 1,
        benefitPortion: 10,
      },
      foodWeightTitle: "0,5",
      underCardDescr: "Печень утки разварная с артишоками.",
      selected: false,
      showRedText: false,
      outOfStock: false
    },
    {
      taste: "с рыбой",
      benefits: {
        mouse: 2,
        benefitPortion: 40,
      },
      foodWeightTitle: "2",
      underCardDescr: "Головы щучьи с чесноком да свежайшая сёмгушка.",
      selected: false,
      showRedText: false,
      outOfStock: false
    },
    {
      taste: "с курой",
      benefits: {
        mouse: 5,
        benefitPortion: 100,
      },
      foodWeightTitle: "5",
      underCardDescr: "Филе из цыплят с трюфелями в бульоне.",
      selected: false,
      showRedText: false,
      outOfStock: true
    },
  ]);

  // Может я усложнил задачу, но предположил, что с сервера нам идет только кол-во бенефитом, поэтому решил написать функцию склонений
  function getCorrectEndingOfWord(
    productAmount: number,
    wordsArr: [string, string, string]
  ): string {
    const onesOfProduct = productAmount % 10;
    const tensOfProduct = productAmount % 100;
    if (
      (onesOfProduct === 1 && productAmount > 20 && tensOfProduct > 20) ||
      productAmount === 1
    )
      return wordsArr[0];
    else if (onesOfProduct > 1 && onesOfProduct < 5 && (productAmount > 20 || productAmount < 10))
      return wordsArr[1];
    else return wordsArr[2];
  }

  const reverseBooleanDataAttr = (event: React.SyntheticEvent, card: typeoffoodInfo, key: 'selected' | 'showRedText', isLeaved?: boolean) => {
    const target = event.currentTarget as typeof event.currentTarget & {
      dataset: {
        [key: string]: string
      };
    };

    if (card.outOfStock) return

    if (key === 'showRedText' && isLeaved) {
      card[key] = false;
    }
    else if (key === 'showRedText' && !card.selected) {
      return
    }
    else if (key === 'selected' && card.selected) {
      card[key] = !card[key];
      card.showRedText = false;
    }
    else {
      card[key] = !card[key];
    }

    setFoodInfo((prev) => [...prev]);
    target.dataset[key] = String(card[key]);
  };

  return (
    <section className="food-section">
      <div className="container food-section__container">
        <Heading classname="food-section__heading">
          Ты сегодня покормил кота?
        </Heading>
        <ul className="food-infolist" aria-label="Корм для котов">
          {foodInfo.map((item, index) => {
            return (
              <li
                tabIndex={index + 1}
                className='food-infolist__item food-section__item'
                aria-labelledby='Выбрать корм для кота'
                data-selected={item.selected}
                data-show-red-text={item.showRedText}
                data-out-of-stock={item.outOfStock}
                key={item.taste}
                onClick={(e) => {reverseBooleanDataAttr(e, item, 'selected');}}
                onMouseEnter={(e) => {reverseBooleanDataAttr(e, item, 'showRedText')}}
                onMouseLeave={(e) => {reverseBooleanDataAttr(e, item, 'showRedText', true)}}
                onFocus={(e) => {reverseBooleanDataAttr(e, item, 'showRedText')}}
                onBlur={(e) => {reverseBooleanDataAttr(e, item, 'showRedText', true)}}
                onKeyDown={(e) => {if (e.code === 'Enter' || e.code === 'Space') reverseBooleanDataAttr(e, item, 'selected');}}
                >
                <FoodCard isOutOfStock={item.outOfStock}>
                  {/*
                  Теперь компонент стал более гибким на случай если в будущем надо будет что-то добавить или поменять местами в карточке.
                  Можно поменять местами к примеру Description и Title - тоже неплохо смотрится. Но есть нюанс с FoodWeightTitle, его лучше не менять :)
                  */}
                  <FoodCard.Description>
                  {item.showRedText ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}
                  </FoodCard.Description>
                  <FoodCard.Title>{item.taste}</FoodCard.Title>
                  <FoodCard.BenefitTitle>
                    {<><span className="food-card__bold-portion">{item.benefits.benefitPortion}</span> {`${getCorrectEndingOfWord(item.benefits.benefitPortion,["порция", "порции", "порций"])}`}</>}
                  </FoodCard.BenefitTitle>
                  <FoodCard.BenefitTitle>
                    {`${item.benefits.mouse === 1 ? "": item.benefits.mouse} ${getCorrectEndingOfWord(item.benefits.mouse, ["мышь","мыши","мышей",])} в подарок`}
                  </FoodCard.BenefitTitle>
                  <FoodCard.BenefitTitle>
                    {item.benefits.mouse >= 5 ? 'заказчик доволен' : ''}
                  </FoodCard.BenefitTitle>
                  <FoodCard.FoodWeightTitle>
                    {item.foodWeightTitle}
                  </FoodCard.FoodWeightTitle>
                </FoodCard>
                <CardStatus
                isSelected={item.selected}
                description={item.underCardDescr}
                isOutOfStock={item.outOfStock}
                taste={item.taste} />
              </li>);})}
        </ul>
      </div>
    </section>
  );
};
