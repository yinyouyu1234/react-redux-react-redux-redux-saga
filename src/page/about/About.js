import React from 'react'
import Template from '../layout/Template'
import { connect } from 'react-redux';
import { increase, decrease } from './store/actionCreater'
import { getListDataSagas } from './store/actionCreater';
class About extends React.Component {

  componentDidMount() {
  }
  componentDidMount() {
    this.props.GetData()
  }
  render() {
    console.log(this.props)
    const { PayIncrease, PayDecrease } = this.props;
    return (
      <div>
        <Template>
          <div className="App">
            about
            <h2>请求回来的数据是{this.props.tiger.about.data}</h2>
            <h2>当月工资为{this.props.tiger.about.tiger}</h2>
            <button onClick={PayIncrease}>升职加薪</button>
            <button onClick={PayDecrease}>迟到罚款</button>
          </div>
        </Template>
      </div>
    )
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return {
    tiger: state
  }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch(increase),
    PayDecrease: () => dispatch(decrease),
    GetData: () => dispatch(getListDataSagas)
  }
}

export default About = connect(mapStateToProps, mapDispatchToProps)(About)