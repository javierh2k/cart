import { createStore } from 'redux';



export function saveDataJson(id, data) {
	var names = loadDataJson(id);
	names.push(data);
	localStorage.setItem(id, JSON.stringify(names));
}

export function loadDataJson(id) {
	var names = JSON.parse(localStorage.getItem(id) || "[]");
	return names;
}


const reducer= (state,action) => {

    if(action.type==="ADD_TO_CART"){
        console.log("entro add to cart");
        state.cart=[];
        if( loadDataJson('cart') ){
            let json=loadDataJson('cart');
            for (let i=0;i<json.length;i++){
                state.cart.push( (json[i]) );
            }
        }
        saveDataJson('cart',action.product);        
        return {
            ...state,
            cart:state.cart.concat(action.product)
        }
    }else if(action.type==="REMOVE_FROM_CART"){
        let json=loadDataJson('cart');
        for (let i=0;i<json.length;i++){
            if (json[i].id == action.product.id) json.splice(i,1);
            localStorage["cart"] = JSON.stringify(json);
        }
        
        return {
            ...state,
            cart:state.cart.filter( product => product.id !== action.product.id )
        }
    }


    return state;
}

    
    



export default createStore(reducer,{ cart: [] });