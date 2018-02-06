import React, {Component as Comp} from 'react'
import Component from './Component'

export default class App extends Comp {
  render(){
    return(
      <Component>
        <h1>GrandParent</h1>
        <h1>Parent</h1>
        <h1>Child</h1>
      </Component>
    )
  }
}
