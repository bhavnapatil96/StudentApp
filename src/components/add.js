import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'

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
        }).catch((e)=>{
            console.log(`Error : ${e.message}`);
        });
    }
    render(){
        return(
            <section>

                <fieldset>
                    <h1>Student App In React</h1>
                    <div className="col-lg-4">
                        <form onSubmit={(e)=>{e.preventDefault();}} className="form-horizontal" action="" method="post" encType="multipart/form-data">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Fullname" ref="txtname" id="txtname"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="file"  ref="file1" id="file1"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Email" ref="txtemail" id="txtemail"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="password" placeholder="Password" ref="txtpassword" id="txtpassword"/>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Conact" ref="txtcontact" id="txtcontact"/>
                            </div>
                            <div className="form-group">
                                <input  type="radio" ref="radioF" name="radioG" value="F" id="txtradioF"/>Female
                                <input  type="radio" ref="radioM" name="radioG" value="M" id="txtradioM"/>Male
                            </div>
                            <div className="form-group">
                                <label>City</label>
                                <select className="form-control" ref="selectcity" id="selectcity">
                                    {
                                        this.state.mycity.map((c,i)=>{
                                            return   <option value={c}>{c}</option>
                                        })
                                    }

                                </select>
                            </div>
                            <div className=" form-group checkbox">
                                <label><input className="form-control" type="checkbox" ref="chkiagree" id="chk1"/>I Agree</label>
                            </div>
                            <div>
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
                        </form>
                    </div>
                </fieldset>


            </section>
        )
    }
}
export default Add;

