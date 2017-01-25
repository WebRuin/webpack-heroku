import React from "react"

import Header from './components/Header'
import style from './styles/page.scss'

import SubNav from './components/SubNav'

// Sub Content
import About from './Subs/About'
import Locations from './Subs/Locations'
import Pricing from './Subs/Pricing'
import Services from './Subs/Services'
import Team from './Subs/Team'

export default class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      subPage: <About />,
      subLinks: [ 'about', 'locations', 'pricing', 'services', 'team' ]
    }

    this.setSubPage = this.setSubPage.bind(this)
  }

  setSubPage(sub) {
    switch (sub) {
      case 'about':
        this.setState({
          subPage: <About />
        })
        break
      case 'locations':
        this.setState({
          subPage: <Locations />
        })
        break
      case 'pricing':
        this.setState({
          subPage: <Pricing />
        })
        break
      case 'services':
        this.setState({
          subPage: <Services />
        })
        break
      case 'team':
        this.setState({
          subPage: <Team />
        })
        break
    }
  }

  render() {
    return (
      <div>
        <Header headerClass='index' headerName='Index' />
        <SubNav subLinks={ this.state.subLinks } setSubPage={ this.setSubPage } />
        { this.state.subPage }
      </div>
    );
  }
}
