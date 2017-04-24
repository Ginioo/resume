import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    return (
      <footer className="text-center">
        <div className="footer-above">
          <div className="container">
            <div className="row">
              <div className="footer-col col-lg-4">
                <ul className="list-inline">
                  <li>
                    <a href="https://github.com/Ginioo" className="btn-social btn-outline"><span className="sr-only">Github</span><i className="fa fa-fw fa-github"></i></a>
                  </li>
                  <li>
                    <a href="mailto:nikeorz@gmail.com?Subject=Are%20you%20interested%20in%20this%20offer" className="btn-social btn-outline"><span className="sr-only">Email Me</span><i className="fa fa-fw fa-envelope"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/gino-wu-077151b6/" className="btn-social btn-outline"><span className="sr-only">Linked In</span><i className="fa fa-fw fa-linkedin"></i></a>
                  </li>
                </ul>
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