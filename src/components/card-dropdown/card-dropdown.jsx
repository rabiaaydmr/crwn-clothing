import "./card-dropdown.styles.jsx";
import { useContext } from "react";
import { CardContext } from "../../contexts/card.context";
import CardItem from "../card-item/card-item";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";

import {
  CardDrowdownContainer,
  EmptyMessage,
  CardItems,
} from "./card-dropdown.styles.jsx";

const CardDropdown = () => {
  const { cardItems } = useContext(CardContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CardDrowdownContainer>
      <CardItems>
        {cardItems.length ? (
          cardItems.map((item) => <CardItem key={item.id} cardItem={item} />)
        ) : (
          <EmptyMessage>Your card is empty</EmptyMessage>
        )}
      </CardItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CardDrowdownContainer>
  );
};

export default CardDropdown;
