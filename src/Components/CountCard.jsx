import React from "react";
import icon_1 from "../images/chart-icon_1.png";
import icon_2 from "../images/chart-icon_2.png";
import icon_3 from "../images/chart-icon_3.png";
import icon_4 from "../images/chart-icon_4.png";
import bg from "../images/chart_bg.jpg";

export default function CountCard(params) {
  return (
    <div class="detailed_chart" style={{ backgroundImage: `url(${bg})` , backgroundAttachment: 'fixed'}}>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3 chart_bottom">
            <div class="chart-img">
              <img src={icon_1} class="img-fluid" alt="chart_icon" />
            </div>
            <div class="chart-text">
              <p>
                <span class="counter">28</span> Lecturers
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 chart_bottom chart_top">
            <div class="chart-img">
              <img src={icon_2} class="img-fluid" alt="chart_icon" />
            </div>
            <div class="chart-text">
              <p>
                <span class="counter">1500+</span> Students
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 chart_top">
            <div class="chart-img">
              <img src={icon_3} class="img-fluid" alt="chart_icon" />
            </div>
            <div class="chart-text">
              <p>
                <span class="counter">20+</span> Courses
              </p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="chart-img">
              <img src={icon_4} class="img-fluid" alt="chart_icon" />
            </div>
            <div class="chart-text">
              <p>
                <span class="counter">72</span> Years Exp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
