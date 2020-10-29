
import { takeEvery } from 'redux-saga/effects';

import { getDataFromServer } from '../page/home/store/saga';
import { getDataFrom } from '../page/about/store/saga';
import { GET_LIST_DATA_SAGA } from '../page/home/store/typeCreater';
import { GET_LIST } from '../page/about/store/typeCreater';
//产品
import { GET_PRODUCT_LIST, GET_PRODUCT_INFO} from '../page/product/store/typeCreater.js';
import {getProductList, getProductInfo} from '../page/product/store/saga.js';


function* mySaga() {
  // 这句代码意思是：当接收到一个名叫GET_LIST_DATA_SAGAS的action的时候回去调用getDataFromServer方法
  yield takeEvery(GET_LIST_DATA_SAGA, getDataFromServer);
  yield takeEvery(GET_LIST, getDataFrom);
  
  yield takeEvery(GET_PRODUCT_LIST, getProductList);
  yield takeEvery(GET_PRODUCT_INFO, getProductInfo);
}

export default mySaga