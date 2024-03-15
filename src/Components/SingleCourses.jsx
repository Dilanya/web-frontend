import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateEndpoint } from "../Api.js";
import msw from "../images/MSW/1.png" 

import '../css/bootstrap.min.css'

import '../css/style.css';

export default function CoursesSingle() {
    const { id } = useParams();
  const [EventsData, setEventsData] = useState(null);

  useEffect(() => {
    const endpoint = generateEndpoint(`events/${id}`)
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setEventsData(data.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  
  

  

 
  return (
    <section>
      <div class="container">
            <br/>
            <br/>
            <h2>Diploma in Counseling</h2>
            <br/>
            <div class="row">
                <div class="col-md-12">
                    <img src={msw} class="img-fluid" alt="#"/>
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col-lg-8">
                    <div class="admission_discription">


                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. </p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>In consequat lacus dapibus, iaculis massa vitae, condimentum risus.</li>
                            <li>Curabitur varius magna quis ultrices lacinia.</li>
                        </ul>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing.</p>
                    </div>
                    <div class="admission-pdf">
                        <i class="fa fa-file-pdf-o fa-3x" aria-hidden="true"></i>
                        <p>course details PDF
                            <br/>
                            <a href="#">DOWNLOAD</a>
                        </p>
                        <a href="#" class="btn btn-warning btn-pdf_join">Join this course</a>
                    </div>

                </div>
                <div class="col-lg-4">
                    <ul class="admission_rating">
                        
                        <li class="admission_star-second">Starts<span>:</span></li>
                        <li class="admission_star">7 January 2017</li>
                        <li>Duration<span>:</span></li>
                        <li class="admission_star">7 months</li>
                        <li class="admission_star-second">Timing<span>:</span></li>
                        <li class="admission_star">10 am - 2 pm</li>
                        <li>Fees<span>:</span></li>
                        <li class="admission_star">$ 500.00</li>
                        
                    </ul>

                </div>
            </div>
        </div> <br/>
    </section>
  );
}
