import { put } from 'redux-saga/effects';
import axios from 'axios';
import { getListData } from './actionCreater';

// 获取数据的异步操作
export function* getDataFrom() {
  console.log(1)
  try {
    const res = yield axios.get('./list.json');
    yield put(getListData(res.data.data));
  } catch (e) {
    console.log('请求错误');
  }
}
