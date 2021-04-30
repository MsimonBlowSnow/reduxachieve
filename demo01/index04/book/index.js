
const bookstate = {name:'三国演义'};

const changeBook = (state,action) =>{
  if(!state) state = bookstate;
  switch (action.type) {
    case 'changeBook':
      return {...state,name: action.name};
    default:
      return state;
  }
}
module.exports = changeBook;