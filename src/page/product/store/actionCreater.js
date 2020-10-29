import { GET_PRODUCT_LIST, GET_PRODUCT_INFO } from './typeCreater';

export const getProductList = (data)=>({
  type:GET_PRODUCT_LIST,
  value:data
})


export const getProductInfo = (data)=>({
  type:GET_PRODUCT_INFO,
  value:data
})