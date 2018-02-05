import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu,Table } from 'reactstrap';
import 'react-confirm-alert/src/react-confirm-alert.css'
import '../index.css'
import { confirmAlert } from 'react-confirm-alert';
import Modal from 'react-modal'
import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const axios =require('axios');
var sid='',isMale=false;
class List extends React.Component{
    constructor(){
        super();
        this.state={
            data1:[],
            edtid:'',
            editData1:[],
            isEditing:false,
            mycity:['Surat','Baroda','Mumbai'],
            modal:false

        };
        axios.get('http://localhost:8081/student/list').then((success)=>{
            if(!success)
            {
                console.log(`Data Not found`);
            }
            this.setState({data1:success.data});
            console.log(`Data : ${this.state.data1}`);
        }).catch((e)=>{
            console.log(`Error : ${e.messagee}`);
        });


        this.handleFullname=this.handleFullname.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handleContact=this.handleContact.bind(this);
        this.handleGender=this.handleGender.bind(this);
        this.handleCity=this.handleCity.bind(this);



    }


    toggle=() => {
        alert();
        this.setState({
            modal: !this.state.modal
        });
    }


    deleteData=(sid)=>{
       // alert('Delete');
        console.log("Student data",sid);
        axios.post(
            'http://localhost:8081/student/delete',
            {
                id:sid
            }).then((res)=>{
            console.log(`Response ${res.data}`);

        }).catch((e)=>{
            console.log(`Error : ${e.message}`);
        });
    }
    editData=(sid)=>{
        console.log('Edit data',JSON.stringify(this.state.editData1));
        // console.log("Student data",sid);
        // axios.post(
        //     'http://localhost:8081/student/findbyid',
        //     {
        //         id:sid
        //     }).then((res)=>{
        //     console.log(`Response`,res);
        //
        //     this.setState({
        //         editData1:res.data[0]
        //     })
        //     console.log('Edit Data : ',this.state.editData1.city);
        //
        // }).catch((e)=>{
        //     console.log(`Error : ${e.message}`);
        // });
    }
    updateData=(sid)=>{
        this.setState({edtid:sid});
        console.log("Student Id",this.state.edtid);
        console.log("Student name",this.state.editData1.fullname);

        axios.post(
            'http://localhost:8081/student/update',
            {
                id:this.state.edtid,
                fullname:this.state.editData1.fullname,
                email:this.state.editData1.email,
                contact:this.state.editData1.contact,
                gender:this.state.editData1.gender,
                city:this.state.editData1.city,

            }).then((res)=>{
            console.log(`Response`,res.data);
            this.state.isEditing=false;
        }).catch((e)=>{
            console.log(`Error : ${e.message}`);
        });
    }

    handleFullname(event){

        console.log('fullname : ',event.target.value);
        const {value, name} = event.target;
        const editData1 = this.state.editData1;
        editData1[name] = value;
        this.setState({editData1}, () => {
            console.log(this.state.editData1.fullname);
        });
    }
    handleEmail(event){

        console.log('Email : ',event.target.value);
        const {value, name} = event.target;
        const editData1 = this.state.editData1;
        editData1[name] = value;
        this.setState({editData1}, () => {
            console.log(this.state.editData1.email);
        });
    }
    handleContact(event){

        console.log('Contact : ',event.target.value);
        const {value, name} = event.target;
        const editData1 = this.state.editData1;
        editData1[name] = value;
        this.setState({editData1}, () => {
            console.log(this.state.editData1.contact);
        });
    }
    handleGender(event){

        console.log('Gendeer : ',event.target.value);
        const {value, name} = event.target;
        const editData1 = this.state.editData1;
        editData1[name] = value;
        this.setState({editData1}, () => {
            console.log(this.state.editData1.gender);
        });
    }
    handleCity(event){
        console.log('CIty : ',event.target.value);
        const {value, name} = event.target;
        const editData1 = this.state.editData1;
        editData1[name] = value;
        this.setState({editData1}, () => {
            console.log(this.state.editData1.city);
        });
    }
    handleGender(event){

        console.log('Gender : ',event.target.value);
        const {value, name} = event.target;
        const editData1 = this.state.editData1;
        editData1[name] = value;
        this.setState({editData1}, () => {
            console.log(this.state.editData1.gender);
        });
    }

    submit = (sid) => {
        confirmAlert({
            title: 'Confirm to submit',                        // Title dialog
            message: 'Are you sure to do this.',               // Message dialog
            childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component
            confirmLabel: 'Confirm',                           // Text button confirm
            cancelLabel: 'Cancel',                             // Text button cancel
            onConfirm: () => {
              //  alert('a');
              this.deleteData(sid);
            },
            onCancel: () => {//alert('b')
                 }
        })
    };

    render(){


        const isEditing =this.state.isEditing;
        const editData1=this.state.editData1;
        return(
            <section>

                {

                    isEditing?
                        <Modal isOpen={this.state.modal} toggle={this.toggle} >
                            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                            <ModalBody>
                                 <form>
                                     <div className="form-group row">
                                         <label for="inputPassword" className="col-sm-2 col-form-label">Full name</label>
                                         <div className="col-sm-10">
                                             <input type="text" id="fullname" name="fullname" defaultValue={this.state.editData1.fullname} onChange={this.handleFullname} />
                                         </div>
                                     </div>
                                     <div className="form-group row">
                                         <label for="inputPassword" className="col-sm-2 col-form-label">Email</label>
                                         <div className="col-sm-10">
                                             <input type="text" id="email" name="email" defaultValue={this.state.editData1.email} onChange={this.handleFullname}/>

                                         </div>
                                     </div>
                                     <div className="form-group row">
                                         <label for="inputPassword" className="col-sm-2 col-form-label">Contact</label>
                                         <div className="col-sm-10">
                                             <input type="text" id="contact" name="contact"  defaultValue={this.state.editData1.contact} onChange={this.handleFullname}/>

                                         </div>
                                     </div>

                                     <div className="form-group row">
                                         <label for="inputPassword" className="col-sm-2 col-form-label">Gender</label>

                                        <div className="col-sm-10">
                                        <input type="radio" onChange={this.handleFullname} checked={this.state.editData1.gender==='M'?true:false} ref="radioM" name="gender" defaultValue="M" id="txtradioM"/>Male
                                        < input  type="radio" onChange={this.handleFullname}  checked={this.state.editData1.gender==='M'?false:true}ref="radioF" name="gender" defaultValue="F" id="txtradioF"/>Female
                                        </div>

                                     </div>
                                    <section>
                                        <div className="form-group row">
                                            <label for="inputPassword" className="col-sm-2 col-form-label">City</label>
                                            <div className="col-sm-10">
                                                <select  ref="selectcity" id="selectcity" name="city" onChange={this.handleFullname}>
                                                    <option defaultValue={this.state.editData1.city}>{this.state.editData1.city}</option>
                                                    {
                                                        this.state.mycity.map((s,i)=>{
                                                            return s===this.state.editData1.city?``:<option defaultValue={s}>{s}</option>

                                                        })

                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </section>

                                     <div className="form-group row">
                                         <label for="inputPassword" className="col-sm-2 col-form-label"></label>
                                         <div className="col-sm-10">
                                             <input className="btn btn-primary" type="submit" value="Update" onClick={()=>{
                                                 this.state.edtid=this.state.editData1._id;
                                                 console.log(this.state.edtid);
                                                 this.updateData(this.state.edtid);
                                             }
                                             }/>
                                         </div>
                                     </div>



                    </form>
                            </ModalBody>
                            {/*<ModalFooter>*/}
                                {/*<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}*/}
                                {/*<Button color="secondary" onClick={this.toggle}>Cancel</Button>*/}
                            {/*</ModalFooter>*/}
                        </Modal>

                    :
                        <div className="mytable">
                    <Table hover border="1">
                    <tr className="tableheading">
                    <td>Fullname</td>
                    <td>Email</td>
                    <td>Contact</td>
                    <td>Gender</td>
                    <td>City</td>
                    <td>Agree</td>
                    <td>Action</td>
                    </tr>
                    {
                        this.state.data1.map((s,index)=>{
                            return <tr>
                                <td>{s.fullname}</td>
                                <td>{s.email}</td>
                                <td>{s.contact}</td>
                                <td>{s.gender}</td>
                                <td>{s.city}</td>
                                <td>{s.iagree}</td>
                                <td>
                                    <a href="#" data-toggle="tooltip" title="Delete" className="fa fa-trash"  data-confirm="Are you sure to delete this item?" onClick={()=>{
                                        sid=s._id;
                                        this.submit(sid);
                                        //this.deleteData(sid);
                                        this.props.history.push('/list');

                                    }
                                    }>
                                    </a> ||{     }
                                    <a href="#" data-toggle="tooltip" title="Edit" className="fa fa-pencil" onClick={()=>{
                                        sid=s._id;
                                        if(s.gender=='M')
                                        {
                                            isMale=true
                                        }
                                        else{
                                            isMale=false
                                        }
                                        this.setState({
                                            isEditing:true,
                                            editData1:s
                                        })
                                        this.toggle();
                                    }
                                    }>
                                    </a>
                                </td>
                            </tr>
                        })
                    }
                    </Table>
                    </div>
                }

            </section>

        );
    }
}
export default List;