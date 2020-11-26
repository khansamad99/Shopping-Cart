import {INCREASE,DECREASE,CLEAR_CART,REMOVE,GET_TOTAL,GET_AMOUNT} from './actions';


const reducer = (state,action) =>  {
    switch(action.type){
        case INCREASE:{
                let temp = state.cart.map(cartItem => {
                    if(cartItem.id === action.payload.id){
                        cartItem = {...cartItem,amount:cartItem.amount+1}
                    }
                    return cartItem;
                });
                return {...state,cart:temp};
        }
        case CLEAR_CART:
            return {...state,cart:[]};
        case REMOVE:
            return {...state,cart:state.cart.filter(cartItem => cartItem.id !== action.payload.id)};
        default:
            return state;
        }
}


export default reducer;