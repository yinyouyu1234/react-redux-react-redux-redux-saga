import { put } from 'redux-saga/effects';

import axios from 'axios';

import { getProductList as lists , getProductInfo as Info } from './actionCreater';


//获取产品列表
export  function* getProductList(data) {
    try{
      const res = yield axios.get('/getProductList',{...data});
      yield put(lists(res.data.list));
    }catch(e){
      console.log('服务器异常，请联系管理员',e)
    }
}

//获取产品信息
export  function* getProductInfo(data) {
  try{
    const res = yield axios.get('/getProductInfo',{...data});
    yield put(Info(res.data.list));
  }catch(e){
    console.log('服务器异常，请联系管理员',e)
  }
}