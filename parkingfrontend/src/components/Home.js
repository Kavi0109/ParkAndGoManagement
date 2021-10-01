import React from "react";
import './home.css';
import Slider from './slider';
import car from './Images/car.jpg';
import Slip from './homei';





export default function Home(){

return(
<div>
   <Slider/>
        <div id="home">
         {/* <center>   <h3 class="Htxt">EMPLOYEE SALARY ANAGEMENT</h3></center>
        <hr/>   */}
          {/* <img src={require('./Images/car.jpg').default} /> */}
        
         
         
        
    

<br/> 

<br/><br/>


          <div style={{float:"left"}}>
    
    <div class ="Lcard">
        <div class= "Lcard-image4"></div>
        <div class="Lcard-text">
                <h4 style={{color:"#1b7ced"}}>Manage salary Services</h4>
                <p>Salary Services, provides the framework for compensation initiatives through competitive benchmarking, salary structure development. There are three key types of incentives: bonuses, profit sharing and commission options.</p>
                <button href="/home"  class="Btn5">Show more</button>
            </div>


    </div></div>
        
          <div style={{float:"right"}}>
    
    <div class ="Lcard">
        <div class= "Lcard-image5"></div>
        <div class="Lcard-text">
                <h4 style={{color:"#1b7ced"}}>About salary management</h4>
                <p>Salary Managgement is the process of managing the salary of employees and analyzing, and determining the salary, and benefits each employee receives.Effective Salary management benefits both the employer and the employee.</p>
                <button href="/home"  class="Btn5">Show more</button>
            </div>


    </div></div>

            <center>
        <div id="menu3" style={{border:"4px solid #333"}}>
        <fieldset>
            <ul class="menu3">
                <li class="menu4"><a href="/add">Add new Salary</a></li>
                <li class="menu4"><a href="/">View Employee Salaries</a></li>
                <li class="menu4"><a href="/">Salary Report</a></li>
                <li class="menu4"><a href="/addl">Apply Leaves</a></li>
                <li class="menu4"><a href="/l">Leave Report</a></li>
                <li class="menu4"><a href="/">LogOut</a></li>
            </ul>
            </fieldset>
        </div>
    </center>
        
<br/>

    <h4 class="Htxt">Salary Management</h4>
    
    <div id="Lccard">
    
    <div class ="Lcard">
        <div class= "Lcard-image"></div>
        <div class="Lcard-text">
                <h4 style={{color:"#1b7ced"}}>Privacy Policy</h4>
                <p>The privacy policy is to safeguard personal employee salary information in its possession to ensure the confidentiality of the information.The company will only collect personal information that is required to pursue its salary operations.</p>
                <button href="/home"  class="Btn5">Show more</button>
            </div>


    </div>
    <div class ="Lcard">
        <div class= "Lcard-image1"></div>
        <div class="Lcard-text">
                <h4 style={{color:"#1b7ced"}}>Manage Payslips</h4>
                <p>Payslips are an essential element for an Employees’ career because his salary related information will be provided on the Payslip with the income and deduction details based on which he can do his tax planning and arrange for declarations.</p>
                <button href="/home"  class="Btn5">Show more</button>
            </div>

    </div>
    <div class ="Lcard">
        <div class= "Lcard-image2"></div>
        <div class="Lcard-text">
                <h4 style={{color:"#1b7ced"}}>Salary Survey</h4>
                <p>Salary Surveys are tools used to determine the median or average compensation paid to employees in one or more jobs.Survey data is often time sensitive .The purpose of salary surveys provide a means for comparison of salaries at the company.</p>
                <button href="/home"  class="Btn5">Show more</button>
            </div>
            
    </div>

    <div class ="Lcard">
        <div class= "Lcard-image3"></div>
        <div class="Lcard-text">
                <h4 style={{color:"#1b7ced"}}>Manage Security</h4>
                <p> To manage security employee salary information will be shared only as required and who have access to such information. All hard copy records will be maintained in locked, secure areas with access limited to those who have a need for such access.</p>
                <button href="/home"  class="Btn5">Show more</button>
            </div>

    </div>
    
    </div><br/>

    </div>
                
        </div>
    );
    }
    
    