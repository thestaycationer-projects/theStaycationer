import React from 'react'
import "./ContactUsPage.css"

export default function ContactUsPage() {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                  <p className="left-heading"> Contact us</p>
                  <p className="left-paragraph"> The good life is waiting. Come, Lohono with us!</p>
                </div>
                <div className="col">
                  <img src= " https://www.lohono.com/static/media/contact-us-banner.3791382e.svg"/>
                </div>
            </div>
        </div>


<br/><br/><br/><br/><br/>

        <div className="container">
            <div className="row">

                <div className="col ">
                  <div className="container informationbox">
                    <div className="row">
                        <div className="col-2 ">
                          <img id="vector-1" src="https://www.lohono.com/static/media/rental-enquiries.4da0d8f5.svg"/>
                        </div>
                        <div className="col-10 ">
                           <p id="vector-1-paragraph"> <b>Rentals Enquiries</b> <br/>
                               Contact us on  <br/>
                               +918430600600
                           </p>
                        </div>
                    </div>
                   </div><br/>
                   <div className="container informationbox">
                    <div className="row">
                        <div className="col-2 ">
                          <img id="vector-2" src="https://www.lohono.com/static/media/partner-with-us.8c09f98b.svg"/>
                        </div>
                        <div className="col-10 ">
                           <p id="vector-1-paragraph"> <b>Rentals Enquiries </b> <br/>
                               Contact us on  <br/>
                               +918430600600
                           </p>
                        </div>
                    </div>
                   </div><br/>
                   <div className="container informationbox">
                    <div className="row">
                        <div className="col-2 ">
                          <img id="vector-3" src="https://www.lohono.com/static/media/corporate-enquiries.02a82798.svg"/>
                        </div>
                        <div className="col-10 ">
                           <p id="vector-1-paragraph"><b>Rentals Enquiries </b>  <br/>
                               Contact us on  <br/>
                               +918430600600
                           </p>
                        </div>
                    </div>
                   </div>
                </div>





                <div className="col">
                     
                <form action="mailto:tech.thestaycationer@gmail.com" method="GET" className='form'>
                    <h1 id="form-heading">
                       send a request
                    </h1>

                    <div className="mb-3">
                        <div id="emailHelp" className="form-text">Name</div>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <div id="emailHelp" className="form-text">Email</div>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <div id="emailHelp" className="form-text">Phone</div>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <div id="emailHelp" className="form-text">Phone</div>
                        <textarea type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>




                </div>


            </div>
        </div>
        
    </div>
  )
}
