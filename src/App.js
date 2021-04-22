import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import UserList from './components/list';
import Notification from './components/Notifiaction';

function App() {


  return (
    <div className="App">
      <div className="split left">
          <img src="search8.jpg" alt="Avatar woman"/>
      </div>
      <div className="split right">
        <div className="link-area">
          <span>Existing User? <a href="/login">Signin</a></span>
          <span>New User? <a href="/register">Signup</a></span>
        </div>
        <Routes/>
      </div>
      <Notification/>
    </div>
  );
}

export default App;


const Routes = () => {
  return (<BrowserRouter>
            <Switch>
                <Route path ={"/register"} component={RegisterForm}/>
                <Route path ={"/login"} component={LoginForm}/>
                <Route path ={"/list"} component={UserList}/>
            </Switch>
          </BrowserRouter>)
        }

