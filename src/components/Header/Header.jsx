import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/auth';

class Header extends React.Component {
    render() {
        return (
            <AppBar
                title={<div style={{paddingLeft: "75px"}}>Saylani App</div>}
                iconStyleLeft={{ "display": "none" }} style={{ "backgroundColor": "#316dc3" }}
                iconElementRight={<FlatButton style={{"visibility":this.props.isLoggedIn === true ? "visible": "hidden"}} label="Logout" onClick={this.props.logout} /> }
            />
        )
    }
}


function mapStateToProps({isLoggedIn}){
    return {isLoggedIn};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({logout}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);