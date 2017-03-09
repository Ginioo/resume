import React, {Component} from 'react';

import profile from "../images/profile.png";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container" id="maincontent">
          <div className="row">
            <div className="col-lg-12">
              {/*<img className="img-responsive profile" src={profile} alt="" />*/}
                <div className="intro-text">
                  <h2 className="name">GINO WU</h2>
                  <hr className="star-light" />
                    <span className="skills">Web Developer</span>
                </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}