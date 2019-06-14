import React from 'react'
import Template from '../layout/Template'
import { connect } from 'react-redux';
import { increase, decrease } from './store/actionCreater'
import { getListDataSagas } from './store/actionCreater';
import { PageHeader, Button } from 'antd';

class About extends React.Component {

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
            <PageHeader title="About" subTitle="This is a about" />
            <h2>请求回来的数据是{this.props.about.data}</h2>
            <h2>当月工资为{this.props.about.tiger}</h2>
            <Button onClick={PayIncrease} type="primary">升职加薪</Button>
            <Button onClick={PayDecrease} type="danger">迟到罚款</Button>
          </div>
        </Template>
      </div>
    )
  }
}
//需要渲染什么数据
function mapStateToProps(state) {
  return state
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