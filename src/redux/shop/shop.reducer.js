import SHOP_DATA from './shop.data'
import ShopActionTypes from './shop.types'
const INITAL_STATE = {
    collections : ''
}

const ShopReducer =(state=INITAL_STATE, action)=>{
    console.log("i am action",action.type)
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
        return ({
            ...state,
            collections : action.payload
        })
         
        default:
            return state;
    }
}

export default ShopReducer;