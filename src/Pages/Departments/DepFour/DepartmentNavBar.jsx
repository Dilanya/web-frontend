import React from "react";
import logo from "../../../images/logo.png";

export default function DepartmentNavBar(params) {

    const currentLocation = window.location.pathname;

    let DepartmentNameEnglish ;
    let DepartmentNameSinhala 

    if (currentLocation.startsWith("/web-frontend/faculty-of-social-work/department-of-anthropology-and-gerontology")) {
      DepartmentNameEnglish = "Department of Anthropology and Gerontology";
      DepartmentNameSinhala = "මානව විද්‍යා හා වයෝවෘද්ධ විද්‍යා  අධ්‍යනාංශය";
    } else {
        DepartmentNameEnglish = "Department of Sociology";
    }

    

    return(
        <nav class="navbar navbar2 navbar-toggleable-md navbar-light bg-faded">
                  <button
                    class="navbar-toggler navbar-toggler2 navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                  >
                    <span class="icon-menu"></span>
                  </button>
                  <a href={`/web-frontend/faculty-of-social-work/department-of-anthropology-and-gerontology`} className="navbar-brand nav-brand2">
                    <img
                      src={logo}
                      alt=""
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                  <a href={`/web-frontend/faculty-of-social-work/department-of-anthropology-and-gerontology`} class="navbar-brand nav-brand2">
                    <h2 style={{ fontSize: "15px" }}>
                      <b>
                        
                        {DepartmentNameEnglish} <br/> {DepartmentNameSinhala}
                      </b>
                    </h2>
                  </a>
                  <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                  >
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href={`/web-frontend/faculty-of-social-work/department-of-anthropology-and-gerontology`}>
                          Home
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href={`/web-frontend/faculty-of-social-work/department-of-anthropology-and-gerontology/staff`}>
                          Staff
                        </a>
                      </li>
 
                    </ul>
                  </div>
                </nav>
    )
}