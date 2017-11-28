import { createStore } from 'redux';


const reducerProduct= (state,action) => {

   
    if(action.type==="REFRESH_LIST_FILTER"){
        return {
            ...state,
            products:(action.products)
        }
    }



    return state;
}

    
    

export default createStore(reducerProduct,{ products: [] });