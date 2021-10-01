import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';
import jsPDF from 'jspdf';
import "jspdf-autotable";


export default class Payslip extends Component {

  constructor(props) {
    super(props)
  

    // State
    this.state = {
      employeeNo: '',
      salaryMonth: '',
      workingDays: '',
      basicPay: '',
      allowance: '',
      basicPay: '',
      deduction: '',
      monthTax: '',
      salaryNote: '',
      totDeduction: '',
      netPay:''
    }
  }

//   handlePdf = () => {
//     const input = document.getElementById('payslip');

//     html2canvas(input)
//         .then((canvas) => {
//            // const imgData = canvas.toDataURL('image/png');
//             const pdf = new jsPDF('p', 'px', 'a4');
//             var width = pdf.internal.pageSize.getWidth();
//             var height = pdf.internal.pageSize.getHeight();

//            // pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
//             pdf.save("test.pdf");
//         });
// };

  print(){
    window.print();
  }

  componentDidMount() {
    axios.get("/salary/bet/" + this.props.match.params.id)
      .then(res => {
        this.setState({
        employeeNo: res.data.employeeNo,
        salaryMonth: res.data.salaryMonth,
        workingDays: res.data.workingDays,
        basicPay: res.data.basicPay,
        allowance: res.data.allowance,
        deduction: res.data.deduction,
        monthTax: res.data.monthTax,
        salaryNote: res.data.salaryNote,
        totDeduction: res.data.totDeduction,
        netPay: res.data.netPay
        
        });
      })
      .catch((error) => {
        console.log(error);
      })

  }
  render(){
    return(
      <div>
       
            <div class="slip1" id="payslip">
              <div class="logo2">  <img src={require('./Images/Blue.jpg').default }  width="200" height="150"/></div>
       <center>      <div class="hd"><h6 style={{color:"#1b7ced", fontWeight:"bold"}}>PARK EXPRESS<br/>C6367<br/>COLOMBO<br/>WESTERN PROVINCE</h6></div></center>
        <center>   <h6 style={{color:"grey"}}>Payslip for the period of August 2021</h6></center>

		<br/>
             <div class ="slip">

             <div class="row">
								<div style={{width:"18%"}}> 
									<label for="id" class="m">Employee No</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"36%"}}>
									<label for="id" id="Uid">{this.state.employeeNo}</label>
								</div>
                <div style={{width:"18%"}}> 
									<label for="id" class="m">Employee Name</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"16%"}}>
									<label for="id" id="Uid">Sara Leymn</label>
								</div>
							</div>

              <div class="row">
								<div style={{width:"18%"}}> 
									<label for="id" class="m">Date of joining</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"36%"}}>
									<label for="id" id="Uid">12 Aug 2021</label>
								</div>
                <div style={{width:"18%"}}> 
									<label for="id" class="m">Designation</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"16%"}}>
									<label for="id" id="Uid">Manager</label>
								</div>
							</div>

      
              <div class="row">
								<div style={{width:"18%"}}> 
									<label for="id" class="m">Department</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"36%"}}>
									<label for="id" id="Uid">HR Department</label>
								</div>
                <div style={{width:"18%"}}> 
									<label for="id" class="m">Account No</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"16%"}}>
									<label for="id" id="Uid">6676767777</label>
								</div>
							</div>

              <div class="row">
								<div style={{width:"18%"}}> 
									<label for="id" class="m">Days of Working</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"36%"}}>
									<label for="id" id="Uid">{this.state.workingDays}</label>
								</div>
                <div style={{width:"18%"}}> 
									<label for="id" class="m"></label>
								</div>
								<div style={{width:"6%"}}>
									<label></label>
								</div>
								<div style={{width:"16%"}}>
									<label for="id" id="Uid"></label>
								</div>
							</div>
            
           
         </div>
         <div class ="slip">

         <div class="row">
								<div style={{width:"18%"}}> 
									<label for="id" class="m">Basic Pay</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"36%"}}>
									<label for="id" id="Uid">{this.state.basicPay}</label>
								</div>
                <div style={{width:"18%"}}> 
									<label for="id" class="m">Leave Deduction</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"16%"}}>
									<label for="id" id="Uid">{this.state.deduction}</label>
								</div>
							</div>

              <div class="row">
								<div style={{width:"18%"}}> 
									<label for="id" class="m">Allowances</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"36%"}}>
									<label for="id" id="Uid">{this.state.allowance}</label>
								</div>
                <div style={{width:"18%"}}> 
									<label for="id" class="m">Monthly Tax</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"16%"}}>
									<label for="id" id="Uid">{this.state.monthTax}</label>
								</div>
							</div>

              <div class="row">
								<div style={{width:"18%"}}> 
									<label for="id" class="m"></label>
								</div>
								<div style={{width:"6%"}}>
									<label></label>
								</div>
								<div style={{width:"36%"}}>
									<label for="id" id="Uid"></label>
								</div>
                <div style={{width:"18%"}}> 
									<label for="id" class="m">Total Deductions</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"16%"}}>
									<label for="id" id="Uid">{this.state.allowance}</label>
								</div>
							</div>
              <hr/>

              <div class="row">
								<div style={{width:"18%"}}> 
									<label for="id" class="m"></label>
								</div>
								<div style={{width:"6%"}}>
									<label></label>
								</div>
								<div style={{width:"36%"}}>
									<label for="id" id="Uid"></label>
								</div>
                <div style={{width:"18%"}}> 
									<label for="id" class="m">Net Pay</label>
								</div>
								<div style={{width:"6%"}}>
									<label>:</label>
								</div>
								<div style={{width:"16%"}}>
									<label for="id" id="Uid">{this.state.netPay}</label>
								</div>
							</div>



         </div>

        
            </div>
            {/* <button onClick={this.handlePdf} className="slip-link">Download PDF</button><br/><br/> */}
            <center> <button onClick={this.print} class="Btn5">Print Payslip</button> 
			<Link className="Btn6" to="/">
                        Cancel
                    </Link></center>

            </div>
    )
}

}

    

