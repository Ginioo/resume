import React, {Component} from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <nav id="mainNav" className="navbar navbar-fixed-top navbar-custom">
        <div className="container">

          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu" onClick={this.handleClick}>
              <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#page-top">FENG-CHIN WU</a>
          </div>

          <div className={this.state.isToggleOn ? 'collapse navbar-collapse in' : 'collapse navbar-collapse'}  id="menu">
            <ul className="nav navbar-nav navbar-right" onClick={this.handleClick}>
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li className="page-scroll">
                <a href="#experiences">Experiences</a>
              </li>
              <li className="page-scroll">
                <a href="#intro">Introduction</a>
              </li>
              <li className="page-scroll">
                <a href="#languages">Languages</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}