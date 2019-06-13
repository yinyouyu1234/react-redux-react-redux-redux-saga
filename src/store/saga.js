
import { takeEvery } from 'redux-saga/effects';

import getDataFromServer from '../page/home/store/saga';
import getDataFrom from '../page/about/store/saga';

function* mySaga() {
  // 这句代码意思是：当接收到一个名叫GET_LIST_DATA_SAGAS的action的时候回去调用getDataFromServer方法
  yield takeEvery('get_list_data_sagas', getDataFromServer);
  yield takeEvery('get_list', getDataFrom);
}

export default mySaga