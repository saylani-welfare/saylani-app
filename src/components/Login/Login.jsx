import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../../actions/auth';
import {Loader} from '../';

class Login extends Component{
    
    login(e){
        e.preventDefault();
        var email = this.refs.email.getValue();
        var pass = this.refs.pass.getValue();
        this.props.login(email, pass);
    }
 
    render(){
        const style = {
            position: "relative",
            width: 400,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        return (
            
            <Paper style={style} zDepth={2} >
            <Loader visible={this.props.isLogging}/>
            <div style={{opacity: this.props.isLogging ? "0" : "1"}}>
                
                <h1>Admin Login</h1>
                <p ref="demo"> email: admin@saylani.com  pass: saylani123 </p>
                <p style={{color: "red"}}>{this.props.loginError && this.props.loginError.message}</p>
                <form onSubmit={this.login.bind(this)}>
                    <div>
                    <div>
                    <TextField
                        hintText="Email"
                        type="email"
                        floatingLabelText="Email" ref="email"
                        required
                    />
                    </div>
                    <div>
                    <TextField
                        hintText="Password Field"
                        floatingLabelText="Password"  ref="pass"
                        type="password"
                        required
                    />
                    </div>
                    <div>
                    <RaisedButton 
                        type="submit" 
                        backgroundColor="#316dc3" 
                        label="Login" 
                        primary={true} 
                        style={{margin: 12}}  />
                    </div>
                    </div>
                </form>
            </div>
                
            </Paper>
        );
    }
}
function mapStateToProps({loginError, isLogging}){
    return {loginError, isLogging};
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({login}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);