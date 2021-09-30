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
import {useDispatch, useSelector} from 'react-redux'
import {dispatchLogin, fetchUser, dispatchGetUser} from './redux/actions/authAction'
import Header from './components/header/Header'
import Body from './components/body/Body'
import axios from 'axios'
import AllLeaves from './components/AllLeaves';
import AddLeave from './components/AddLeave';
import UpdateSalary from './components/UpdateSalary'
import Home from './components/Home';
import AddSalary from './components/AddSalary';
import AllSalaries from './components/AllSalaries';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header1 from './components/Header';
import Payslip from './components/Payslip';
import BookingForm from './components/BookingForm.js';
import Allbookings from './components/Allbookings';
import HeaderRishma from './components/HeaderRishma';
import HomeR from './components/HomeRishma';
import updateBooking from './components/updatebooking';
import fandQ from './components/HelpAndFAQ';
import BookingReport from './components/BookingReport';

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
      
      
      <Menubar/>
      
      <Body/>
      <Route path="/aboutus" exact component={Aboutus}/>
      <Route path="/contactus" exact component={Contactus}/>
      <Route path="/gallery" exact component={Gallery}/>
      <Route path="/projects" exact component={Ourprojects}/>
      <Route path="/show" exact component={Tableintro}/>
      <Route path="/addp" exact component={Insertparking}/>
      <Route path="/first" exact component={Slottablefirst}/>
      <Route path="/second" exact component={Slottablesecond}/>
      <Route path="/basement" exact component={Slottablebasement}/>
      <Route path="/outer" exact component={Slottableouter}/>
      <Route path="/retrieve" exact component={showParking}/>
      <Route path="/getp/:id" exact component={updateparking}/>
      <Route path="/bet/:id" component={Payslip} /> 
        <Route exact path="/l" component = {AllLeaves} />
        <Route exact path="/addl" component={AddLeave} />
        <Route exact path="/get/:id" component={UpdateSalary} />
        <Route path ="/home"  exact component ={Home}/>
       {/* <Route path="/get/:id" exact component = {GetSalary}/> */}
        <Route exact path="/" component = {AllSalaries} />
        <Route exact path="/add" component={AddSalary} />

        <Route path="/homeRishma" exact component = {HomeR}/>
          <Route path="/addRishma" exact component = {BookingForm}/>
          <Route path="/allBooking" exact component = {Allbookings}/>
          <Route path="/edit-booking/:id" exact component={updateBooking}/>
          <Route path ="/fandQ" exact component = {fandQ}/>
          <Route path = "/dis-booking/:id" component = {BookingReport}/>
      <Footer/>
    </div>
    </Router>
  );
}


export default App;