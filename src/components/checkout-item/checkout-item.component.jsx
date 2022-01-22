import './checkout-item.styles.scss'

const CheckoutItem = ({ item }) => {
  return (
    <div className="checkout-item">
      <img  src={item.imageUrl} alt={item.name} />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="quantity">   {item.quantity}</span>
        <span className="price">${item.price}</span>
        <span>Remve</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
