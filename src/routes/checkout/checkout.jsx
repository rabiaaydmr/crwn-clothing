import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout.item";
import { CardContext } from "../../contexts/card.context";
import "./checkout.styles.scss"

const Checkout = () => {
  const { cardItems, cardTotal} = useContext(CardContext);

  return (
    <div className="checkout-container">
      <h1> I am Checkout Page</h1>
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cardItems.map((cardItem) => {
        return(
          <CheckoutItem key={cardItem.id}cardItem={cardItem}/>
        )
      })}
      <span className="total" > Total ${cardTotal} </span>
    </div>
  );
};

export default Checkout;
