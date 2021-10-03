import React,{useState} from "react";//importing the useState Hook from React
import axios from "axios"; //pass data between backend and frontend
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import './btn.css'

export default function testbooking(){
    return(
        <div>
            <section class="vh-80 ">
    <div class="container py-5 h-80">
    
        <div class="row d-flex justify-content-center align-items-center h-80">
        
        <div class="col col-xl-100">
            
            <div class="card rounded" >
            
            <div class="row g-0">
                <div class=" col-lg-5 d-none d-md-block">
                

                














                </div>
                <div class="col  d-flex align-items-center">
                <div class="card-body text-black">
                
                    <form  className="container p-3 bg-light text-dark rounded"><br></br><br></br>

                    <div class="d-flex">
                        <center><span class="h1 fw-bold mb-0">Reserve Your Slot</span></center>
                    </div>

                    <div class="row">
                        <label htmlFor="Option" class=" col-form-label">Car Parking Type:</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control " id="Option" placeholder="Enter your car parking type.."
                        required/>
                        
                        </div>


                    </div>

                    <div class="row">
                        <label htmlFor="sno" class=" col-form-label"> Parking Slot No:</label>
                        <div class="col-sm-10">
                        <input type="number" className="form-control" name="sno" id="sno" min="0" max="300" maxLength="3" placeholder="Enter Slot No between 1-300.."
                        required
                        maxValue={150}
                        minValue={0}
                         />
                        
                        </div>

                    
                    </div>

                    

                    <div class="row">
                        <label htmlFor="ssize" class="col-form-label">Slot Size (in inches):</label>
                        <div class="col-sm-10">
                        <input type="number" className="form-control" id="ssize" placeholder="Enter slot size.."
                        required
                         /></div>
                    </div>

                    <div class="row">
                        <label htmlFor="cno" class=" col-form-label">Car Plate No:</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control" id="cno" placeholder="Enter your car plate no.."
                        required
                        pattern="[A-Z]{2}[-]{1}[0-9]{4}"
                         /></div>
                    </div>

                    <div class="row">
                        <label htmlFor="rno" class=" col-form-label">Registration ID:</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control" id="rno" placeholder="Enter your registration ID.."
                        required
                        pattern="[A-Z]{1}[0-9]{4}"
                         /></div>
                    </div>

                    <div class="row">
                        <label htmlFor="dt" class=" col-form-label">Entry Date:</label>
                                      
                    </div>

                    

                    <div class="row">
                        <label htmlFor="des" class=" col-form-label ">Description:</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control" id="des" placeholder="Enter Description.."
                        required
                         /></div>
                    </div><br/>

                    <div class="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Save Parking</button>
                    </div>
                            <br></br>
                    <div class="d-grid gap-2">
                    <button  type="submit" className="btn btn-primary"><a href="/show"  >Back To Parking</a></button>
                    </div>
                    
                
                    </form>

                </div>
                
                </div>
                
            </div>
            </div>
            
        </div>
        
        </div>
        
    </div>
</section>
        </div>


    )
}