import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    return (
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-lg-4  col-lg-offset-2">
                <h2 className="name">Linked In</h2>
                <ul className="list-inline">
                  <li>
                    <a href="https://www.linkedin.com/in/gino-wu-077151b6/" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col-lg-4">
                <h2 className="name">Email Me</h2>
                <p><a href="mailto:someone@example.com?Subject=Hello%20again" target="_top">nikeorz@gmail.com</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-below">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                Copyright &copy; FENG-CHIN WU 2017
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}