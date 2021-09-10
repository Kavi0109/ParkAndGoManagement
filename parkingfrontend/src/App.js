import './App.css';
import React, {useEffect, useState} from 'react';
import Tableintro from './components/Tableintro';
import Slottablefirst from './components/Slottablefirst';
import Slottablesecond from './components/Slottablesecond';
import Slottableouter from './components/Slottableouter';
import Slottablebasement from './components/Slottablebasement';
import Slider from './components/slider';
import Insertparking from './components/Insertparking';
import showParking from './components/showparking';
import updateparking from './components/updateparking';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Menu from './components/menu.js';
import Menubar from './components/menu2';
import Footer from './components/footer';
import Aboutus from './components/aboutus.js';
import Contactus from './components/contactus.js';
import Gallery from './components/gallery.js';
import Ourprojects from './components/ourprojects';
import Login from './components/body/auth/Login';
import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'
import Header from './components/header/Header'
import Body from './components/body/Body'
import axios from 'axios'

function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin){
      const getToken = async () => {
        const res = await axios.post('/user/refresh_token', null)
        dispatch({type: 'GET_TOKEN', payload: res.data.access_token})
      }
      getToken()
    }
  },[auth.isLogged, dispatch])

  useEffect(() => {
    if(token) {
      const getUser = () => {
        dispatch(dispatchLogin())

        return fetchUser(token).then(res => {
          dispatch(dispatchGetUser(res))
        })
      }
      getUser()
    }
  },[token, dispatch])
  return (
    <Router>
    <div>
      <Menu/>
      <Slider/>
      <Menubar/>
      <Body/>
      <Route path="/aboutus" exact component={Aboutus}/>
      <Route path="/contactus" exact component={Contactus}/>
      <Route path="/gallery" exact component={Gallery}/>
      <Route path="/projects" exact component={Ourprojects}/>
      <Route path="/show" exact component={Tableintro}/>
      <Route path="/add" exact component={Insertparking}/>
      <Route path="/first" exact component={Slottablefirst}/>
      <Route path="/second" exact component={Slottablesecond}/>
      <Route path="/basement" exact component={Slottablebasement}/>
      <Route path="/outer" exact component={Slottableouter}/>
      <Route path="/retrieve" exact component={showParking}/>
      <Route path="/get/:id" exact component={updateparking}/>
      <Footer/>
    </div>
    </Router>
  );
}


export default App;