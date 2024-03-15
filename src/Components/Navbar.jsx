import React from "react";
import logo from "../images/logo.png";

export default function Navbar(params) {
    return (
        <nav class="navbar navbar2 navbar-toggleable-md navbar-light bg-faded">
                  <button
                    class="navbar-toggler navbar-toggler2 navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                  >
                    <span class="icon-menu"></span>
                  </button>
                  <a href="/" className="navbar-brand nav-brand2">
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
                  <a href="/" class="navbar-brand nav-brand2">
                    <h2 style={{ fontSize: "15px" }}>
                      <b>
                        National Institute of <br />
                        Social Development
                      </b>
                    </h2>
                  </a>
                  <div
                    class="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                  >
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          href="/about"
                        >
                          About
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="/about">
                              The Institute
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/boards">
                              Boards
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/history-of-nisd">
                              Our History
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item dropdown">
                        <a
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                          href="/undergraduate-degrees"
                        >
                          Courses
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="/undergraduate-degrees">
                              Undergraduate Degrees
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/postgraduate-degrees">
                              Postgraduate Degrees
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/higher-diploma-courses">
                              Higher Diploma
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/diploma-courses">
                              Diploma
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/certificate-courses">
                              Certificates
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/upcoming-courses">
                              Upcoming Courses
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li class="nav-item dropdown">
                        <a
                          href="academics.html"
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                        >
                          Faculties{" "}
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu ">
                          

                          <li class="nav-item dropdown">
                          <a class="dropdown-item dropdown-toggle" 
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/faculty-of-social-work">Faculty of Social Work & Social Sciences</a>
                         
                          <ul class="dropdown-menu dropdown-menu1">
                          <li>
                            <a class="dropdown-item" href="/faculty-of-social-work/department-of-social-work">
                            Department of Social Work
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/faculty-of-social-work/department-of-sociology">
                            Department of Sociology
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/faculty-of-social-work/department-of-psychology-and-counselling">
                            Department of Psychology and Counselling
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/faculty-of-social-work/department-of-anthropology-and-gerontology">
                            Department of Anthropology and Gerontology
                            </a>
                          </li>
                        </ul>
                      </li>
                        </ul>
                      </li>

                      <li class="nav-item dropdown">
                        <a
                          href="academics.html"
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                        >
                          Centres & Units
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li class="dropdown">
                            <a
                              class="dropdown-item "
                              
                              href="/centres/centre-for-quality-assurance"
                            >
                              Centre for Quality Assurance
                            </a>
                            
                          </li>

                          <li class="dropdown">
                            <a
                              class="dropdown-item "
                              
                              href="/centres/curriculum-development-committee"
                            >
                              Curriculum Development Committee
                            </a>
                            
                          </li>

                          <li class="dropdown">
                            <a
                              class="dropdown-item "
                              
                              href="/centres/student-welfare-centre"
                            >
                              Student Welfare Centre
                            </a>
                            
                          </li>
                          
                        </ul>
                      </li>

                      <li class="nav-item dropdown">
                        <a
                          href="research.html"
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                        >
                          Research
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="/research">
                              Research
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/journals">
                              Journals
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="/conference">
                              Conference
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          href="/students"
                          class="dropdown-toggle nav-link"
                          data-toggle="dropdown"
                        >
                          Students
                          <span class="glyphicon glyphicon-chevron-down pull-right"></span>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="/students">
                              Students
                            </a>
                          </li>


                          <li class="nav-item dropdown">
                          <a class="dropdown-item dropdown-toggle" 
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/">Societies</a>
                         
                          <ul class="dropdown-menu dropdown-menu1">
                          <li>
                            <a class="dropdown-item" href="societies/zero-plastic-community">
                              Zero Plastic Community
                            </a>
                          </li>
                        </ul>
                      </li>
                          
                          <li>
                            <a class="dropdown-item" href="/gallery">
                              Gallery
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/downloads">
                        Downloads
                        </a>
                        
                      </li>
                      
                    </ul>
                  </div>
                </nav>
    )
}