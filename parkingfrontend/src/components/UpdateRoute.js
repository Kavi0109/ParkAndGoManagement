import { withRouter, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import route_vec from "../assets/route.png"

function UpdateRoute(props){

    
    const history = useHistory();
    const [route, setRoute] = useState([]);
    //console.warn("props", props.match.params.id)


    useEffect(async ()=>{
        let res = await fetch("http://localhost:8070/route/get/"+props.match.params.id)
        let data = await res.json()
        setRoute(data.routeinfo)


        //console.log(bus.bus_Id)
    })

    const [route_Id,  setRouteId] = useState(route.route_Id);
    const [from, setFrom] = useState(route.from);
    const [to, setTo] = useState(route.to);
    const [dep_time, setDepTime] = useState(route.dep_time);
    const [bus_Id, setBusId] = useState(route.bus_Id);
    const [driver_Id, setDriverId] = useState(route.driver_Id);
    const [conductor_Id, setConductorId] = useState(route.conductor_Id);


    //Update
    function updateRoute() {
            let items = {route_Id,from,to,dep_time,bus_Id,driver_Id,conductor_Id}
                //console.warn(bus.bus_Id)
                fetch("http://localhost:8070/route/update/"+props.match.params.id,{
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
                        alert("Route Updated")
                        history.push("/viewroutes")
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
                    <div class="col-md-3 register-left-green">
                        <img src={route_vec} alt=""/>
                        <h3>Routes</h3>
                        <p>The way we use to transport our customers</p>
                       
                    </div>
                    
                    <div class="col-md-9 register-right-green">
                    <form className="form-shape" type='submit'>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Updating Route : {route.route_Id}</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="validationCustom01" class="form-label">Route ID</label>
                                            <input id="routeid" type="text" class="form-control" placeholder="rou-xxx" disabled defaultValue={route.route_Id} onChange={(e)=>{
                                                
                                                setRouteId(e.target.value);
                                                e.target.setCustomValidity('');
                                               

                                            }} required onInvalid={(e) => { 
                                                
                                                    e.target.setCustomValidity('Please enter a unique, valid Route ID')

                                              
                                                
                                             }}/>
                                            
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">From</label>
                                            <input id="from" type="text" class="form-control" placeholder="City Name"  defaultValue={route.from} onChange={(e)=>{
                                                
                                                setFrom(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('From cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">To</label>
                                            <input required id="to"  type="text" class="form-control" placeholder="City Name" defaultValue={route.to} onChange={(e)=>{
                                                
                                                setTo(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('To cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label class="form-label">Departure Time</label>
                                            <input required id="deptime"  type="time" class="form-control" defaultValue={route.dep_time} onChange={(e)=>{
                                                
                                                setDepTime(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Please Enter a Valid Time')

                                          
                                            
                                         }} />
                                       </div>
                                         
                                       <div class="form-group">
                                        <label class="form-label">Bus ID</label>
                                            <input id="bid" type="text" class="form-control" placeholder="bid-xxx" defaultValue={route.bus_Id} onChange={(e)=>{
                                                
                                                setBusId(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Bus ID cannot be empty')

                                          
                                            
                                         }} />
                                        </div>

                                        <div class="form-group">
                                        <label class="form-label">Driver ID</label>
                                            <input id="did" type="text" class="form-control" placeholder="did-xxx" defaultValue={route.driver_Id} onChange={(e)=>{
                                                
                                                setDriverId(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Driver ID cannot be empty')

                                          
                                            
                                         }} />
                                        </div>

                                        <div class="form-group">
                                        <label class="form-label">Conductor ID</label>
                                            <input id="cid" type="text" class="form-control" placeholder="cid-xxx" defaultValue={route.conductor_Id} onChange={(e)=>{
                                                
                                                setConductorId(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Conductor ID cannot be empty')

                                          
                                            
                                         }} />
                                        </div>

                                       <input type="submit" class="btnRegister"  value="Update" onClick={updateRoute}/>

                                       
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

export default withRouter(UpdateRoute);