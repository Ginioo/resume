import React, {Component} from 'react';
import {connect} from 'react-redux';

export class ProfilePicture extends Component {
    render() {
        return (
            <div className={`profile-picture ${this.props.display}`}>
                <label>{this.props.name}</label>
                <br />
                <img src={this.props.src}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {display: state.profilePictureState.display};
}

export default connect(mapStateToProps)(ProfilePicture);