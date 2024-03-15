import React, { useState, useEffect } from "react";
import { generateEndpoint } from "../Api";
import titleToSlug from "../Api";

export default function AllEvents(params) {
    const [EventData, setEventData] = useState(null);

    useEffect(() => {
        const endpoint = generateEndpoint(`events`);
        fetch(endpoint)
            .then(response => response.json())
            .then(data => setEventData(data.data))
            .catch(error => console.error('Error fetching post:', error));
    }, []);

    const formatTime = (time) => {
        return time.slice(0, 5); 
    };

    const formatMonth = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('default', { month: 'short' });
    };
    
    const formatDay = (dateString) => {
        const date = new Date(dateString);
        return date.getDate();
    };

    

  
  return (
    <section class="events" style={{
        backgroundColor: "whiteSmoke",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2 class="event-title">Events</h2>
          </div>
        </div>
        <br />

        {EventData && EventData.map((events, index) => (
          <div key={index}>
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-2">
                <div className="event_date">
                            <div className="event-date-wrap">
                                <p>{formatDay(events.attributes.Date)}</p>
                                <span>{formatMonth(events.attributes.Date)}</span>
                            </div>

                            </div>
                </div>
                <div class="col-md-10">
                  <div class="event-heading">
                  
                    <h3>{events.attributes.headline}</h3>
                                <h4>{events.attributes.title}</h4>
                                <i className="fa-solid fa-calendar-days" style={{ marginRight: '10px' }}></i>
                                <span>{events.attributes.Date}</span>
                                <br/>
                                <i class="fa-solid fa-clock" style={{ marginRight: '10px' }}></i>
                                <span>{formatTime(events.attributes.StartTime)} - {formatTime(events.attributes.EndTime)}</span>
                                
                            
                  </div>
                  <a
                        href={`/events/${events.id}/${titleToSlug(
                          events.attributes.title
                        )}`}
                        class="event-toggle"
                      >
                        Read More
                      </a>
                      <hr/>
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
