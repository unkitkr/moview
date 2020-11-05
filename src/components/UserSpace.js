import React, { Component } from 'react';
import './components.css'
import Docker from "./docker"
import ReviewPlane from './ReviewPlane'

class UserSpace extends Component {
    state = {  }
    render() {
        return (
            <div className = "user-space">
                <Docker/>
                <ReviewPlane/>
            </div>
        );
    }
}

export default UserSpace;
