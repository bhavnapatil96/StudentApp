import React from 'react';
import ReactDOM from 'react-dom';
const axios =require('axios');
var sid='';
class List extends React.Component{
    constructor(){
        super();
        this.state={
            data1:[]
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
    render(){
        return(
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
                                    </a>
                                </td>
                            </tr>
                        })
                    }
                </table>
            </div>
        );
    }
}
export default List;