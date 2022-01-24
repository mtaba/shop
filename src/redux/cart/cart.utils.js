 const addItemToCart= (cartItems,itemToAdd)=>{
    const existingItem = cartItems.find(item=>(item.id === itemToAdd.id ))
    if(existingItem){
        //    return [...cartItems , existingItem.quantity +1
       return  cartItems.map(item=>(
             item.id === itemToAdd.id 
             ? {...item, quantity: item.quantity +1 }
             : item
             ))
    }
    return (
        [...cartItems, {...itemToAdd, quantity:1}]
    )
}

export const increaseItemQuantity=(cartItems,item)=>{
   return  cartItems.map(cartItem=> (
        cartItem.id === item.id  
        ? { ...cartItem, quantity: cartItem.quantity+1 }
        : cartItem
        ) 
   )
}

export const decreaseItemQuantity=(cartItems,item)=>{
    const existingItem = cartItems.find(cartItem=>(cartItem.id === item.id ))
    if(existingItem.quantity === 1){
        return cartItems.filter(cartItem=>cartItem.id !== existingItem.id)
    }
   return  cartItems.map(cartItem=> (
        cartItem.id === item.id  
        ? { ...cartItem, quantity: cartItem.quantity-1 }
        : cartItem
        ) 
   )
}
export default addItemToCart;