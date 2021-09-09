import React from 'react';
import img1 from './backimage1.jpg';
import img2 from './carbackimage2.jpg';
import img3 from './carinsert1.jpg';
import gal1 from './gal1.jpg';
import gal2 from './gal2.jpg';
import gal3 from './gal3.jpg';
import gal4 from './gal4.jpg';
import gal5 from './gal5.jpg';
import gal6 from './gal6.jpg';

const logosize={
    width:'20%',
    height:'20%'
}

function gallery(){

    return(

        <main class="grid">

    <center><h2 style={{marginTop:20}}> Gallery<br></br></h2></center>



        <div class="container my-4">
        <div class="row">


        <div class="col-lg-4 col-md-12 mb-4">

            <img src={gal1} class="img-fluid mb-4" alt=""/>

            <img src={gal2} class="img-fluid mb-4" alt=""/>

        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">

            <img src={gal3} class="img-fluid mb-4" alt=""
            data-wow-delay="0.1s"/>

            <img src={gal4} class="img-fluid mb-4" alt=""
            data-wow-delay="0.4s"/>

        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">

            <img src={gal5} class="img-fluid mb-4" alt=""
            data-wow-delay="0.2s"/>

            <img src={gal6} class="img-fluid mb-4" alt=""
            data-wow-delay="0.5s"/>

        </div>


        </div>

</div>
        </main>
    )
}

export default gallery;