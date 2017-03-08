import React, {Component} from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top navbar-custom">
        <div className="container">

          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu">
              <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#page-top">FENG-CHIN WU</a>
          </div>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="nav navbar-nav navbar-right">
              <li className="hidden">
                <a href="#page-top"></a>
              </li>
              <li className="page-scroll">
                <a href="#intro">Introduction</a>
              </li>
              <li className="page-scroll">
                <a href="#experiences">Experiences</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}