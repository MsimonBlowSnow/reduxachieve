/* 
  按一定的计划修改state，即添加一个reduce:
    reducer 接受两个参数,state和action
    reducer 保证你按一定的计划更新state 这里使用plan

    注意:这里的plan 就是 reducer
        changeState 就是dispatch
*/
function createStore(plan,initState){
  let state = initState;
  const listeners = [];
  function subscibe(event){
    listeners.push(event);
  }

  function changeState(action){
    state = plan(state,action);
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


const plan = (state,action) =>{
  switch (action.type) {
    case 'setName':
      return {...state,name:action.name};
    case 'setAge':
      return {...state,age: action.age};
    case 'setMotto':
      return {...state,motto:action.motto};
    case 'setSex':
      return {...state,sex:action.sex};
    default:
      return state;
  }
}

const initState = {name:"ming",age: 18,sex: "男",motto:"头都是大的"};
const {subscibe,changeState,getState} = createStore(plan,initState);

subscibe(()=>{
  const state = getState();
  console.log("你是谁呀");
  console.dir(state);
})
changeState({});
changeState({name: 'zs',type: 'setName'});
changeState({age: 19,type: 'setAge'});
changeState({sex: '无',type: 'setSex'});
changeState({motto: '名言名句',type: 'setMotto'});
