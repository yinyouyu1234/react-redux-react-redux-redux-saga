import { combineReducers } from 'redux'
import home from '../page/home/store/reducer'
import about from '../page/about/store/reducer'

export default combineReducers({
  home,
  about
})