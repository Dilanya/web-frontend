import React, { useEffect, useState } from "react";
import { generateEndpoint } from "../Api.js";

import titleToSlug from "../Api";
import CourseCard from "./CourseCard.jsx";

export default function Course(params) {
    const [CourseData, setCourseData] = useState(null);

    useEffect(() => {
        const endpoint = generateEndpoint(`courses`);
        fetch(endpoint)
            .then(response => response.json())
            .then(data => setCourseData(data.data))
            .catch(error => console.error('Error fetching post:', error));
    }, []);

    
    

    return (
        <section class="our_courses" style={{backgroundColor: 'rgb(237, 237, 237)'}}>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 style={{color: 'rgb(46, 46, 143)'}}>Our Courses</h2>
            </div>
        </div>
        <div class="row">
                
          <CourseCard/>      
                
                
        </div> <br/>
        <div class="row">
            <div class="col-md-12 text-center">
                <a href="/course-detail" class="btn btn-default btn-courses">View all courses</a>
            </div>
        </div>
    </div>
</section>
    );
}
