import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="container" id="main">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="heading">Contact with Me</h3>
              <hr className="hidden-lg hidden-md hidden-sm star-primary"/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4" />
            <div className="col-lg-8 heading-2">
              <div className="row">
                <div className="col-sm-2-offset-1 col-xs-6">
                  <h6 className="heading-2">JoB</h6>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <span>Developer</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2-offset-1 col-xs-6">
                  <h6 className="heading-2">Mobile</h6>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <span>(+886)933-941-061</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2-offset-1 col-xs-6">
                  <h6 className="heading-2">Email</h6>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <span>nikeorz@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}