import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateEndpoint } from "../Api.js";
import img from "../images/our-teachers_01.jpg" 

import '../css/bootstrap.min.css'

import '../css/style.css';

export default function StaffProfile() {
    
 return (
    <section>
      <div class="container">
      <div class="teachers-single">
<div class="container">
<div class="row">
<div class="col-md-4">
<div class="teachers-img_block">
<img src={img} class="img-fluid" alt="#"/>
<div class="teachers-title_block">
<h4><strong>Melissa Baker</strong></h4>
<h6>MBA, PhD</h6>
<ul>
<li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
<li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
<li><a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
</ul>
</div>
</div>
</div>
<div class="col-md-8">
<div class="row">
<div class="col-md-12">
<div class="teacher-profile_block qualification_detaile">
<h4>Professional Profile</h4>
<ul>
<li><span>*</span>Nanny with over 5+ years of experiance providing exeptional care to children aged 2 to 20.</li>
<li><span>*</span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</li>
<li><span>*</span>It is a long established fact that a reader will be distracted by the readable</li>
<li><span>*</span>Contrary to popular belief, Lorem Ipsum is not simply random text. </li>
<li><span>*</span>If you are going to use a passage of Lorem Ipsum</li>
</ul>

</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="teacher-profile_block qualification_detaile">
<h4 class="mt-4">Professional Experiance</h4>
<div class="row">
<div class="col-md-6">
<div class="personal">
<h6><strong>The Brown family</strong>(Ny Brooklyn)</h6>
<h6><i>Lives in Nanny</i></h6>
</div>
</div>
<div class="col-md-6">
<div class="experiance">
<h6><strong>New york,Ny</strong></h6>
<h6><i>September 2014-Present</i></h6>
</div>
</div>
</div>
<hr/>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="teacher-profile_block qualification_detaile">
<ul>
<li><span>*</span>Care for two boys, aged 10 and 20</li>
<li><span>*</span>There are many variations of passages of Lorem</li>
<li><span>*</span>Contrary to popular belief, Lorem Ipsum is not simply random</li>
<li><span>*</span>Many desktop publishing packages and web page editors now</li>
<li><span>*</span>If you are going to use a passage of Lorem Ipsum</li>
</ul>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="teacher-profile_block qualification_detaile">
<h4 class="mt-4">Education</h4>
<div class="personal">
<h6><strong>Bluen Ridge Community College, Weyers Cave, VA</strong></h6>
<h6><i>Syllabus : Economics, Marketing & Finance</i></h6>
<hr/>
<ul>
<li><span>*</span>GPA:3.5/4.0</li>
</ul>
</div>
</div>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="teacher-profile_block qualification_detaile">
<h4 class="mt-4">Additional Skills</h4>
<div class="personal">
<ul>
<li><span>*</span>New York Drivers License</li>
<li><span>*</span>Various versions have evolved over the years</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
        </div> <br/>
    </section>
  );
}
