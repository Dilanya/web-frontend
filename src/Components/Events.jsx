import React, { useEffect, useState } from "react";
import { generateEndpoint } from "../Api.js";

import titleToSlug from "../Api";

export default function Events(params) {
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
        <section className="events" style={{ backgroundColor: 'white' }}>
            <div className="container" style={{ textAlign: "justify" }}>
                
                <div className="row">
                    <div className="col-md-12">
                        <h2 style={{ color: 'rgb(46, 46, 143)' }}>Upcoming Events</h2>
                    </div>
                </div>
                <hr />
                <div className="row">
                    {EventData && EventData.slice(0,5).map((events, index) => (
                        <div className="col-md-4" key={index}>
                            
                            <div className="event_date">
                            <div className="event-date-wrap">
                                <p>{formatDay(events.attributes.Date)}</p>
                                <span>{formatMonth(events.attributes.Date)}</span>
                            </div>

                            </div>
                            <div className="date-description">
                            
                                <div><h4>{events.attributes.title}</h4>
                                <a
                        href={`/events/${events.id}/${titleToSlug(
                          events.attributes.title  
                        )}`} className="news-card__card-link1"
                      ></a></div>
                                <i className="fa-solid fa-calendar-days" style={{ marginRight: '10px' }}></i>
                                <span>{events.attributes.Date}</span>
                                <br/>
                                <i class="fa-solid fa-clock" style={{ marginRight: '10px' }}></i>
                                <span>{formatTime(events.attributes.StartTime)} - {formatTime(events.attributes.EndTime)}</span>
                                <hr className="event_line" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <a href="/events" className="btn btn-default btn-courses">View all events</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
