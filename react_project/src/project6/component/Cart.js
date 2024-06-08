import CartItem from "./CartItem";

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>쇼핑 카트</h2>
      {cartItems.length === 0 ? (
        <p>카트가 비어 있습니다.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>총 가격: {totalPrice}원</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
