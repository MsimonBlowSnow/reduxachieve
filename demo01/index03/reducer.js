const changeUser = (state,action) =>{
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

const changeBook = (state,action) =>{
  switch (action.type) {
    case 'changeBook':
      return {...state,name: action.name};
    default:
      return state;
  }
}

module.exports = {
  changeUser,
  changeBook
}