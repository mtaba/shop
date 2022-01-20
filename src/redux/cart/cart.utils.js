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

export default addItemToCart;