import CartActionTypes from './cart.types';
import addItemToCart from './cart.utils'
const INITIL_STATE={
    hidden:true,
    cartItems:[]
}

const CartReducer = (state= INITIL_STATE, action)=>{
    console.log("action payload",action.payload)
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
    default:
        return state;
}
}

export default CartReducer;