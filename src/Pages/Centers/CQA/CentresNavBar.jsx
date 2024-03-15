import React from "react";
import logo from "../../../images/logo.png";

export default function CentresNavBar(params) {

    const currentLocation = window.location.pathname;

    let DepartmentNameEnglish ;

    if (currentLocation.startsWith("/centres/centre-for-quality-assurance")) {
      DepartmentNameEnglish = "Centre for Quality Assurance ";
    } else {
        
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
                  <a href={`${currentLocation}`} className="navbar-brand nav-brand2">
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
                  <a href={`${currentLocation}`} class="navbar-brand nav-brand2">
                    <h2 style={{ fontSize: "15px" }}>
                      <b>
                        
                        {DepartmentNameEnglish} 
                      </b>
                    </h2>
                    <p style={{ fontSize: "12px" , marginBottom: '0rem'}}>National Institute of Social Development</p>
                  </a>
                  <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                  >
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href='/centres/centre-for-quality-assurance'>
                          Home
                        </a>
                      </li>

                      
 
                    </ul>
                  </div>
                </nav>
    )
}