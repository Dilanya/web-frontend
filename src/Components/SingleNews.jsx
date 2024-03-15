import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateEndpoint } from "../Api.js";

import '../css/bootstrap.min.css'

import '../css/style.css';

export default function NewsSingle() {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const endpoint = generateEndpoint(`updates/${id}`)
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setNews(data.data))
      .catch(error => console.error('Error fetching post:', error));

  }, [id]);

  
  if (!news) {
    return  <p>Loading...</p>;
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date
      .toLocaleDateString("en-US", options)
      .toUpperCase()
      .replace(/\b(\d{1,2})(st|nd|rd|th)\b/g, "$1$2");
  };

  const publishedAt = formatDate(news.attributes.publishedAt)

  const bodyContent = news.attributes.body.map(paragraph => (
    <p key={paragraph.children[0].text}>{paragraph.children[0].text}</p>
  ));
 
  return (
    <div>
      <section className="event">
        <div class="container">
          <div class="row">
            <div className="col-md-12">
              <div class="row">
                
                
                  <hr/>
                  <div class="event-heading">
                  <h2>{news.attributes.headline}</h2>
                  <p>{publishedAt} / {news.attributes.department}</p>
                  <hr/>
                  <div class="col-md-8">
                  <img
                    src={news.attributes.url}
                    className="img-fluid"
                    alt="event-img"
                  />
                  </div>
                  <hr/>
                    <p>{bodyContent}</p>
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
