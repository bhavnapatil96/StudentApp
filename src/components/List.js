import React from 'react';
import ReactDOM from 'react-dom';
const axios =require('axios');
var sid='';
class List extends React.Component{
    constructor(){
        super();
        this.state={
            data1:[],
            edtid:'',
            editData1:[],
            isEditing:false
        }
        axios.get('http://localhost:8081/student/list').then((success)=>{
            if(!success)
            {
                console.log(`Data Not found`);
            }
            this.setState({data1:success.data});
            console.log(`Data : ${this.state.data1}`);
        }).catch((e)=>{
            console.log(`Error : ${e.messagee}`);
        })
    }
    // componentDidUpdate(){
    //     axios.get('http://localhost:8081/student/list').then((success)=>{
    //         if(!success)
    //         {
    //             console.log(`Data Not found`);
    //         }
    //         this.setState({data1:success.data});
    //         console.log(`Data : ${this.state.data1}`);
    //     }).catch((e)=>{
    //         console.log(`Error : ${e.messagee}`);
    //     })
    // }
    deleteData=(sid)=>{
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
        console.log("Student data",sid);
        axios.post(
            'http://localhost:8081/student/findbyid',
            {
                id:sid
            }).then((res)=>{
            console.log(`Response`,res);

            this.setState({
                editData1:res.data[0]
            })
            console.log('Edit Data : ',this.state.editData1.city);

        }).catch((e)=>{
            console.log(`Error : ${e.message}`);
        });
    }
    updateData=(sid)=>{
        this.setState({edtid:sid});
        console.log("Student data",this.state.edtid);
        console.log("Student name",this.state.editData1.fullname);

        axios.post(
            'http://localhost:8081/student/update',
            {
                id:this.state.edtid,
                fullname:"om",
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
    render(){
        const isEditing =this.state.isEditing;
        return(
            <section>
                {
                    isEditing?
                    <form>

                        <input type="text" id="txtname" defaultValue={this.state.editData1.fullname} readOnly="false" />
                        <input type="text" id="txtemail" value={this.state.editData1._id}/>
                        <input type="text" id="txtContact" value={this.state.editData1.contact}/>
                        <input type="text"  id="txtgender" value={this.state.editData1.gender}/>
                        <input type="text" id="txtCity"  value={this.state.editData1.city}/>

                        <input type="submit" value="Update" onClick={()=>{
                                this.state.edtid=this.state.editData1._id;
                                console.log(this.state.edtid);
                                this.updateData();
                        }
                        }/>
                    </form>

                    :
                        <div>
                    <table border="1">
                    <tr>
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
                                    <a href="#" className="fa fa-trash" onClick={()=>{
                                        sid=s._id;
                                        this.deleteData(sid);
                                    }
                                    }>
                                    </a> ||
                                    <a href="#" className="fa fa-pencil" onClick={()=>{
                                        sid=s._id;
                                        this.setState({
                                            isEditing:true
                                        })
                                        this.editData(sid);
                                        console.log(this.state.editData1);
                                    }
                                    }>
                                    </a>
                                </td>
                            </tr>
                        })
                    }
                    </table>
                    </div>
                }

            </section>

        );
    }
}
export default List;