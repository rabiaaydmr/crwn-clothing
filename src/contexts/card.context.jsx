import { createContext, useState, useEffect } from "react";

export const addCardItem = (cardItems, productToAdd) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToAdd.id
  );

  if (existingCardItem) {
    return cardItems.map((cardItem) =>
      cardItem.id === productToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  return [...cardItems, { ...productToAdd, quantity: 1 }];
};

export const removeCardItem = (cardItems, productToRemove) => {
  const existingCardItem = cardItems.find(
    (cardItem) => cardItem.id === productToRemove.id
  );

  if (existingCardItem.quantity ===1 ) {
    return cardItems.filter((cardItem) => cardItem.id !== productToRemove.id);
  }

  return cardItems.map((cardItem) =>
    cardItem.id === productToRemove.id
      ? { ...cardItem, quantity: cardItem.quantity - 1 }
      : cardItem
  );
};

export const clearCardItem = (cardItems, cardItemToClear) => {
  return cardItems.filter((cardItem) => cardItem.id !== cardItemToClear.id);
}

export const CardContext = createContext({
  isCardOpen: false,
  setIsOpen: () => {},
  cardItems: [],
  addItemToCard: () => {},
  removeItemToCard: () => {},
  clearItemFromCard: () => {},
  cardItemCount: 0,
  cardTotal: 0
});

export const CardProvider = ({ children }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [cardItems, setCardItems] = useState([]);
  const [cardItemCount, setCardItemCount] = useState(0);
  const [cardTotal, setCardTotal] = useState (0);

  useEffect(() => {
    const count = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity,
      0
    );
    setCardItemCount(count);
  }, [cardItems]);

  useEffect(() => {
    const newTotal = cardItems.reduce(
      (total, cardItem) => total + cardItem.quantity * cardItem.price,
      0
    );
    setCardTotal(newTotal);
  }, [cardItems]);

  const addItemToCard = (product) =>
    setCardItems(addCardItem(cardItems, product));

  const removeItemToCard = (product) =>
    setCardItems(removeCardItem(cardItems, product));

  const clearItemFromCard = (product) =>
    setCardItems(clearCardItem(cardItems, product));

  const value = {
    isCardOpen,
    setIsCardOpen,
    cardItems,
    addItemToCard,
    cardItemCount,
    removeItemToCard,
    clearItemFromCard,
    cardTotal
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
