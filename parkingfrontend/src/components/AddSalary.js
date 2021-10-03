import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './salary.css';
import Calc from './Calculator';
import park3 from './Images/sal3.jpg';
import {Link} from 'react-router-dom';

export default class AddSalary extends Component {

  constructor(props) {
    super(props)

    // Setting up functions

    this.onChangeemployeeNo = this.onChangeemployeeNo.bind(this);
    this.onChangesalaryMonth = this.onChangesalaryMonth.bind(this);
    this.onChangeworkingDays = this.onChangeworkingDays.bind(this);
    this.onChangebasicPay = this.onChangebasicPay.bind(this);
    this.onChangeallowance = this.onChangeallowance.bind(this);
    this.onChangededuction = this.onChangededuction.bind(this);
    this.onChangemonthTax = this.onChangemonthTax.bind(this);
    this.onChangesalaryNote = this.onChangesalaryNote.bind(this);
    this.onChangetotDeduction = this.onChangetotDeduction.bind(this);
    this.onChangenetPay = this.onChangenetPay.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
   

    // Setting up state
    this.state = {
        employeeNo: '',
        salaryMonth: '',
        workingDays: '',
        basicPay: '',
        allowance: '',
        deduction: '',
        monthTax: '',
        salaryNote: '',
        totDeduction: '',
        netPay:''
    }
  }

  componentDidMount(){
      Calc();
  }

  checknetpay() {
    var ded = document.getElementById('totDeduction').value;
    var pay = parseInt(document.getElementById('basicPay').value) ;
    var bonus = parseInt(document.getElementById('allowance').value);
    var totpay = pay + bonus;
    var net =  document.getElementById('netPay').value;
    return ((totpay - ded) == net) ;
    
    
  }
  
  onChangeemployeeNo(e) {
    this.setState({ employeeNo: e.target.value })
  }

  onChangesalaryMonth(e) {
    this.setState({ salaryMonth: e.target.value })
  }

  onChangeworkingDays(e) {
    this.setState({ workingDays: e.target.value })
  }

  onChangebasicPay(e) {
    this.setState({ basicPay: e.target.value })
  }

  onChangeallowance(e) {
    this.setState({ allowance: e.target.value })
  }

  
  onChangededuction(e) {
    this.setState({ deduction: e.target.value })
  }

  onChangemonthTax(e) {
    this.setState({ monthTax: e.target.value })
  }

  onChangesalaryNote(e) {
    this.setState({ salaryNote: e.target.value })
  }

  onChangetotDeduction(e) {
    this.setState({ totDeduction: e.target.value })
  }

  onChangenetPay(e) {
    this.setState({ netPay: e.target.value })
  }



  onSubmit(e) {
    e.preventDefault()
    if(!this.checknetpay()){
     alert('netpay calculation error')
    }
    else{

    const salaryObject = {
        employeeNo: this.state.employeeNo,
        salaryMonth: this.state.salaryMonth,
        workingDays: this.state.workingDays,
        basicPay: this.state.basicPay,
        allowance: this.state.allowance,
        deduction: this.state.deduction,
        monthTax: this.state.monthTax,
        salaryNote: this.state.salaryNote,
        totDeduction: this.state.totDeduction,
        netPay: this.state.netPay
      };
    axios.post("/salary/add", salaryObject)
     .then((res) => {
        console.log(res.data)
        alert('Salary successfully added')
        window.setTimeout(function () {
          window.location.href = "/";
        }, 1000);
      }).catch((error) => {
        console.log(error)
      })
    //   .then(res => console.log(res.data));

    this.setState({ employeeNo: '', salaryMonth: '', workingDays: '', basicPay:'', allowance:'', deduction: '', monthTax: '', salaryNote: '', totDeduction: '', netPay:''})
  }}

  render() {
    return (
      
  
        <div id="formStyle1">


          <h5 style={{color:"#1b7ced"}}>ADD EMPLOYEE SALARY</h5>
            <hr/>

            <div class="nano">
            <br/><center><h5 style={{color:"#1b7ced"}}>  Generate Salary</h5></center>
            <div class="calculator-grid">
               
                <div class="output">
                <div data-previous-operand class="previous-operand"></div>
                <div data-current-operand class="current-operand"></div>
                </div>
                    <button data-all-clear class="span-two">AC</button>
                    <button data-delete>DEL</button>
                    <button data-operation>รท</button>
                    <button data-number>1</button>
                    <button data-number>2</button>
                    <button data-number>3</button>
                    <button data-operation>*</button>
                    <button data-number>4</button>
                    <button data-number>5</button>
                    <button data-number>6</button>
                    <button data-operation>+</button>
                    <button data-number>7</button>
                    <button data-number>8</button>
                    <button data-number>9</button>
                    <button data-operation>-</button>
                    <button data-number>.</button>
                    <button data-number>0</button>
                    <button data-equals class="span-two">=</button>
            </div>
           <center><img src={park3} width="400" height="350" alt="..."></img></center><br/>
          </div>

         
        <form onSubmit={this.onSubmit}>

                <div className="form-group">
             
                  <label for="employeeNo" >Emaployee No</label>

						
                    <input type="text" className="form-control" pattern="E[0-9]{3}" name="employeeNo" id="employeeNo" required placeholder="enter employeeNo starting with E and 3 digits" 
                    onChange={this.onChangeemployeeNo}/> 
                   
              
                </div>

                <div className="form-group">
                    <label for="salaryMonth" >Salary Month</label>
                    <input type="month" className="form-control" id="salaryMonth"  placeholder="enter salary month" required
                    onChange={this.onChangesalaryMonth}/>
                </div>

                {/* <div className="form-group">
                    <label for="workingDays" >Working Days</label>
                    <input type="number" className="form-control" min="0" max="30" id="workingDays" placeholder="enter working days" required
                    onChange={this.onChangeworkingDays}/>
                    
                </div> */}
                 <div className="form-group">
                    <label for="basicPay" >Basic Pay</label>
                    <input type="number" className="form-control" id="basicPay" placeholder="enter basicPay" required 
                    onChange={this.onChangebasicPay}/>

                </div>

                <div className="form-group">
                    <label for="allowance" >Allowances</label>
                    <input type="number" className="form-control" id="allowance" required
                    onChange={this.onChangeallowance} />
        
                </div>
                  <br/>

                <h5 style={{color:"#1b7ced"}}>SALARY DEDUCTIONS</h5>
                <hr/>

                <div className="form-group">
                    <label for="workingDays" >Working Days</label>
                    <input type="number" className="form-control" min="0" max="30" id="workingDays" placeholder="enter working days" required
                    onChange={this.onChangeworkingDays}/>
                    
                </div>

                <div className="form-group">
                    <label for="deduction" >Leave Deductions</label>
                    <input type="number" className="form-control" id="deduction" required
                    onChange={this.onChangededuction} />
                </div>

                <div className="form-group">
                    <label for="monthTax" >Tax for Month</label>
                    <input type="number" className="form-control" id="monthTax" required 
                    onChange={this.onChangemonthTax}/>
    
                </div>

                <div className="form-group">
                    <label for="salaryNote" >Salary Note</label>
                    <textarea id="salaryNote" className="form-control" rows="5" columns="20"  maxLength="10" required placeholder="note.."
                    onChange={this.onChangesalaryNote}/>
    
                    </div>

                <hr/>
                
                <div className="form-group">
                
                <label for="totDeduction" >Total salary Deductions</label>
                <input type="text" className="form-control" id="totDeduction" required
                    onChange={this.onChangetotDeduction}/>  

                
                </div> 
                <div className="form-group">
                   <label for="netPay">Net Pay</label>
                    <input type="text" className="form-control" required id="netPay" onChange={this.onChangenetPay}/>
    
                </div>
               
                
               
                <br/><br/>    
                {/* <center><button type="submit" className="Btn5" style={{padding:"10px 40px"}}>Submit</button></center> */}
               
    
                <button type="submit" className="Btn5" style={{padding:"8px 30px",marginRight:"20px"}}>Submit</button>
                <Link className="Btn6" to="/home">
                        Cancel
                    </Link>
    </form>
   
    </div>
   

    
    );
  }
}