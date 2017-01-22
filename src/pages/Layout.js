import React from 'react'
import { Link } from 'react-router'

import style from './reset.scss'

import NavContainer from '../containers/Nav/NavContaner'

export default class Layout extends React.Component {
  render() {
    const  { location } = this.props

    return (
      <div>
        <NavContainer />

        {this.props.children}
      </div>
    );
  }
}
