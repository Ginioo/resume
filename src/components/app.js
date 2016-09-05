import React, {Component} from 'react';
import CommandBox from './CommandBox';
import CommandHistory from './CommandHistory';
import ProfilePicture from './ProfilePicture';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>Available commands:</div>
        <ul className="instruction">
          <li>profile: To show Gino's profile picture.</li>
          <li>clear: To clear console.</li>
        </ul>
        <CommandHistory />
        <CommandBox />
        <ProfilePicture />
      </div>
    );
  }
}
