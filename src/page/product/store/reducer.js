import { GET_PRODUCT_LIST, GET_PRODUCT_INFO } from 'typeCreater';

const store = {
  tiger: 10000,
  productList: [],
  productInfo:{}
}
const Product =(state = store, action)=>{

  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type){

  case GET_PRODUCT_LIST :
    newState.productList = action.value; 
    return newState;

  case GET_PRODUCT_INFO :

    newState.productInfo = action.value; 
    return newState;

    default:
     return newState;
  }
}

export default Product;