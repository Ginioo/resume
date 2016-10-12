import React, {Component} from 'react';
import {connect} from 'react-redux';

export class ProfilePicture extends Component {
    render() {
        return (
            <div className={`profile-picture ${this.props.display}`}>
                <div className="row">
                    <div className="col-xs-12 col-sm-4 col-md-4 col-sm-offset-4 col-md-offset-4 col-lg-4 col-lg-offset-4">
                        <div className="thumbnail text-center">
                            <div className="caption">
                                <h3>{this.props.name}</h3>
                            </div>
                            <img src={this.props.src}/>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {display: state.profilePictureState.display};
}

export default connect(mapStateToProps)(ProfilePicture);