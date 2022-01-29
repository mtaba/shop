import {createSelector} from 'reselect';
 
const selectShop = state=>state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectShopCollection = collectionUrlParam=>(
createSelector(
    [selectShopCollections],
    collections=>collections[collectionUrlParam]

))

