import React from 'react'
import Topnav from '../../component/Topnav'

class Template extends React.Component {
  render() {
    return (
      <div>
        <Topnav />
        {this.props.children}
      </div>
    )
  }
}
export default Template