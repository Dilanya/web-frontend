import React from "react";
import bg from "../images/chart_bg.jpg";
import dg from "../images/admission-detail/dg.jpg"

export default function DG() {
  
  return (
    <div >
      <div class="about_bg" style={{ backgroundImage: `url(${bg})` , backgroundAttachment: 'fixed'}}>
      <div
        class="about_container"
        style=
          {{height: '5rem',
          display: 'flex',
          alignContent: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'}}
        
      ></div>
        
          <div class="col-md-12">
            <h1>Director General</h1>
          
        </div>
      </div>

      <div class="speech">
<div class="container">
<h2>Dr. Raveendra Withanachchi</h2>
<div class="row">
<div class="col-md-8">
<p>Continually seize worldwide sources with quality ROI. Synergistically impact flexible vortals rather than proactive process improvements. Assertively maximize e-business convergence via standardized solutions. Professionally whiteboard vertical data through backend customer service. Compellingly leverage existing enterprise schemas through fully researched sources.</p>
<p>Conveniently aggregate ubiquitous quality vectors via corporate infomediaries. Intrinsicly monetize impactful value with multidisciplinary alignments. Continually transform standardized.</p>

</div>
<div class="col-md-4">
<img src={dg} class="img-fluid" alt="DG-NISD"/>
<p class="text-center"><strong>Dr. Raveendra Withanachchi</strong>
<br></br>
<span>Director General - NISD</span><br/>
<span>B.A. (Hons), Attorney-at-Law, PhD (USJ)</span><br/>
<span>Senior Lecturer, Department of Anthropology, University Of Sri Jayewardenepura.</span>
</p>
</div>
</div>
</div>
</div>
    </div>
  );
}

