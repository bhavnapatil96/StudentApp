import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List'
import Add from './components/add'
import Login from './components/login'

import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'

const axios =require('axios');

class Links extends React.Component{
    render(){
        return(
            <div>
                <NavLink to="/list">List</NavLink>
                <NavLink to="/add">Add</NavLink>
                <NavLink to="/login">Login</NavLink>


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

