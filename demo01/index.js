function createStore(initState){
  let state = initState;
  const listeners = [];
  function subscibe(event){
    listeners.push(event);
  }

  function changeState(newState){
    state = {...state,...newState};
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


const {subscibe,changeState,getState} = createStore({name:"ming",age: 18,sex: "男",motto:"头都是大的"});

subscibe(()=>{
  const state = getState();
  console.log("你是谁呀");
  console.dir(state);
})

changeState({name:"zs",age: 18,sex: "男",motto:"我是zs"});
changeState({name:"ls",age: 20,sex: "女",motto:"我是ls"});




