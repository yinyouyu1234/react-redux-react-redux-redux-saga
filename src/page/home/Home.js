import React from 'react'
import Template from '../layout/Template'
import { connect } from 'react-redux';
import { getListDataSagas } from './store/actionCreater';
import intl from 'react-intl-universal';

import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');
class Home extends React.Component {

  componentDidMount() {
    this.props.GetData('传参数')
    const locales = {
      "en-US": require('../../locales/en-US.json'),
      "zh-CN": require('../../locales/zh-CN.json'),
    };

    intl.init({
      currentLocale: 'zh-CN', // TODO: determine locale here
      locales,
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <Template>
          <CodeMirror
            value='<h1>I ♥ react-codemirror2</h1>'
            options={{
              mode: 'xml',
              theme: 'material',
              lineNumbers: true
            }}
            onChange={(editor, data, value) => {
              console.log(editor, data, value)
            }}
          />
        </Template>
        {intl.get('SIMPLE')}11
      </div>
    )
  }
}
//需要渲染什么数据
const mapStateToProps = (state) => {
  return state
}
//需要触发什么行为
const mapDispatchToProps = (dispatch) => {
  return {
    GetData: (data) => dispatch(getListDataSagas(data))
  }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home)