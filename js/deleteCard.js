const deleteCard = (cards, card) => {
  cards.filter((item) => card.id === item.id);
};

export default deleteCard;
