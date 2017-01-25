import React from 'react'

import Header from './components/Header'
import style from './styles/page.scss'

export default class Test1 extends React.Component {
  render() {
    return (
      <div className='pageWrapper'>
        <Header headerClass='security' headerName='Security' />
      </div>
    );
  }
}