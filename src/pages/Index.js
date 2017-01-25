import React from "react"

import Header from './components/Header'
import style from './styles/page.scss'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header headerClass='index' headerName='Index' />
      </div>
    );
  }
}