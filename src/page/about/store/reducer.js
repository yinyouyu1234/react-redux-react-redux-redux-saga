
const store = {
  tiger: 800,
  data: []
}

//这是reducer
const about = (state = store, action) => {
  console.log(state, 2222222)
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case '涨工资2':
      newState.tiger += 100
      return newState;
    case '扣工资2':
      newState.tiger -= 100
      return newState;
    case 'getListData':
      newState.data = action.value
      return newState;
    default:
      return newState;
  }
}
export default about