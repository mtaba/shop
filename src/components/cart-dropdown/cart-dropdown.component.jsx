import { createStructuredSelector } from 'reselect'
import { withRouter }  from 'react-router-dom'
import CustomButton from '../custom-button/custom-button.component';
import { connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden} from '../../redux/cart/cart.actions'
import './cart-dropdown.styles.scss';

const CartDropdown=({ cartItems, history, dispatch})=>(
            
            <div className="cart-dropdown">
                <div className="cart-items" >
                {  cartItems.length ?
                    cartItems.map(item => ( <CartItem key={item.id} item={item}  />))
                    : <span className="empty-message">Your cart is empty</span>
                }
                </div>
                <CustomButton onClick={()=>{
                    history.push('/checkout')
                    dispatch(toggleCartHidden())
                    }} >GOT TO CHECKOUT </CustomButton>
                
</div>
        )
    

const mapStateToProps = createStructuredSelector({
 cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));