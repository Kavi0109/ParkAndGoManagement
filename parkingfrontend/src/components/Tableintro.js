import React from 'react';
import logo from './carparking.jpg';
import floor1 from './floor1.png';



const tablestyle = {
    width:'50%',
    height:'25%',
    text:'center',
    border:'2px solid black',
    padding:'100px'
};

const tableline = {
    width:'50%',
    height:'50%',
    text:'center',
    border:'1px solid black',
    padding:'100px'
}

const logosize={
    width:'7%',
    height:'7%'
}

const textedit={
    size:'25%',
    style:'bold',
    color:'black'
}



function Tableintro(){
    
    
    return(

        <div>
            
            <div class="container " style={{marginTop:20}}>



    <table id="myTable" class="table product-table table-striped table-bordered table-hover table-condensed">
        <thead>
            <tr>
                <th>Parking Slot Image</th>
                <th>Parking Slot Name</th>
                <th>Total Capacity</th>
            </tr>
        </thead>

        <tbody>

            <tr>
                <th scope="row">
                <a href="/first">
                    <img src={floor1} alt=""/>
                </a>
                </th>
                <td>
                    <h5 style={{marginTop:75}}><strong>First Floor Parking</strong></h5>
                    <p class="text-muted">For Regular Customers</p>
                </td>
                <td><h5 style={{marginTop:75}}>350</h5></td>
            </tr>

            <tr>
                <th scope="row">
                <a href="/second">
                    <img src={floor1} alt="" class="img-fluid"/>
                </a>
                </th>
                <td>
                    <h5 class="tableintro" style={{marginTop:75}}><strong>Second Floor Parking</strong></h5>
                    <p class="text-muted">For Non-regular Customers</p>
                </td>
                <td><h5 style={{marginTop:75}}>325</h5></td>
        
            </tr>
            <tr>
                <th scope="row">
                <a href="/basement">
                    <img src={floor1} alt="" class="img-fluid"/>
                </a>
                </th>
                <td>
                    <h5 style={{marginTop:75}}><strong>Basement Parking</strong></h5>
                    <p class="text-muted">For Permenent Customers</p>
                </td>
                <td><h5 style={{marginTop:75}}>150</h5></td>
            </tr>
            <tr>
                <th scope="row">
                <a href="/outer">
                    <img src={floor1} alt="" class="img-fluid"/>
                </a>
                </th>
                <td>
                    <h5 style={{marginTop:75}}><strong>Outer Parking</strong></h5>
                    <p class="text-muted">For walk-in Customers</p>
                </td>
                <td><h5 style={{marginTop:75}}>275</h5></td>

            </tr>


        </tbody>

    </table>
            <br></br><br></br>
</div></div>
        
 
    )
}

export default Tableintro;






