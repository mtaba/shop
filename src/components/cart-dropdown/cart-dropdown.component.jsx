import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../custom-button/custom-button.component';
import { connect} from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors'
import './cart-dropdown.styles.scss';

class CartDropdown extends Component {
    
    render() {
        return (
            <div className="cart-dropdown">
                <div className="cart-items" >
                {
                    this.props.cartItems.map(item => ( <CartItem key={item.id} item={item}  />))
                }
                </div>

                <CustomButton >GOT TO CHECKOUT </CustomButton>
                
            </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
 cartItems : selectCartItems
})

export default connect(mapStateToProps,null)(CartDropdown)