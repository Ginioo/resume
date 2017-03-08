import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

import '../styles/index.scss';
import '../styles/css/freelancer.css';
import '../styles/css/font-awesome.css';

import NavBar from './NavBar';
import Header from './Header';
import Intro from './Intro';
import Experiences from './Experiences';

export default class App extends Component {

  render() {
    return (
      <div id="page-top" className="index">
        <NavBar />
        <Header />
        <Intro />
        <Experiences />
        {this.props.children}
      </div>

    );
  }
}
