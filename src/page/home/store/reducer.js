import { GET_LIST_DATA } from './typeCreater'

const store = {
  tiger: 10000,
  data: []
}

//这是reducer
const home = (state = store, action) => {
  console.log(state, 1111111111)
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case GET_LIST_DATA:
      newState.data = action.value
      return newState;
    default:
      return newState;
  }
}
export default home