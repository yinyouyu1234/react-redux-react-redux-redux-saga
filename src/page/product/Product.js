import React from 'react'
import { getProductList ,getProductInfo } from './store/actionCreater';
import { connect } from 'react-redux';

class Product extends React.Component {

  componentDidMount(){
    console.log(this.props.getLlist())
  }

  render(){
      console.log(this.props)
      return(<div>dsadsa</div>)
  }

}


//需要渲染什么数据
const mapStateToProps = (state) => {
  return state
}
//需要触发什么行为
const mapDispatchToProps = (dispatch) => {
  return {
    getLlist: (data) => dispatch(getProductList(data)),

    product: (data) => dispatch(getProductInfo(data))
  }
}


export default Product = connect(mapStateToProps,mapDispatchToProps)(Product)