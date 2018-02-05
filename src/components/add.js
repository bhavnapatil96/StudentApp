import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
import '../index.css'
const axios =require('axios');

class Add extends React.Component{
    constructor(){
        super();
        this.state={
            fullname:'',
            email:'',
            password:'',
            contact:'',
            gender:'',
            city:'',
            iagree:'',
            photo:'',
            mycity:['Surat','Baroda','Mumbai']
        }
    }
    sendData=()=>{
        console.log("Student data",this.state);
        axios.post(
            'http://localhost:8081/student/add',
            {
                fullname:this.state.fullname,
                email:this.state.email,
                password:this.state.password,
                contact:this.state.contact,
                gender:this.state.gender,
                city:this.state.city,
                iagree:this.state.iagree,
                photo:this.state.photo


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

                <fieldset>

                    <div id="myform" className="col-lg-6">
                        <h3>Student App In React</h3>
                        <form onSubmit={(e)=>{e.preventDefault();}} action="" method="post" encType="multipart/form-data">

                            <div className="form-group row">
                                <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                                </div>
                            </div>
                            <div className="form-group row" >
                                <label className="col-sm-2 col-form-label" for="txtname">Full Name</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" placeholder="Fullname" ref="txtname" id="txtname"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="file1">Photo</label>
                                <div className="col-sm-10">
                                     <input className="form-control" type="file"  ref="file1" id="file1"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="txtemail">Email</label>
                                <div className="col-sm-10">
                                    <input className="form-control" type="text" placeholder="Email" ref="txtemail" id="txtemail"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="txtemail">Password</label>
                                <div className="col-sm-10">
                                     <input className="form-control" type="password" placeholder="Password" ref="txtpassword" id="txtpassword"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="txtcontact">Contact</label>
                                <div className="col-sm-10">
                                     <input className="form-control" type="text" placeholder="Conact" ref="txtcontact" id="txtcontact"/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="txtcontact">Gender</label>
                                <div className="col-sm-10">
                                    <input  className="" type="radio" ref="radioF" name="radioG" value="F" id="txtradioF"/>
                                    <label className="form-check-label" for="txtradioF">Female</label>
                                    <input  className="" type="radio" ref="radioM" name="radioG" value="M" id="txtradioM"/>
                                    <label className="form-check-label" for="txtradioM">Male</label>

                                </div>

                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="txtcontact">City</label>
                                <div className="col-sm-10">
                                    <select className="form-control" ref="selectcity" id="selectcity">
                                        {
                                            this.state.mycity.map((c,i)=>{
                                                return   <option value={c}>{c}</option>
                                            })
                                        }

                                    </select>
                                </div>


                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="txtcontact">Terms & Conditions</label>
                                <div className="col-sm-10">
                                    <input className="form-check-input" type="checkbox" ref="chkiagree" id="chk1"/>
                                    <label className="form-check-label" for="chk1">I Agree</label>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label" for="txtcontact"></label>

                                <div className="col-sm-10">
                                <input className="btn btn-success" type="submit" value="Save"
                                       onClick={()=>{
                                           let r='';
                                           if(document.getElementById('txtradioF').checked)
                                           {
                                               r=document.getElementById('txtradioF').value;
                                           }
                                           if(document.getElementById('txtradioM').checked)
                                           {
                                               r=document.getElementById('txtradioM').value;
                                           }
                                           let c='';
                                           if(document.getElementById('chk1').checked===true)
                                           {
                                               c='Y';
                                           }
                                           else
                                           {
                                               c='N';
                                           }
                                           this.setState({
                                                   fullname:document.getElementById('txtname').value,
                                                   email:document.getElementById('txtemail').value,
                                                   password:document.getElementById('txtpassword').value,
                                                   contact:document.getElementById('txtcontact').value,
                                                   gender:r,
                                                   city:document.getElementById('selectcity').value,
                                                   iagree:c,
                                                   photo:document.getElementById('file1').value
                                               },
                                               ()=>{
                                                   console.log('Method Call Back');
                                                   this.sendData();
                                               });
                                       }}/>
                                </div>
                            </div>

                        </form>
                    </div>
                </fieldset>


            </section>
        )
    }
}
export default Add;

