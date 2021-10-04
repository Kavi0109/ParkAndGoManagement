import { withRouter, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import stm_vec from "../assets/stm.png"

function UpdateStaff(props){

    
    const history = useHistory();
    const [stm, setStm] = useState([]);
    //console.warn("props", props.match.params.id)


    useEffect(async ()=>{
        let res = await fetch("http://localhost:8070/staff/get/"+props.match.params.id)
        let data = await res.json()
        setStm(data.staffinfo)


        //console.log(bus.bus_Id)
    })

    const [stm_Id, setStmId] = useState(stm.stm_Id);
    const [name, setName] = useState(stm.name);
    const [type, setType] = useState(stm.type);
    const [phone, setPhone] = useState(stm.phone);
    const [date_Reg, setDateReg] = useState(stm.date_Reg);


    //Update
    function updateStaff() {
            let items = {stm_Id,name,type,phone,date_Reg}
                //console.warn(bus.bus_Id)
                fetch("http://localhost:8070/staff/update/"+props.match.params.id,{
                    method: 'PUT',
                    headers:{
                        'Accept': 'application/json',
                        'Content-type' : 'application/json'

                    },
                    body:JSON.stringify(items)
                }).then((result)=>{
                    result.json().then((response)=>{
                        //console.warn(response)
                        alert(response.status)
                    
                    })
                }).catch((err)=>{
                    if(err.error==undefined){
                        alert("Staff Member Updated")
                        history.push("/viewstaffs")
                    }
                    else{
                        alert(err.error)
                    }

                })
            
    }
    


  


    return(

       <div className="transportation-form">
           
                 
          <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left-yellow">
                        <img src={stm_vec} alt=""/>
                        <h3>Staff</h3>
                        <p>Our staff, who engage with customers with safe</p>
                       
                    </div>
                    
                    <div class="col-md-9 register-right-yellow">
                    <form className="form-shape" type='submit' onSubmit={updateStaff}>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Updating member: {stm.stm_Id}</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="validationCustom01" class="form-label">Staff Member ID</label>
                                            <input id="stmid" type="text" class="form-control" placeholder="STM ID" defaultValue={stm.stm_Id} onChange={(e)=>{
                                                
                                                setStmId(e.target.value);
                                                e.target.setCustomValidity('');
                                               

                                            }} required onInvalid={(e) => { 
                                                
                                                    e.target.setCustomValidity('Please enter a unique valid Stm ID')

                                              
                                                
                                             }}/>
                                            
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Member Name</label>
                                            <input id="name" type="text" class="form-control" placeholder="Member Name" defaultValue={stm.name}  onChange={(e)=>{
                                                
                                                setName(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Name cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Type</label>
                                            <input required id="type"  type="text" class="form-control" placeholder="Driver or Conductor" defaultValue={stm.type}  onChange={(e)=>{
                                                
                                                setType(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('No Plate cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Phone No:</label>
                                            <input required id="phone"  type="text" class="form-control"  placeholder="Eg: 773675637" defaultValue={stm.phone}  onChange={(e)=>{
                                                
                                                setPhone(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity("Owner's name cannot be empty")

                                          
                                            
                                         }}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label class="form-label">Registering Date</label>
                                            <input required id="datereg"  type="date" class="form-control" defaultValue={stm.date_Reg}  onChange={(e)=>{
                                                
                                                setDateReg(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Please Enter a Valid Date')

                                          
                                            
                                         }} />
                                       
                                        </div>
    
        
                                       <input type="submit" class="btnRegister"  value="Update"/>

                                       
                                    </div>
                                    
                                </div>
                            </div>
                           
                        </div>
                        </form>
                    </div>
                   
                </div>
                

            </div>



        </div>

    )


}

export default withRouter(UpdateStaff);