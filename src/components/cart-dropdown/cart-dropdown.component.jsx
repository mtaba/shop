import React, { Component } from 'react'
import { connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

class CartDropdown extends Component {
    
    render() {
        const {cartItems} = this.props;
  console.log("cartItems",cartItems);
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        return (
            <div className="cart-dropdown">
                <div className="cart-items" >
                {
                    this.props.cartItems.map(item=>{
                        return <div className="cart-item">
                          <img className="item-image" src={item.imageUrl} />  {item.name} - {item.price}
                            </div>
                    })
                }
                </div>

                <CustomButton >GOT TO CHECKOUT </CustomButton>
                
            </div>
        )
    }
}
const mapStateToProps = ({cart})=>({
 cartItems : cart.cartItems
})

export default connect(mapStateToProps,null)(CartDropdown)