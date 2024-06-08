const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>{item.price}원</p>
      <p>수량: {item.quantity}</p>
    </div>
  );
};

export default CartItem;
