import { combineReducers } from 'redux'
import home from '../page/home/store/reducer'
import about from '../page/about/store/reducer'
import product from '../page/product/store/reducer.js';

export default combineReducers({
  home,
  about,
  product
})