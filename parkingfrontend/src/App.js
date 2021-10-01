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
import chooseReport from './components/chooseReport';
import calculate from './components/calculateSlots';
import Search from './components/Search';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
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
import UpdateBooking from './components/UpdateBooking';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AddEmployee from "./components/Employees/AddEmployee";
import GetAllEmployee from "./components/Employees/GetAllEmployee";
import EditEmployeeDetails from "./components/Employees/EditEmployeeDetails";
import EmployeeHome from "./components/Employees/EmployeeHome";
import UploadImage from "./components/Employees/UploadImage";
import HomeMain from './components/HomeMain';
import Transportation from './components/Transportation';
import Bus from './components/Bus';
import AddingBus from './components/AddingBus.js';



function App() {
  const dispatch = useDispatch()
  const token = useSelector(state => state.token)
  const auth = useSelector(state => state.auth)
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = () => {};

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
    <div>
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <Router>
    <div>
      <Menubar/>
      <Body/>
     <Route path="/HomeMain" exact component={HomeMain}/>
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
      <Route path="/choose" exact component={chooseReport}/>
      <Route path="/calculate" exact component={calculate}/>
      <Route path="/retrieve" exact component={showParking}
       term={searchTerm}
       searchKeyword = {searchHandler}/>
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
          <Router path="/edit-booking/:id" exact component ={UpdateBooking}/>
          <Switch>
          {/* Employee Routes */}
          <Route path="/homeKasuni" exact component={EmployeeHome} />
          <Route path="/add-new-employee" exact component={AddEmployee} />
          <Route path="/get-all-employee" exact component={GetAllEmployee} />
          <Route
            path="/upload-employee-image/:id"
            exact
            component={UploadImage}
          />
          <Route
            path="/get-emploee-dtails-by-id/:id"
            exact
            component={EditEmployeeDetails}
          />

          <Route path="/transportation" exact component={Transportation}/>
          <Route path="/viewbusses" exact component={Bus}/>
          <Route path="/addnewbus" exact component={AddingBus}/>
        </Switch>
      <Footer/>
    </div>
    </Router>
    </div>
  );
}


export default App;