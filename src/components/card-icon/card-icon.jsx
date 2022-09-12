import { useContext } from "react";

import { CardContext } from "../../contexts/card.context";

import {
  ShoppingIcon,
  CardIconContainer,
  ItemCount,
} from "./card-icon.styles.jsx";

const CardIcon = () => {
  const { isCardOpen, setIsCardOpen, cardItemCount } = useContext(CardContext);

  const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen);

  return (
    <CardIconContainer onClick={toggleIsCardOpen}>
      <ShoppingIcon />
      <ItemCount>{cardItemCount}</ItemCount>
    </CardIconContainer>
  );
};

export default CardIcon;
