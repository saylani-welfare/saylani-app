import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './Loader.css';

class Loader extends Component{
    render(){
        return (
            <div className="loader" style={{display:this.props.visible ? "block" : "none"}}>
                    <CircularProgress />
            </div>
        );
    }
}
export default Loader;