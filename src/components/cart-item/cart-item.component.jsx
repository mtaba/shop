import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img  src={item.imageUrl} alt={item.name} />
      <div className="item-details">
        <span>{item.name}</span>
        <span>
          {item.quantity} * ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
// const mapStateToProps = ({cart})=>({
//     cartItems : cart.cartItems
//    })

//    export default connect(mapStateToProps,null)(CartDropdown)
