import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/auth';
import Saylani_logo from '../images/Saylani_logo.png';

const style = {
    topheader: {

    float: 'left',
    marginTop: '-5px',
    marginLeft: '30px',
    marginBottom: '20px',
        
    },
    AppBar: {
        paddingTop: '10',
        paddingBottom: '25',
        fontSize: '34',
        fontWeight: 'bold',
        backgroundColor: '#71a215',
        paddingLeft: '75px',
    },  
}

class Header extends React.Component {
    render() {
        return (
            <div >
                
                <br />
                <img src={Saylani_logo} style={style.topheader}  />
                <br/>
                <br/>
                <AppBar
                    title={<div style={style.AppBar}>Saylani App</div>}
                    iconStyleLeft={{ "display": "none" }} style={style.AppBar}
                    iconElementRight={<FlatButton style={{ "visibility": this.props.isLoggedIn === true ? "visible" : "hidden" }} label="Logout" onClick={this.props.logout} />}
                    />
                <br/>
                <br/>
                    
            </div>
        )
    }
}


function mapStateToProps({isLoggedIn}) {
    return { isLoggedIn };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ logout }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);