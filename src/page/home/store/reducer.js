
const store = {
  tiger: 10000,
  data: []
}

//这是reducer
const home = (state = store, action) => {
  console.log(state, 1111111111)
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case '涨工资':
      newState.tiger += 100
      return newState;
    case '扣工资':
      newState.tiger -= 100
      return newState;
    case 'getListData':
      newState.data = action.value
      return newState;
    default:
      return newState;
  }
}
export default home