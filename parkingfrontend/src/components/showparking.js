import React,{Component, useRef} from 'react';
import { useState } from 'react';
import axios from 'axios';
import TableRow from './TableRow.js';
import jsPDF from 'jspdf';
import "jspdf-autotable"
import logo from './B&W.png'




export default class showparking extends Component{
    
    constructor(props){
        super(props);
        this.state = {parking : []};
      
    }



    

    exportPDF = () => {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "portrait"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "Car Parking Report";
        const title2="Monthly Parking Report for Month of October 2021"
        const headers = [["Type", "Slot No", "Slot Size", "Plate No" , "Customer Reg ID", "Description"]];
    
        const data = this.state.parking.map(elt=> [elt.Option, elt.sno, elt.ssize, elt.cno, elt.rno, elt.des]);
    
        let content = {
          startY: 200,
          head: headers,
          body: data
        };
    
        doc.addImage(logo,'PNG',65,20,100,100)
        doc.text(title, marginLeft,140);
        doc.text(title2, marginLeft, 160);
        doc.autoTable(content);
        doc.save("Monthy Parking Report.pdf")
      }
    

    componentDidMount(){
        axios.get("/parking/").then(response=>{
            this.setState({parking : response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    tabRow(){
        return this.state.parking.map(
            function (object,i){
                return <TableRow obj={object} key={i}/>;
            });
    }    

    myFunction() {

        var input, filter, table, tr, td, i, txtValue;
    
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[4];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }       
        }
      }

    render(){
        return(
            <div className="container">
                

        <center><div class="SearchPaddng">  
        <form action="btn btn-primary" class="searchForm">
        <input class="searchTxt" type="text" placeholder="Search for Customer ID..." name="search" id="myInput"
                    onKeyUp={this.myFunction}/>
        <button type="submit" class="btn btn-primary">Search</button>
    
        </form>
      </div></center>
                
            
                <button onClick={() => this.exportPDF()} className="btn btn-primary" style={{float: 'right'}}>Download PDF</button>
                
                <h3 style={{marginTop:20}}>Allocated Slots Report</h3>
                <table className="table table-striped table-bordered table-hover table-condensed" style={{marginTop:20}} id="myTable">
                    <thead class="table-primary">
                        <tr>
                        <th><center>Type</center></th>
                        <th><center>Slot No</center></th>
                        <th><center>Slot Size</center></th>
                        <th><center>Plate No</center></th>
                        <th><center>Customer Reg ID</center></th>
                        <th><center>Entry Date and Time</center></th>
                        <th><center>Description</center></th>
                        <th colSpan="2"><center>Action</center></th>                     
                       </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>

                </table>
                <a href="/show">
                <button className="btn btn-primary">Back To Allot Parking</button>
                </a>
                <br/><br/>
            </div>
        );
    }

}
    