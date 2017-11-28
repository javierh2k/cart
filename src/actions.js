const addToCart = product => {   
    return {
        type:'ADD_TO_CART',
        product
    }
}

const removeFromCart = product => {
    return {
        type:'REMOVE_FROM_CART',
        product
    }
}

const refreshListFilter = products => {
    return {
        type:'REFRESH_LIST_FILTER',
        products
    }
}



export { addToCart, removeFromCart ,refreshListFilter };