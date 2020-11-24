import {INCREASE,DECREASE} from './actions';


const reducer = (state,action) =>  {
    switch(action.type){
        case 'INCREASE':
            return [...state,state.amount+1];
        default:
            return state;
        }
}


export default reducer;