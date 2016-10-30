import React, {Component} from 'react';

export class MailButton extends Component {
    render() {
        return (
            <div className="mail-box">
                <div className="row">
                    <a href="mailto:nikeorz@gmail.com">
                        <span className="glyphicon glyphicon-envelope"></span>
                        <span>Send an Email</span>
                    </a>

                </div>
            </div>

        );
    }
}

export default MailButton;