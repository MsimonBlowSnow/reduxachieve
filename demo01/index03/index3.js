/* 
  拆分多个reducer
*/
// import {changeLoginStatus} from './reducer'
const {changeBook,changeUser} = require('./reducer');

const combineReducers = (reducers) =>{
  const reducerkeys = Object.keys(reducers);
  console.log(reducerkeys);
  return function reducerAll(state,action){
    const nextState = {};
    for (const key of reducerkeys) {
      const currentState = state[key]; //获取当前的状态
      const currentReducer = reducers[key];
      console.log(currentReducer)
      nextState[key] = currentReducer(currentState,action);
    }
    return nextState;
  }
}

const reducer = combineReducers({
  book: changeBook,
  user:changeUser
});

function createStore(reducer,initState){
  let state = initState;
  const listeners = [];
  function subscibe(event){
    listeners.push(event);
  }

  function changeState(action){
    state = reducer(state,action);
    // state = {...state,...newState};
    listeners.forEach(item =>{
      item();
    })
  }
  function getState(){
    return state;
  }
  return {
    subscibe,
    changeState,
    getState,
  }
}



const initState = {user:{name:'zs',age:'18',motto: '我的天',sex:'男'},book:{name:'三国演义'}};
const {subscibe,changeState,getState} = createStore(reducer,initState);

subscibe(()=>{
  const state = getState();
  console.log("你是谁呀");
  console.dir(state);
})
changeState({name: 'zs',type: 'setName'});
changeState({age: 19,type: 'setAge'});
changeState({sex: '无',type: 'setSex'});
changeState({motto: '名言名句',type: 'setMotto'});
changeState({name: '水浒传',type: 'changeBook'});
