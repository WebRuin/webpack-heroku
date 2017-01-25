import React from "react"

import style from './subNav.scss'

export default class SubNav extends React.Component {
  render() {

    const li = this.props.subLinks.map((li) =>
      <li key={ li } onClick={ this.props.setSubPage.bind(this, li) }>{ li }</li>
    )

    return (
      <nav>
        <ul>
          { li }
        </ul>
      </nav>
    );
  }
}