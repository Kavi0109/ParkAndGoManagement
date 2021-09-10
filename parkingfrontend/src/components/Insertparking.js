import React,{useState} from "react";
import axios from "axios";
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import {Link} from 'react-router-dom';
//import Select from 'react-select';


function Insertparking(){   

    const [Option, setOption] = useState("");
    const [sno,setSlot_no] = useState("");
    const [ssize,setSlot_size] = useState("");
    const [cno,setCar_no] = useState("");
    const [rno,setReg_no] = useState("");
    const [des,setDescription] = useState("");
    const [dt, setDt] = useState(moment());


    function sendData(e){
        e.preventDefault();

        const insertParking ={
            Option,
            sno,
            ssize,
            cno,
            rno,
            des,
            dt
        }

        axios.post("http://localhost:8070/parking/add",insertParking).then(()=>{
            alert("Parking Slot Successfully Added!!")
            /*setSelectedOption("");
            setSlot_no("");
            setSlot_size("");
            setCar_no("");
            setReg_no("");
            setDescription("");
            setDt("");*/

        }).catch((err)=>{
            alert(err)
        })

        
    } 

    /*function changeImage(e){
        e.preventDefault(e);
        if(sno === sno) {
            return ()=>setImage(image);
        }
            return alert("Error");
    };*/

    /*//dropdown for parking space
        const data = [
          {
            value: 1,
            label: "Outer Parking"
          },
          {
            value: 2,
            label: "Basement Parking"
          },
          {
            value: 3,
            label: "First Floor Parking"
          },
          {
            value: 4,
            label: "Second Floor Parking"
          }
        ];*/

    /*//dropdown for slot size
        const slot = [
            {
              value: 1,
              label: "9*10ft"
            },
            {
              value: 2,
              label: "9*12ft"
            },
            {
              value: 3,
              label: "12*12ft"
            },
            {
              value: 4,
              label: "24*3ft"
            }
          ];*/


     /*const handleSlot = e => {
       setSlot_size(e);
     }*/
       
       
       
    /*// handle onChange event of the dropdown
    const handleChange = e => {
     setSelectedOption(e);
    }*/

    //Disable past dates
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
    return current.isAfter(yesterday);
    };

    /*Disable future dates
    const today = moment();
    const disableFutureDt = current => {
    return current.isBefore(today)
    };*/


    return(
        <div className="p-3 mb-2 bg-info text-dark">
        <div className="container ">
            <br></br>
            <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <Link to="/show" className="navbar-brand">Allot Parking Spaces</Link>
        </div>
        <div className="container">
        <Link to="/add" className="navbar-brand">Add New Slot</Link>
        </div>
        <div className="container">
        <Link to="/retrieve" className="navbar-brand">Reports</Link>
        </div>
        </nav>
        </div>
        <br></br>
            <div className="container p-3 mb-2 bg-light text-dark " ><center>
            <h4 style={{marginTop:20}}><b><center>Add New Parking Slot</center></b></h4></center>
            </div>
            
            <form onSubmit={sendData}  className="container p-3 mb-2 bg-light text-dark "><br></br><br></br>

                <div class="row">
                    <label htmlFor="Option" class="col-sm-2 col-form-label">Car Parking Type:</label>
                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="Option" placeholder="Enter your car parking type.."
                    required
                    onChange={(event)=>{
                        setOption(event.target.value);
                    }} />
                    </div>


                </div><br></br>

                <div class="row">
                    <label htmlFor="sno" class="col-sm-2 col-form-label"> Parking Slot No:</label>
                    <div class="col-sm-10">
                    <input type="number" className="form-control" name="sno" id="sno" min="0" max="100" maxLength="3" placeholder="Enter Slot No between 1-100.."
                    required
                    maxValue={150}
                    minValue={0}
                    onChange={(event)=>{
                        setSlot_no(event.target.value);
                    }} /></div>
                </div><br></br>

                <div class="row">
                    <label htmlFor="ssize" class="col-sm-2 col-form-label">Slot Size (in inches):</label>
                    <div class="col-sm-10">
                    <input type="number" className="form-control" id="ssize" placeholder="Enter slot size.."
                    required
                    onChange={(event)=>{
                        setSlot_size(event.target.value);
                    }} /></div>
                </div><br></br>

                <div class="row">
                    <label htmlFor="cno" class="col-sm-2 col-form-label">Car Plate No:</label>
                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="cno" placeholder="Enter your car plate no.."
                    required
                    onChange={(event)=>{
                        setCar_no(event.target.value);
                    }} /></div>
                </div><br></br>

                <div class="row">
                    <label htmlFor="rno" class="col-sm-2 col-form-label">Registration ID:</label>
                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="rno" placeholder="Enter your registration ID.."
                    required
                    onChange={(event)=>{
                        setReg_no(event.target.value);
                    }} /></div>
                </div><br></br>

                <div class="row">
                    <label htmlFor="dt" class="col-sm-2 col-form-label">Entry Date:</label>
                    <div class="col-sm-10">
                    <DatePicker
                        isValidDate={disablePastDt}
                        value={dt}
                        onChange={val => setDt(val)}
                    />     </div>               
                </div><br></br>

                

                <div class="row">
                    <label htmlFor="des" class="col-sm-2 col-form-label ">Description:</label>
                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="des" placeholder="Enter Description.."
                    required
                    onChange={(event)=>{
                        setDescription(event.target.value);
                    }} /></div>
                </div><br></br>

                <div class="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Save Parking</button>
                </div>
                <br></br>



            </form>

        </div>
        </div>

    )
}
export default Insertparking;