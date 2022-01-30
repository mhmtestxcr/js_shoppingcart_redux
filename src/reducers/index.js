import {data} from "../data";


const INITAL_STATE = {
    bookList:data,
    cart : []
}

export const reducer = (state = INITAL_STATE ,action) => {

    switch (action.type) {
        case 'SEPETE_EKLE' :
        return {...state, cart:[...state.cart,action.payload]};
    
        default: return state;
            
    }
}