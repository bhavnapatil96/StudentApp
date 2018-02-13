import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List'
import Add from './components/add'
import Login from './components/login'
import Logout from './components/logout'
import Emp from './components/emp'
import First from './components/slider'

import Example from './components/slider'


import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu,Table } from 'reactstrap';

import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
var s="                                                  "
//const axios =require('axios');

class Links extends React.Component{

    render(){
        return(
            <div>

                <div className="mymenu">

                    <NavLink className="btn btn-danger" to="/list">List</NavLink>
                    {s}{s}{s}  {s}{s}{s}
                    <NavLink className="btn btn-danger" to="/add">Add</NavLink>{s}{s}{s}  {s}{s}{s}
                    <NavLink className="btn btn-danger" to="/emp">Employee Management</NavLink>{s}{s}{s}  {s}{s}{s}

                    {
                        (localStorage.getItem("Token"))?
                            <NavLink className="btn btn-danger" to="/logout">Logout</NavLink>
                            :
                            <NavLink className="btn btn-danger" to="/login">Login</NavLink>
                    }



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
                              <Route  path="/list" component={List}/>
                           <Route   path="/emp" component={Emp}/>

                           <Route   path="/add" component={Add}/>
                           <Route  path="/login" component={Login}/>
                           <Route  path="/logout" component={Logout}/>

                       </switch>
                   </div>
               </BrowserRouter>
           </header>
        )
    }
}
ReactDOM.render(<Home/>, document.getElementById('root'));

