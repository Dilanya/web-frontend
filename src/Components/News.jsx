import React, { useState, useEffect } from "react";
import { generateEndpoint } from "../Api";
import titleToSlug from "../Api";

export default function News(params) {
  const [newsData, setNewsData] = useState([]);
  const isMobile = window.innerWidth <= 767.98;

  useEffect(() => {
    const endpoint = generateEndpoint("updates");

    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        const formattedNewsData = data.data.map((news) => {
          const excerptText = news.attributes.body[0].children[0].text;
          const excerpt = excerptText.split(" ").slice(0, 15).join(" "); // Limiting to 100 words
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
    <section
      className="event"
      style={{ backgroundColor: "rgb(237, 237, 237)" }}
    >
      <div className="container" style={{ textAlign: "justify" }}>
        <div className="row">
          <div className="col-md-12">
            <h2 style={{ color: "rgb(46, 46, 143)" }}>News & Updates</h2>
          </div>
          
        </div>
        <div className="row">
          <div className="col-lg-6">
            {newsData.slice(0, 1).map((news, index) => (
              <div className="event-img2" key={index}>
                <div className="content-wrapper1">
                  <div className="news-card1">
                    <a
                      href={`/news/${news.id}/${titleToSlug(
                        news.attributes.headline
                      )}`}
                      className="news-card__card-link1"
                    ></a>
                    <img
                      src={news.attributes.url}
                      alt=""
                      className="news-card__image1"
                    />
                    <div className="news-card__text-wrapper1">
                      <h3 className="news-card__title1">
                        {news.attributes.headline}
                      </h3>
                      <div className="news-card__post-date1">
                        {news.publishedAt}
                      </div>
                      <div className="news-card__details-wrapper1">
                        <p className="news-card__excerpt1">{news.excerpt}</p>
                        <a
                          href={`/news/${news.id}/${titleToSlug(
                            news.attributes.headline
                          )}`}
                          className="news-card__read-more1"
                        >
                          Read more{" "}
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br/>
          <div className="col-lg-6" style={{ margin: isMobile ? "10px" : "0px" }}>
            {newsData.slice(1, 4).map((news, index) => (
              <div className="row" key={index}>
                <div className="event-img2">
                  <div className="row ">
                    <div className="col-sm-3">
                      {" "}
                      <img
                        src={news.attributes.url}
                        className="img-fluid"
                        alt="event-img"
                      />
                      <a
                        href={`/news/${news.id}/${titleToSlug(
                          news.attributes.headline
                        )}`}
                        className="news-card__card-link1"
                      ></a>
                    </div>
                    <div className="col-sm-9">
                      <span>{news.publishedAt}</span>
                      <h4 style={{ color: "rgb(22, 11, 102)" }}>
                        {news.attributes.headline}
                      </h4>
                      <p>{news.excerpt}</p>
                      <a
                        href={`/news/${news.id}/${titleToSlug(
                          news.attributes.headline
                        )}`}
                      >
                        Read More
                      </a>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div class="row">
            <div class="col-md-12 text-center">
                <a href="/news" class="btn btn-default btn-courses">View all News</a>
            </div>
        </div>
      </div>
    </section>
  );
}
