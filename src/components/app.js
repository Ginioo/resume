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
                    <div>
                        /**
                         * 1-10 Scale
                         * 10 means the most familiar with
                         */
                        [tech stack : scale]
                        <ul>
                            <li> php 5.x : 6</li>
                            <li> laravel 5.x  : 6</li>
                            <li> phalcon : 3</li>
                            <li> composer : 6</li>
                            <li> git : 6</li>
                            <li> docker : 5</li>
                            <li> mysql : 5</li>
                            <li> mssql : 6</li>
                            <li> javascript（es6) : 6</li>
                            <li> react.js : 5</li>
                            <li> gulp : 4</li>
                            <li> weback : 5</li>
                            <li> angularJS 1.x : 4</li>
                            <li> google app script : 3</li>
                            <li> css : 3</li>
                            <li> travis-ci : 3</li>
                            <li> phpunit : 5</li>
                            <li> behat : 5</li>
                            <li> mocha : 5</li>
                            <li> nightwatchjs : 6</li>
                        </ul>
                        </div>
                </div>
            </div>
        );
    }
}
