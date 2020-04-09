import React, { Component } from 'react'
import './hoc.scss'
export default class Hoc extends Component {
  componentDidMount(){
    if(!this.updater.isMounted(this)) return
  }
  render() {
    return (
      <div className="sas">
        hoc
      </div>
    )
  }
}
