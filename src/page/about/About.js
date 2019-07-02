import React from 'react'
import Template from '../layout/Template'
import { connect } from 'react-redux';
import { increase, decrease } from './store/actionCreater'
import { getListDataSagas } from './store/actionCreater';
import { PageHeader, Button } from 'antd';
import intl from 'react-intl-universal';

class About extends React.Component {

  componentDidMount() {
    this.props.GetData()

    this.locales = {
      "en-US": require('../../locales/en-US.json'),
      "zh-CN": require('../../locales/zh-CN.json'),
    };

    intl.init({
      currentLocale: 'en-US', // TODO: determine locale here
      locales: this.locales,
    })
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
            {intl.get('INPUT_MOBILE')}
            <h2>当月工资为{this.props.about.tiger}</h2>
            <Button onClick={() => {
              PayIncrease(); intl.init({
                currentLocale: 'zh-CN', // TODO: determine locale here
                locales: this.locales,
              })
            }} type="primary">升职加薪</Button>
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