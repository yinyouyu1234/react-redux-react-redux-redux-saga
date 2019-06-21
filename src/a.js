import React from 'react';
import About from './page/about/About'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'


export default class A extends React.Component {

  constructor(props) {
    super(props)
  }
  componentDidMount() {

    console.log(this.props)

  }

  render() {
    console.log(111111)
    const auth = Math.random() < 0.5
    console.log(auth, Math.random)
    if (auth) {
      return (
        <Route path='/about' exact component={About} />
      )
    } else {
      return (
        <Redirect to="/" />
      )
    }

  }
}