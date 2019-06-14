import { UP, DOWN } from './typeCreater'
import { GET_LIST_DATA } from '../../home/store/typeCreater';

const store = {
  tiger: 800,
  data: []
}

//这是reducer
const about = (state = store, action) => {
  console.log(state, 2222222)
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case UP:
      newState.tiger += 100
      return newState;
    case DOWN:
      newState.tiger -= 100
      return newState;
    case GET_LIST_DATA:
      newState.data = action.value
      return newState;
    default:
      return newState;
  }
}
export default about