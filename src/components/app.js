import React, {Component} from 'react';
import ProfilePicture from './ProfilePicture';

export default class App extends Component {
    render() {
        return (
            <div class="container">
                <ProfilePicture
                    name="Gino Wu"
                    src="https://avatars0.githubusercontent.com/u/9994905?v=3&s=460"
                />
            </div>
        );
    }
}
