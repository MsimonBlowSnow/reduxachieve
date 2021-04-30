const changeBook = require('./book')
const changeUser = require('./user')

const combineReducers = (reducers) =>{
  const reducerkeys = Object.keys(reducers);
  return function reducerAll(state,action){
    const nextState = {};
    for (const key of reducerkeys) {
      const currentState = state[key]; //获取当前的状态
      const currentReducer = reducers[key];
      nextState[key] = currentReducer(currentState,action);
    }
    return nextState;
  }
}

const reducer = combineReducers({
  book: changeBook,
  user:changeUser
});
console.log(reducer,"1111")
module.exports = {reducer};