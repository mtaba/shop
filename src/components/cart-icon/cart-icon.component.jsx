import { connect} from 'react-redux'
import {toggleCartHidden} from  '../../redux/cart/cart.actions'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

  
 const CartIcon=({toggleCartHidden, cartItems})=> {
        return (
            <div className="cart-icon" onClick={toggleCartHidden}>
                <ShoppingIcon className="shopping-icon" />
                <span className="item-count">{cartItems.length}</span>
            </div>
        )
    }

const mapDispatchToProps = dispatch =>({
    toggleCartHidden:  ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart})=>({
 cartItems : cart.cartItems
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)