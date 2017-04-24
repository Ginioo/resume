import React, {Component} from 'react';

export default class Experiences extends Component {
  render() {
    return (
      <section id="experiences">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h3 className="heading">Experiences</h3>
              <hr className="hidden-lg hidden-md hidden-sm star-primary"/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4" />
            <div className="col-lg-8 heading-2">
              <div className="row">
                <div className="col-sm-2-offset-1 col-xs-6">
                  <h6 className="heading-2">1 Oct 2016 - now</h6>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <span>Hortilife Horticultural Co., Ltd. (Full Stack Developer)</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2-offset-1 col-xs-6">
                  <h6 className="heading-2">2 May 2016 - 30 Sep 2016</h6>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <span>Bloomon (Full Stack Developer)</span>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2-offset-1 col-xs-6">
                  <h6 className="heading-2">16 Feb 2012 - 29 Apr 2016</h6>
                </div>
                <div className="col-sm-6 col-xs-6">
                  <span>Taiwan Mobile Co Ltd. (Back End Developer)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}