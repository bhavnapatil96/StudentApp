import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List'
import Add from './components/add'
import Login from './components/login'
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu,Table } from 'reactstrap';

import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
var s="                                                  "
//const axios =require('axios');
const First=()=>{
        return(
            <div>
                <h1><center>Welcome to Student Information System</center></h1>
            </div>
        );
};
class Links extends React.Component{
    render(){
        return(
            <div>
                <div className="mymenu">
                    <NavLink className="btn btn-danger" to="/list">List</NavLink>
                    {s}{s}{s}  {s}{s}{s}
                    <NavLink className="btn btn-danger" to="/add">Add</NavLink>{s}{s}{s}  {s}{s}{s}
                    <NavLink className="btn btn-danger" to="/login">Login</NavLink>{s}{s}{s}  {s}{s}{s}


                </div>

            </div>
        )
    }
}

class Home extends React.Component{

    render(){
        return(
           <header>
               <BrowserRouter>
                   <div>
                       <Links/>
                       <switch>
                           <Route exact path="/" component={First}/>
                           <Route path="/list" component={List}/>
                           <Route path="/add" component={Add}/>
                           <Route path="/login" component={Login}/>

                       </switch>
                   </div>
               </BrowserRouter>
           </header>
        )
    }
}
ReactDOM.render(<Home/>, document.getElementById('root'));

