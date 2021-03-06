import { createStructuredSelector } from 'reselect'
import { selectCartItems,selectCartTotalPrice } from '../../redux/cart/cart.selectors';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkOutPage.styles.scss'
const CheckOut = ({cartItems,totalPrice})=>{
    return (
     <div className="checkout-page">
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
      {
          cartItems.map(item=>(
             <CheckoutItem key={item.id} cartItem={item} />
         ))
        }
      <div>Totla Price: ${totalPrice}</div>
     </div>
      
    );

}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})
export default connect(mapStateToProps)(CheckOut);