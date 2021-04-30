const userstate = {name:'zs',age:'18',motto: '我的天',sex:'男'};

const changeUser = (state,action) =>{
  if(!state) state = userstate;
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
module.exports = changeUser