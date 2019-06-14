import React from 'react'
import Template from '../layout/Template'
import { connect } from 'react-redux';
import { getListDataSagas } from './store/actionCreater';

import { UnControlled as CodeMirror } from 'react-codemirror2'

require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');
class Home extends React.Component {

  componentDidMount() {
    this.props.GetData()
  }
  render() {
    return (
      <div>
        <Template>
          {/* <div className="App">
            <h2>请求回来的数据是{this.props.home.data}</h2>
            <h2>当月工资为{this.props.home.tiger}</h2>
            <button onClick={PayIncrease}>升职加薪</button>
            <button onClick={PayDecrease}>迟到罚款</button>
          </div> */}
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
    GetData: () => dispatch(getListDataSagas('传参数'))
  }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home)