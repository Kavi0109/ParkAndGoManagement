
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class AddLeave extends Component{

    constructor(props) {
        super(props)
    
        // Setting up functions
    
        this.onChangeemployeeNo = this.onChangeemployeeNo.bind(this);
        this.onChangefromDate = this.onChangefromDate.bind(this);
        this.onChangenoOfDays = this.onChangenoOfDays.bind(this);
        this.onChangereason = this.onChangereason.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
   

    // Setting up state
    this.state = {
        employeeNo: '',
        fromDate: '',
        noOfDays: '',
        reason: ''
      
    }
}
 checkDate() {
   var selectedText = document.getElementById('fromDate').value;
   var selectedDate = new Date(selectedText);
   var now = new Date();
   return (selectedDate > now);
 }


onChangeemployeeNo(e) {
    this.setState({ employeeNo: e.target.value })
    
  }

  onChangefromDate(e) {
    this.setState({ fromDate: e.target.value })
  }

  onChangenoOfDays(e) {
    this.setState({ noOfDays: e.target.value })
  }

  onChangereason(e) {
    this.setState({ reason: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    if(!this.checkDate()){
      alert('enter a future date');
    }
else{
    const leaveObject = {
        employeeNo: this.state.employeeNo,
        fromDate: this.state.fromDate,
        noOfDays: this.state.noOfDays,
        reason: this.state.reason
    };
    axios.post("/leave/addl", leaveObject)
     .then((res) => {
        console.log(res.data)
        alert('Leave successfully added')
        window.setTimeout(function () {
          window.location.href = "/l";
        }, 1000);
      }).catch((error) => {
        console.log(error)
      })
    //   .then(res => console.log(res.data));

    this.setState({ employeeNo: '', fromDate: '', noOfDays: '', reason:''})
  }}

  render(){
      return(

          
      <div id="formStyle2"> 

  <center>    <h5>APPLY LEAVE</h5></center>
            <hr></hr>
           
             <center> <img src={require('./Images/calendar1.jpg').default} width="500" height="350"/></center> <br/>
              <form onSubmit={this.onSubmit}>



            <div className="form-group">
            <div class="row">
								<div style={{width:"25%"}}>

          <label for="employeeNo" >Emaployee No</label>
          </div>
				        		<div style={{width:"10%"}}>
									<label>:</label>
								</div>
				        		<div style={{width:"48%"}}>
            <input type="text" className="form-control" id="employeeNo" pattern="E[0-9]{3}" placeholder="enter employee number" required
         onChange={this.onChangeemployeeNo}/>
       
          		</div>
							</div>

          </div>

          <div className="form-group">
            <div class="row">
								<div style={{width:"25%"}}>
            <label for="fromDate" >From Date</label>
            </div>
				        		<div style={{width:"10%"}}>
									<label>:</label>
								</div>
				        		<div style={{width:"48%"}}>
            <input type="date" className="form-control" id="fromDate" required placeholder="from date" onChange={this.onChangefromDate}/>
          </div>
          </div>
							</div>

          <div className="form-group">
          <div class="row">
								<div style={{width:"25%"}}>
            <label for="noOfDays" >No Of Days</label>
            </div>
				        		<div style={{width:"10%"}}>
									<label>:</label>
								</div>
				        		<div style={{width:"48%"}}>
            <input type="number" className="form-control" required pattern="[0-9]{2}" id="noOfDays" placeholder="enter no Of Days"
            onChange={this.onChangenoOfDays}/>
            </div>
          </div>
							</div>

          <div className="form-group">
          <div class="row">
								<div style={{width:"25%"}}>
            <label for="reason" >Reason</label>
            </div>
				        		<div style={{width:"10%"}}>
									<label>:</label>
								</div>
				        		<div style={{width:"48%"}}>
            <textarea className="form-control"  id="reason" required rows="5" columns="20"  placeholder="reason......"
            onChange={this.onChangereason}/>
            		</div>
							</div>
          </div>
          
          <br/><br/>    
                <center><button type="submit" className="Btn5" style={{padding:"10px 40px"}}>Submit</button></center>
         
          </form>
        {/* <div className="form-wrapper">

       <Form onSubmit={this.onSubmit}>
         <Form.Group controlId="employeeno">
           <Form.Label>Employee No</Form.Label>
           <Form.Control type="text"  onChange={this.onChangeemployeeNo} />
         </Form.Group>

         <Form.Group controlId="fromDate">
           <Form.Label>From Date</Form.Label>
           <Form.Control class="kilo" type="date"  onChange={this.onChangefromDate} />
         </Form.Group>

         <Form.Group controlId="nodays">
           <Form.Label>No Of Days</Form.Label>
           <Form.Control type="number"  onChange={this.onChangenoOfDays} />
         </Form.Group>
         <Form.Group controlId="reason">
           <Form.Label>Reason</Form.Label>
           <Form.Control type="textarea" onChange={this.onChangereason} />
         </Form.Group>
         <br/>
         <Button variant="danger" size="lg" block="block" type="submit">
           Create Leave
         </Button>
       </Form>
     </div> */}

     </div>
      )
  }

}