import React from 'react';
import About from './page/about/About'
import { HashRouter, Route, Switch } from 'react-router-dom'

export default class A extends React.Component {

  render() {
    console.log(111111)
    const auth = Math.random() < 0.5
    console.log(auth, Math.random)
    return (
      auth && <Route path='/about' exact component={About} />
    )
  }
}