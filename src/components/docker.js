import React, { Component } from 'react';
import coverPhoto from './static/sherlock.jpg'

class Docker extends Component {
    state = {  }
    render() {
        return (
            <div className="container">
            <div className="card dock-card">
              <div className="card-body dock-card-body">
                <img src={coverPhoto} className = "image-fluid dock-card-image" width = "100%" height="100%" alt= "Coverpic"></img>
              </div>
            </div>
            </div>
        );
    }
}

export default Docker;
