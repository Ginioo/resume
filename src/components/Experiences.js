import React, {Component} from 'react';

export default class Experiences extends Component {
  render() {
    return (
      <section className="success" id="experiences">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Experiences</h3>
              <hr className="star-light"/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <ul>
                <li><p>Currently I'm preparing TOEFL and GRE exams</p></li>
                <li><p>2 May 2016 - 30 Sep 2016 Bloomon (full-stack)</p></li>
                <li><p>16 Feb 2012 - 29 Apr 2016 Taiwan Mobile Co Ltd. (backend)</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}