import {INCREASE,DECREASE} from './actions';


const reducer = (state,action) =>  {
    switch(action.type){
        CASE 'INCREASE':{
            return {...state,count:state.count+1}
        }
    }
}


export default reducer;