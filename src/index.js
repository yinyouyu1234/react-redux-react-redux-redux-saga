import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/index'
import { Provider } from 'react-redux'
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zh_CN}><App /></LocaleProvider>
  </Provider>,
  document.getElementById('root'));

