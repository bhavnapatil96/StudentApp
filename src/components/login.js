import React from 'react';
import ReactDOM from 'react-dom';


const axios =require('axios');
class Login extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
        this.sendData=this.sendData.bind(this);
    }
    sendData(){
        console.log("Student data",this.state);
        axios.post(
            'http://localhost:8081/student/login',
            {
                email:this.state.email,
                password:this.state.password
            }).then((res)=>{
            console.log(`Response ${res.data}`);
            this.props.history.push('/list');
        }).catch((e)=>{
            console.log(`Error : ${e.message}`);
        });
    }
    render(){
        return(
            <section>
                <form onSubmit={(e)=>{e.preventDefault();}}>
                    Email
                    <input type="email" name="txtemail" id="txtemail" ref="txtemail"/>
                    Password
                    <input type="password" name="txtpassword" id="txtpassword" ref="txtpassword"/>
                    <input type="submit" value="Login" onClick={()=>{

                        this.setState({
                                email:document.getElementById('txtemail').value,
                                password:document.getElementById('txtpassword').value
                            },
                            ()=>{
                                console.log('Method Call Back');
                                this.sendData();
                            });
                    }}/>
                </form>
            </section>
        )
    }
}
export default Login;