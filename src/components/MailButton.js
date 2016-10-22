import React, {Component} from 'react';

export class MailButton extends Component {
    render() {
        return (
            <div className="mail-box">
                <div className="row">
                    {/*<button type="button" className="btn btn-default btn-lg">*/}
                        <span className="glyphicon glyphicon-envelope"></span>
                    {/*</button>*/}
                </div>
            </div>

        );
    }
}

export default MailButton;