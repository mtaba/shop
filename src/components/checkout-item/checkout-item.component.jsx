import {connect} from 'react-redux'

import {removeItem} from '../../redux/cart/cart.actions'
import {increaseItemQuantity, decreaseItemQuantity} from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem, cleanItem , increaseItem, decreaseItem }) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <div className="checkout-item">
    <div className="image-container">
    <img  src={imageUrl} alt={name} />
    </div>
      
        <span className="name">{name}</span>
        <span className="quantity"> 
        
          
          <div className="decrease" onClick={()=>decreaseItem(cartItem)}>&#10094;</div> {quantity} 
         
        
         <div className="increase" onClick={()=>increaseItem(cartItem)}>&#10095;</div>
         </span>
        <span className="price">${price * quantity}</span>
        <div className="remove-btn" onClick={()=>{cleanItem(cartItem)}}>&#10005;</div>
      </div>
  );
};


const mapDispatchToProps = dispatch =>({
  cleanItem:  (item)=>dispatch(removeItem(item)),
  increaseItem:  (item)=>dispatch(increaseItemQuantity(item)),
  decreaseItem:  (item)=>dispatch(decreaseItemQuantity(item)),
})


export default connect(null, mapDispatchToProps)(CheckoutItem);
