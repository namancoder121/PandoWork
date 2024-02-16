import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class ClassChild extends Component {
  constructor(props){
    super(props) // this is used for invoking the parent class 

  }

  render() {
    return (
      <div> Hello i am a class based component:= {this.props.name}</div>
    )
  }
}

export default ClassChild