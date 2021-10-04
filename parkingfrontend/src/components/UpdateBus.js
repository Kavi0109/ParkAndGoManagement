import { withRouter, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import bus_vec from "../assets/bus.png"

function UpdateBus(props){

    
    const history = useHistory();
    const [bus, setBus] = useState([]);
    //console.warn("props", props.match.params.id)


    useEffect(async ()=>{
        let res = await fetch("http://localhost:8070/bus/get/"+props.match.params.id)
        let data = await res.json()
        setBus(data.businfo)


        //console.log(bus.bus_Id)
    })

    const [bus_Id,  setBusId] = useState(bus.bus_Id);
    const [name, setName] = useState(bus.name);
    const [no_Plate, setNoPlate] = useState(bus.no_Plate);
    const [owner_Name, setOwnerName] = useState(bus.owner_Name);
    const [date_Rented, setDateRented] = useState(bus.date_Rented);
    const [rental_Rem, setRentalRem] = useState(bus.rental_Rem);
    const [phone_No, setPhoneNo] = useState(bus.phone_No);


    //Update
    function updateBus() {
            let items = {bus_Id, name, no_Plate, owner_Name, date_Rented, rental_Rem, phone_No}
                //console.warn(bus.bus_Id)
                fetch("http://localhost:8070/bus/update/"+props.match.params.id,{
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
                        alert("Bus Updated")
                        history.push("/viewbusses")
                    }
                    else{
                        alert(err.error)
                        history.push("/viewbusses")
                    }

                })
            
    }
    


  


    return(

        <div className="transportation-form">
            
            <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                    <img src={bus_vec} alt=""/>
                        <h3>Busses</h3>
                        <p>The shuttles we use to transport our employees</p>
                       
                    </div>
                    
                    <div class="col-md-9 register-right">
                    <form className="form-shape" type='submit' >
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Updating Bus : {bus.bus_Id}</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="validationCustom01" class="form-label">Bus ID</label>
                                            <input id="busid" type="text" class="form-control" placeholder="Bus ID"  defaultValue={bus.bus_Id} onChange={(e)=>{
                                                
                                                setBusId(e.target.value);
                                                e.target.setCustomValidity('');
                                               

                                            }} required onInvalid={(e) => { 
                                                
                                                    e.target.setCustomValidity('Please enter a unique valid Bus ID')

                                              
                                                
                                             }} />
                                            
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Bus Name</label>
                                            <input id="busname" type="text" class="form-control" placeholder="Bus Name" defaultValue={bus.name} onChange={(e)=>{
                                                
                                                setName(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Bus Name cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">No. Plate</label>
                                            <input required id="noplate"  type="text" class="form-control" placeholder="Number Plate" defaultValue={bus.no_Plate} onChange={(e)=>{
                                                
                                                setNoPlate(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('No Plate cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Owner's Name</label>
                                            <input required id="ownername"  type="text" class="form-control"  placeholder="Owner's Name" defaultValue={bus.owner_Name} onChange={(e)=>{
                                                
                                                setOwnerName(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity("Owner's name cannot be empty")

                                          
                                            
                                         }}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label class="form-label">Date Rented Previous Date: {bus.date_Rented}
                                    
                                        </label>
                                            <input required id="daterented"  type="date" class="form-control"  defaultValue={bus.date_Rented} onChange={(e)=>{
                                                
                                                setDateRented(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Please Enter a Valid Date')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Rental Remaining Previous Date: {bus.rental_Rem}</label>
                                            <input required id="rentalrem"  type="date" class="form-control"  defaultValue={bus.rental_Rem} onChange={(e)=>{
                                                
                                                setRentalRem(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Rental Remaining should not be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Contact Number</label>
                                            <input required id="phoneno"  type="number" maxlength="10" class="form-control" placeholder="Ex: 773675637" defaultValue={bus.phone_No} onChange={(e)=>{
                                                
                                                setPhoneNo(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('The number your entered is not valid')

                                          
                                            
                                         }}
                                         
                                         />
                                        </div>
                                         
                                        
                                       <input type="submit" class="btnRegister"  value="Update" onClick={updateBus}/>

                                       
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

export default withRouter(UpdateBus);