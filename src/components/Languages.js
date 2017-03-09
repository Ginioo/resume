import React, {Component} from 'react';

export default class Languages extends Component {
  render() {
    return (
      <section id="languages">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3>Language Proficiency</h3>
              <hr className="star-primary"/>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <ul>
                <li><p>Mother tougue: Mandarin</p></li>
                <li>
                  <p>TOEFL score 87/120</p>
                    <ul>
                      <li>Reading: 27/30</li>
                      <li>Listening: 22/30</li>
                      <li>Speaking: 19/30</li>
                      <li>Writing: 19/30</li>
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}