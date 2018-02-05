import React from 'react';
import ReactDOM from 'react-dom';
import '../login.css'

const axios =require('axios');
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.sendData = this.sendData.bind(this);
    }
    gmaillogin=()=>{
        axios.post(
            'http://localhost:8081/auth/google',
            {
                email: this.state.email,
                password: this.state.password
            }).then((res) => {
            console.log(`Response ${res.data}`);
            this.props.history.push('/list');
        }).catch((e) => {
            console.log(`Error : ${e.message}`);
        });
    }
    sendData() {
        console.log("Student data", this.state);
        axios.post(
            'http://localhost:8081/student/login',
            {
                email: this.state.email,
                password: this.state.password
            }).then((res) => {
            console.log(`Response ${res.data}`);
            localStorage.setItem('student',JSON.stringify(res.data));
            this.props.history.push('/list');
        }).catch((e) => {
            console.log(`Error : ${e.message}`);
        });
    }

    render() {
        return (
            <section>
                <div id="login" className="container">
                    <div className="card card-container">
                        <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                        <p id="profile-name" className="profile-name-card"></p>
                        <form className="form-signin" onSubmit={(e)=>{e.preventDefault();}}>
                            <span id="reauth-email" className="reauth-email"></span>
                            <input type="email" id="txtemail" className="form-control" placeholder="Email address"  autofocus/>
                                <input type="password" id="txtpassword" className="form-control" placeholder="Password"/>
                                    <div id="remember" className="checkbox">
                                        <label>
                                            <input type="checkbox" value="remember-me"/> Remember me
                                        </label>
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={()=>{

                                        this.setState({
                                                email:document.getElementById('txtemail').value,
                                                password:document.getElementById('txtpassword').value
                                            },
                                            ()=>{
                                                console.log('Method Call Back');
                                                this.sendData();
                                            });
                                    }}>Sign in</button>
                            <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit" onClick={()=>{this.gmaillogin()}}>Sign in with Google</button>
                        </form>
                        <a href="#" className="forgot-password">
                            Forgot the password?
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}




export default Login;