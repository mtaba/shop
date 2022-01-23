import {connect} from 'react-redux'

import {removeItem} from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, cleanItem }) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <div className="checkout-item">
    <div className="image-container">
    <img  src={imageUrl} alt={name} />
    </div>
      
        <span className="name">{name}</span>
        <span className="quantity">   {quantity}</span>
        <span className="price">${price}</span>
        <div className="remove-btn" onClick={()=>{cleanItem(cartItem)}}>&#10005;</div>
      </div>
  );
};


const mapDispatchToProps = dispatch =>({
  cleanItem:  (item)=>dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);
