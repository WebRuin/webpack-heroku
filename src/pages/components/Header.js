import React from 'react';
import style from './header.scss';

export default class Test3 extends React.Component {
  render() {
    return (
      <header className={ this.props.headerClass }>
        <h1>{ this.props.headerName }</h1>
      </header>
    );
  }
}