import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter,Route,Switch,NavLink} from 'react-router-dom'
import '../index.css'
import multer from 'multer';

const axios =require('axios');
const data = new FormData();
class Logout extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
        localStorage.removeItem("Token");
            this.props.history.push('/login');
         }


    render(){
        return(
            <section>

            </section>
        )
    }
}
export default Logout;

