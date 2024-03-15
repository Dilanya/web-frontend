import React, { useState, useEffect } from "react";
import { generateEndpoint } from "../Api";
import titleToSlug from "../Api";

export default function AllNews(params) {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const endpoint = generateEndpoint("updates");

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const formattedNewsData = data.data.map((news) => {
          const excerptText = news.attributes.body[0].children[0].text;
          const excerpt = excerptText.split(" ").slice(0, 150).join(" "); // Limiting to 100 words
          return {
            ...news,
            publishedAt: formatDate(news.attributes.publishedAt),
            excerpt: excerpt,
          };
        });
        setNewsData(formattedNewsData);
      })
      .catch((error) => console.error("Error fetching news data:", error));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return date
      .toLocaleDateString("en-US", options)
      .toUpperCase()
      .replace(/\b(\d{1,2})(st|nd|rd|th)\b/g, "$1$2");
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
            <h2 class="event-title">News & Updates</h2>
          </div>
        </div>
        <br />

        {newsData.map((news, index) => (
          <div key={index}>
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-2">
                  <img
                    src={news.attributes.url}
                    className="img-fluid"
                    alt="event-img"
                  />
                </div>
                <div class="col-md-10">
                  <div class="event-heading">
                    <h3>{news.attributes.headline}</h3>
                    <p>{news.excerpt}</p>
                  </div>
                  <div id="collapse1" class="panel-collapse collapse in show">
                    <div class="panel-body"></div>
                  </div>
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        href={`/news/${news.id}/${titleToSlug(
                          news.attributes.headline
                        )}`}
                        class="event-toggle"
                      >
                        Read More
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
              <hr class="event-underline" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
