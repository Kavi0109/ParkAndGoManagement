import React from 'react';
import './HomeMainStyles.css';
import './favicon.ico';
import img1 from './backimage1.jpg';
import img2 from './carbackimage2.jpg';
import img3 from './carinsert1.jpg';
import gal1 from './gal1.jpg';
import gal2 from './home1.jpg';
import gal3 from './home4.jpg';
import gal4 from './gal4.jpg';
import hal3 from './front.jpg';
import gal5 from './gal5.jpg';
import gal6 from './hoome2.jpg';



export default function HomeMain(){





return(
<div>
<header class="py-5">
            <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div class="m-4 m-lg-5">
                        
                        <h1 class="display-5 fw-bold">Welcome to Park And Go Management System!</h1>
                        <img src={hal3} class="img-fluid mb-4" alt=""/>
                        <p class="fs-4"> Minimize traffic on the roads by providing shuttles for our customers to reach 
            their desired destination they want. <br /> The hassle free system will helps to park their vehicles without wasting time at toll gates.
          </p>
                        <a class="btn btn-primary btn-lg" href="/login">Login</a>
                    </div>
                </div>
            </div>
        </header>

        <section class="pt-4">
            <div class="container px-lg-5">

                <div class="row gx-lg-5">
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <img src={gal1} class="img-fluid mb-4" alt=""/>
                                <h2 class="fs-4 fw-bold">Why to choose us</h2>
                                <p class="mb-0">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <img src={gal2} class="img-fluid mb-4" alt=""/>
                                <h2 class="fs-4 fw-bold">Our Mission</h2>
                                <p class="mb-0">As always, Start Bootstrap has a powerful collectin of free templates.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <img src={gal3} class="img-fluid mb-4" alt=""/>
                                <h2 class="fs-4 fw-bold">Our Vision</h2>
                                <p class="mb-0">The heroic part of this template is the jumbotron hero header!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <img src={gal4} class="img-fluid mb-4" alt=""/>
                                <h2 class="fs-4 fw-bold">Locations</h2>
                                <p class="mb-0">We've created some custom feature boxes using Bootstrap icons!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <img src={gal5} class="img-fluid mb-4" alt=""/>
                                <h2 class="fs-4 fw-bold">Benefits of using our system</h2>
                                <p class="mb-0">We keep our dependencies up to date and squash bugs as they come!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                            <img src={gal6} class="img-fluid mb-4" alt=""/>
                                <h2 class="fs-4 fw-bold">% Customer Saticification</h2>
                                <p class="mb-0">Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
)

}