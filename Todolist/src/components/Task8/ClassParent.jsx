import React, { Component } from 'react'
import ClassChild from './ClassChild'

export class ClassParent extends Component {
  render() {
    return (<>
    <div>Parent Class passing the props in child class based components</div>
      <ClassChild name='naman'/>
    </>
      
    )
  }
}

export default ClassParent