import CartActionTypes from './cart.types';
const INITIL_STATE={
    hidden:true
}

const CartReducer = (state= INITIL_STATE, action)=>{
    console.log("in card reducer")
switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
        return({
            ...state,
             hidden: !state.hidden
        }
        )
    default:
        return state;
}
}

export default CartReducer;