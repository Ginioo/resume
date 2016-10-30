import React, {Component} from 'react';
import ProfilePicture from './ProfilePicture';
import MailButton from './MailButton';

export default class App extends Component {
    render() {
        return (
            <div class="container">
                <div className="col-xs-12 col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
                    <MailButton />
                    <ProfilePicture
                        name="Gino Wu"
                        title="Web Developer"
                        src="https://avatars0.githubusercontent.com/u/9994905?v=3&s=460"
                    />
                </div>
            </div>
        );
    }
}
