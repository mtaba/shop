import ShopActionTypes from './shop.types'
const INITAL_STATE = {
    collections : null
}

const ShopReducer =(state=INITAL_STATE, action)=>{
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
        console.log("action.payload", action.payload)
        return ({
            ...state,
            collections : action.payload
        })
         
        default:
            return state;
    }
}

export default ShopReducer;