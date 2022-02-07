import ShopActionTypes from './shop.types'

const updateCollections = (collections)=>({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload:collections
})

export default updateCollections;