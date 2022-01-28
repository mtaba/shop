import SHOP_DATA from './shop.data'

const INITAL_STATE = {
    collections : SHOP_DATA
}

const ShopReducer =(state=INITAL_STATE, action)=>{
    switch (action.type) {
        default:
            return state;
    }
}

export default ShopReducer;