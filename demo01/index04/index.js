/* 
  拆分多个reducer
*/
// import {changeLoginStatus} from './reducer'
const {reducer} = require('./reducer');

function createStore(reducer){
  let state = {};
  const listeners = [];
  function subscibe(event){
    listeners.push(event);
  }

  function dispatch(action){
    state = reducer(state,action);
    // state = {...state,...newState};
    listeners.forEach(item =>{
      item();
    })
  }
  function getState(){
    return state;
  }

  dispatch({type: Symbol()}); // dispatch 一个不等的参数初始化state
  return {
    subscibe,
    dispatch,
    getState,
  }
}

const {subscibe,dispatch,getState} = createStore(reducer);

subscibe(()=>{
  const state = getState();
  console.log("你是谁呀");
  console.dir(state);
})
dispatch({name: 'zs',type: 'setName'});
dispatch({age: 19,type: 'setAge'});
dispatch({sex: '无',type: 'setSex'});
dispatch({motto: '名言名句',type: 'setMotto'});
dispatch({name: '水浒传',type: 'changeBook'});
