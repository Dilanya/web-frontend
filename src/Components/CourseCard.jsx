import React from "react";
import icon from '../images/plus-icon.png';
import courses from '../images/courses_1.jpg';

export default function CourseCard(params) {
    return(
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                    <div class="courses_box mb-4">
                    <a
                        href={`/course-detail 
                        )}`} className="news-card__card-link1"
                      ></a> 
                        <div class="course-img-wrap">
                            <img src={courses} class="img-fluid" alt="courses-img"/>
                            <div class="courses_box-img">
                                <div class="courses-link-wrap">
                                    <a href="course-detail.html" class="course-link"><span>course Details </span></a>
                                </div>
                            </div>
                        </div>

                        <div class="courses_icon">
                            <img src={icon} class="img-fluid close-icon" alt="plus-icon"/>
                        </div>
                        <a href="course-detail.html" class="course-box-content">
                            <h3>Diploma in Counseling</h3>
                        </a>
                    </div>
        </div>
    )
}