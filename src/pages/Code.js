import React from 'react'

import Header from './components/Header'
import style from './styles/page.scss'

export default class Test2 extends React.Component {
  render() {
    return (
      <div className='pageWrapper'>
        <Header headerClass='code' headerName='Code' />
      </div>
    );
  }
}