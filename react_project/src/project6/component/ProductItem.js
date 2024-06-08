const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <h3>{product.name}</h3>
      <p>{product.price}원</p>
      <button onClick={() => addToCart(product)}>장바구니에 추가</button>
    </div>
  );
};

export default ProductItem;
