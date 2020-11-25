import {INCREASE,DECREASE,CLEAR_CART} from './actions';


const reducer = (state,action) =>  {
    switch(action.type){
        case 'INCREASE':
            return [...state,state.amount+1];
        case 'CLEAR_CART':
            return {...state,cart:[]}
        default:
            return state;
        }
}


export default reducer;