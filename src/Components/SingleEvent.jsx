import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateEndpoint } from "../Api.js";

import '../css/bootstrap.min.css'

import '../css/style.css';

export default function EventSingle() {
    const { id } = useParams();
  const [EventsData, setEventsData] = useState(null);

  useEffect(() => {
    const endpoint = generateEndpoint(`events/${id}`)
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setEventsData(data.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  
  if (!EventsData) {
    return  <p>Loading...</p>;
  }

  

  const formatTime = (time) => {
    return time.slice(0, 5); 
    };

    const formatMonth = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('default', { month: 'long' });
    };

    const formatDay = (dateString) => {
        const date = new Date(dateString);
        return date.getDate();
    };

    const formatYear = (year) => {
      return year.slice(0, 4); 
    }
 
  return (
    <div>
      <section className="event">
        <div class="container">
          <div class="row">
            <div className="col-md-12">
              <div class="row">
                <div class="col-md-2">
                  <div className="event-date">
                    <h4>{formatDay(EventsData.attributes.Date)}</h4> <span>{formatMonth(EventsData.attributes.Date)} {formatYear(EventsData.attributes.Date)}</span>
                  </div>
                  <span class="event-time">{formatTime(EventsData.attributes.StartTime)} - {formatTime(EventsData.attributes.EndTime)}</span>
                </div>
                <div class="col-md-10">
                  <div class="event-heading">
                    <h3>{EventsData.attributes.title}</h3>
                    <hr/>
                    <div class="col-md-8">
                  <img
                    src={EventsData.attributes.Url}
                    className="img-fluid"
                    alt="event-img"
                  />
                  </div>
                  <hr/>
                    <p>
                    {EventsData.attributes.description}
                    </p>
                  </div>
                  
                </div>
              </div>
              <hr class="event-underline" />
              </div>

              
          </div>
        </div>
      </section>
    </div>
  );
}
