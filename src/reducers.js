import {INCREASE,DECREASE,CLEAR_CART,REMOVE,GET_TOTALS,GET_AMOUNT} from './actions';


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
        case DECREASE:{
            let tempCart = [];
            if(action.payload.amount === 1){
                tempCart = state.cart.filter(
                    cartItem => cartItem.id !== action.payload.id
                );
            }
            else{
                tempCart = state.cart.map(cartItem => {
                    if(cartItem.id === action.payload.id){
                        cartItem = {...cartItem,amount:cartItem.amount-1}
                    }
                    return cartItem;
                });
            }
            return {...state,cart:tempCart}
        }
        case CLEAR_CART:
            return {...state,cart:[]};
        case REMOVE:
            return {...state,cart:state.cart.filter(cartItem => cartItem.id !== action.payload.id)};
        case GET_TOTALS:{
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                  const { price, amount } = cartItem;
                  const itemTotal = price * amount;
          
                  cartTotal.total += itemTotal;
                  cartTotal.amount += amount;
          
                  return cartTotal;
                },
                {
                  total: 0,
                  amount: 0
                }
              );
              total = parseFloat(total.toFixed(2));
              return { ...state, total, amount };
        }

            default:
            return state;
        }
}


export default reducer;