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

let {subscibe,dispatch,getState} = createStore(reducer);

const origindispatch = dispatch;

/* 
  添加两个中间件
    一个日志，一个错误处理
  缺点:
    expceptionMiddleware 中写死了loggerMiddleware 中间件
    中间件使用了origindispatch ，可以考虑动态传入origindispatch
*/

//添加中间件
const loggerMiddleware = (action) =>{
    console.log('==========start================');
    console.log('添加日志中间件，begin');
    origindispatch(action);
    console.log('添加日志中间件，End');
    console.log('==========End===========');
}
//添加处理错误处理中间件
const exceptionMiddleware = (action) => {
  console.log('\n======处理错误的中间件 start=========');
  loggerMiddleware(action);
  console.log('====== 处理错误中间件 end=========\n');
}

dispatch = exceptionMiddleware;



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
