import { put } from 'redux-saga/effects';
import axios from 'axios';
import { getListData } from './actionCreater';

// 获取数据的异步操作
export function* getDataFromServer(data) {
  console.log(data)
  try {
    const res = yield axios.get(`./list.json?id=${data.value}`);
    yield put(getListData(res.data.data));
  } catch (e) {
    console.log('请求错误');
  }
}

