import React from "react";

import facebook from "../images/facebook.png";
import linkedin from "../images/linkedin.png";

import News from "../Pages/News";
import Home from "../Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsSingle from "./SingleNews";
import Events from "../Pages/Events";
import EventSingle from "./SingleEvent";
import About from "../Pages/About";
import Boards from "../Pages/Boards";
import GoverningCouncil from "../Pages/GoverningCouncil";
import AAB from "../Pages/AAB";
import BGS from "../Pages/BGS";
import DG from "../Pages/DG";
import ADG from "../Pages/ADG";
import History from "../Pages/History";
import Undergraduate from "../Pages/Undergraduate";
import Postgraduate from "../Pages/Postgraduate";
import HigherDip from "../Pages/HigherDiploma";
import Diploma from "../Pages/Diploma";
import Certificates from "../Pages/Certificates";
import UpcomingCourses from "../Pages/UpcomingCorses";
import CoursesSingle from "./SingleCourses";
import Journals from "../Pages/Journel";
import Conference from "../Pages/Conference";
import Research from "../Pages/Research";
import Library from "../Pages/Library";
import International from "../Pages/International";
import Alumni from "../Pages/Alumni";
import Students from "../Pages/Students";
import StaffProfile from "./StaffProfile";
import Navbar from "./Navbar.jsx";


//fac
import Faculty from "../Pages/Faculty/Faculty.jsx";

//departments
import Department1 from "../Pages/Departments/DepOne/Department.jsx";
import Department1Staff from "../Pages/Departments/DepOne/Staff.jsx";
import DepartmentNavBarOne from "../Pages/Departments/DepOne/DepartmentNavBar.jsx";

import Department2 from "../Pages/Departments/DepTwo/Department.jsx";
import Department2Staff from "../Pages/Departments/DepTwo/Staff.jsx";
import Department2NavBar from "../Pages/Departments/DepTwo/DepartmentNavBar.jsx";

import Department3 from "../Pages/Departments/DepThree/Department.jsx";
import Department3Staff from "../Pages/Departments/DepThree/Staff.jsx";
import Department3NavBar from "../Pages/Departments/DepThree/DepartmentNavBar.jsx";

import Department4 from "../Pages/Departments/DepFour/Department.jsx";
import Department4Staff from "../Pages/Departments/DepFour/Staff.jsx";
import Department4NavBar from "../Pages/Departments/DepFour/DepartmentNavBar.jsx";

//centers
import CQANavBar from "../Pages/Centers/CQA/CentresNavBar.jsx";
import CQA from "../Pages/Centers/CQA/CQA.jsx"

import StudentWelfareNavBar from "../Pages/Centers/StudentWelfare/CentresNavBar.jsx";
import StudentWelfare from "../Pages/Centers/StudentWelfare/CQA.jsx"

//societies
import ZeroPlastic from "../Pages/Societies/ZeroPlastic.jsx";

class Header extends React.Component {

  
  render() {

    const currentPage = window.location.pathname;
    let NavbarType;

    if (currentPage.startsWith("/faculty-of-social-work/department-of-social-work")) {
      NavbarType = <DepartmentNavBarOne/>;
    }else if (currentPage.startsWith("/faculty-of-social-work/department-of-sociology")) {
      NavbarType = <Department2NavBar/>;
    }else if (currentPage.startsWith("/faculty-of-social-work/department-of-psychology-and-counselling")) {
      NavbarType = <Department3NavBar/>;
    }else if (currentPage.startsWith("/faculty-of-social-work/department-of-anthropology-and-gerontology")) {
      NavbarType = <Department4NavBar/>;
    }else if  (currentPage.startsWith("/centres/centre-for-quality-assurance")) {
      NavbarType = <CQANavBar/>;  
    }else if  (currentPage.startsWith("/centres/student-welfare-centre")) {
      NavbarType = <StudentWelfareNavBar/>;  
    }
     else {
      NavbarType = <Navbar/>;
    }




      return (
      <div>
        <div
          id="bottom-header"
          class="header-topbar"
          style={{ backgroundColor: "rgb(22, 11, 102)", fontSize: "20px" }}
        >
          <div class="container ">
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-md-8">
                <div class="header-top_address">
                  <div class="header-top_list">
                    <a class="nav-link" href="/library">
                      Library<span class="sr-only">(current)</span>
                    </a>
                  </div>

                  <div class="header-top_list">
                    <a class="nav-link" href="/alumni">
                      Alumni<span class="sr-only">(current)</span>
                    </a>
                  </div>
                  <div class="header-top_list">
                    <a class="nav-link" href="/international">
                      International<span class="sr-only">(current)</span>
                    </a>
                  </div>
                  <div class="header-top_list">
                    <a class="nav-link" href="http://lms.nisd.ac.lk/">
                      LMS<span class="sr-only">(current)</span>
                    </a>
                  </div>
                  <div class="header-top_list">
                    <a class="nav-link" href="/contacts">
                      Contact Us<span class="sr-only">(current)</span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="col-xs-12 col-sm-4 col-md-4"
                style={{ flexDirection: "row", width: "600px" }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <a href="">
                    <img
                      src={facebook}
                      alt="fb"
                      className="socialmedia"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginTop: "8px",
                        marginRight: "14px",
                      }}
                    />{" "}
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="bottom-header"
          data-toggle="affix"
          class="affix"
          style={{ backgroundColor: "white" }}
        >
          <div class="container nav-menu2">
            <div class="row">
              <div class="col-md-12">
                {NavbarType}
              </div>
            </div>
          </div>
        </div>

        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/news" Component={News} />
            <Route path="/news/:id/:title" element={<NewsSingle />} />
            <Route path="/events" Component={Events} />
            <Route path="/events/:id/:title" element={<EventSingle />} />
            <Route path="/about" Component={About} />
            <Route path="/boards" Component={Boards} />
            <Route path="/governing-council" Component={GoverningCouncil} />
            <Route path="/academic-affairs-board" Component={AAB} />
            <Route path="/board-of-graduate-studies" Component={BGS} />
            <Route path="/director-general" Component={DG} />
            <Route path="/additional-director-general" Component={ADG} />
            <Route path="/history-of-nisd" Component={History} />
            <Route path="/undergraduate-degrees" Component={Undergraduate} />
            <Route path="/postgraduate-degrees" Component={Postgraduate} />
            <Route path="/higher-diploma-courses" Component={HigherDip} />
            <Route path="/diploma-courses" Component={Diploma} />
            <Route path="/certificate-courses" Component={Certificates} />
            <Route path="/upcoming-courses" Component={UpcomingCourses} />
            <Route path="/course-detail" Component={CoursesSingle} />
            <Route path="/research" Component={Research} />
            <Route path="/conference" Component={Conference} />
            <Route path="/journals" Component={Journals} />
            <Route path="/library" Component={Library} />
            <Route path="/international" Component={International} />
            <Route path="/alumni" Component={Alumni} />
            <Route path="/students" Component={Students} />
            <Route path="/staff-profile" Component={StaffProfile} />

            <Route path="/faculty-of-social-work" Component={Faculty} />

            
            <Route path="/faculty-of-social-work/department-of-social-work" Component={Department1} />
            <Route path="/faculty-of-social-work/department-of-social-work/staff" Component={Department1Staff} />
            <Route path="/faculty-of-social-work/department-of-sociology" Component={Department2} />
            <Route path="/faculty-of-social-work/department-of-sociology/staff" Component={Department2Staff} />
            <Route path="/faculty-of-social-work/department-of-psychology-and-counselling" Component={Department3} />
            <Route path="/faculty-of-social-work/department-of-psychology-and-counselling/staff" Component={Department3Staff} />
            <Route path="/faculty-of-social-work/department-of-anthropology-and-gerontology" Component={Department4} />
            <Route path="/faculty-of-social-work/department-of-anthropology-and-gerontology/staff" Component={Department4Staff} />
            
            <Route path="/centres/centre-for-quality-assurance" Component={CQA} />
            <Route path="/centres/student-welfare-centre" Component={StudentWelfare} />
            


            <Route path="societies/zero-plastic-community" Component={ZeroPlastic} />
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default Header;
