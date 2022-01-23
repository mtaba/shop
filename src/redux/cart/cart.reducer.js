import CartActionTypes from './cart.types';
import addItemToCart, { increaseItemQuantity , decreaseItemQuantity} from './cart.utils'
const INITIL_STATE={
    hidden:true,
    cartItems:[]
}

const CartReducer = (state= INITIL_STATE, action)=>{
switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
        return({
            ...state,
             hidden: !state.hidden
        })
    
    case CartActionTypes.ADD_ITEM:
        return ({
            ...state,
           cartItems:  addItemToCart(state.cartItems,action.payload) 
        })   
    
    case CartActionTypes.REMOVE_ITEM:
        return ({
            ...state,
           cartItems:  state.cartItems.filter(cartItem=>  cartItem.id !== action.payload.id  ) 
        }) 
    
    case CartActionTypes.INCREASE_ITEM_QUANTITY:
        return ({
            ...state,
           cartItems: increaseItemQuantity(state.cartItems, action.payload)
        }) 
        
        case CartActionTypes.DECREASE_ITEM_QUANTITY:
        return ({
            ...state,
           cartItems: decreaseItemQuantity(state.cartItems, action.payload)
        })     
    default:
        return state;
}
}

export default CartReducer;