import React from 'react';
import logo from './contactus.jpg';
import LogoImage from './back-form.jpg'

const logosize={
    width:'50%',
    height:'50%'
}

function contactus(){

    return(
        <div  className="container" style={{ backgroundImage: `url(${LogoImage})` }}>
        <div className="container">
            
            
            <center style={{marginTop:20}}>
            <img src={logo} style={logosize}></img>
            </center>
            
            <form><br></br><br></br>
            <div className="container">
                <div class="row">
                    <label htmlFor="name" class="col-sm-2 col-form-label text-white" >Full Name:</label>
                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="name" placeholder="Enter your name.."
                    />
                    </div>


                </div><br></br>

                <div class="row">
                    <label htmlFor="email" class="col-sm-2 col-form-label text-white" > Email:</label>
                    <div class="col-sm-10">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email.."
                     /></div>
                </div><br></br>

                <div class="row">
                    <label htmlFor="phone" class="col-sm-2 col-form-label text-white">Phone:</label>
                    <div class="col-sm-10">
                    <input type="number" className="form-control" id="phone" placeholder="Enter contact number.."
                     /></div>
                </div><br></br>

                <div class="row">
                    <label htmlFor="cno" class="col-sm-2 col-form-label text-white">Message:</label>
                    <div class="col-sm-10">
                    <input type="text" className="form-control" id="message" placeholder="Enter your message.."
                    /></div>
                </div><br></br><br></br><br></br>

                <div class="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                <br></br><br></br><br></br><br></br>

            </div>

            </form>
            </div>
            </div>
    )}


export default contactus;