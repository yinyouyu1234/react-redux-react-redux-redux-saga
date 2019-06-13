import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { getListData } from './actionCreater';

// function* mySaga() {
//   // 这句代码意思是：当接收到一个名叫GET_LIST_DATA_SAGAS的action的时候回去调用getDataFromServer方法
//   yield takeEvery('get_list_data_sagas', getDataFromServer);
// }

// 获取数据的异步操作
function* getDataFromServer() {
  console.log(2)
  try {
    const res = yield axios.get('./list.json');
    yield put(getListData(res.data.data));
  } catch (e) {
    console.log('请求错误');
  }
}
export default getDataFromServer;
