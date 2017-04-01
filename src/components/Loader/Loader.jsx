import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import './Loader.css';

class Loader extends Component{
    render(){
        return (
            <div className="loader" style={{display:this.props.visible ? "block" : "none"}}>
                    <CircularProgress color= "#71a215" />
            </div>
        );
    }
}
export default Loader;