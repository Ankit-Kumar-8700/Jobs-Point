import React from "react";
import "./jobsNav.css";

function JobsNav(props) {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  
  return (
    <div className="jobsNav">
    <div className="dropdown">
      <button className="dropbtn" onClick={myFunction}>
        Filter
      </button>
      <div id="myDropdown" className="dropdown-content">

        <div className="jobPostDate">
          <div className="jobNavHead">
            Date Posted
          </div>
          <div className="jobNavContent">
            <button className="jobOption selectedJobPostDate" value="all" onClick={props.handleChangeJobPostDate}>All</button>
            <button className="jobOption" value="today" onClick={props.handleChangeJobPostDate}>Past day</button>
            <button className="jobOption" value="3days" onClick={props.handleChangeJobPostDate}>Past 3 days</button>
            <button className="jobOption" value="week" onClick={props.handleChangeJobPostDate}>Past week</button>
            <button className="jobOption" value="month" onClick={props.handleChangeJobPostDate}>Past month</button>
          </div>
        </div>
        <hr />
        <div className="jobEmploymentType">
          <div className="jobNavHead">
            Employment Type
          </div>
          <div className="jobNavContent">
            <button className="jobOption selectedJobEmploymentType" value="" onClick={props.handleChangeJobEmploymentType}>All</button>
            <button className="jobOption" value="FULLTIME" onClick={props.handleChangeJobEmploymentType}>Fulltime</button>
            <button className="jobOption" value="CONTRACTOR" onClick={props.handleChangeJobEmploymentType}>Contractor</button>
            <button className="jobOption" value="PARTTIME" onClick={props.handleChangeJobEmploymentType}>Part-time</button>
            <button className="jobOption" value="INTERN" onClick={props.handleChangeJobEmploymentType}>Internship</button>
          </div>
        </div>
        <hr />
        <div className="jobRequirements">
          <div className="jobNavHead">
            Job Requirements
          </div>
          <div className="jobNavContent">
            <button className="jobOption selectedJobRequirements" value="" onClick={props.handleChangeJobRequirements}>All</button>
            <button className="jobOption" value="no_degree" onClick={props.handleChangeJobRequirements}>No degree</button>
            <button className="jobOption" value="no_experience" onClick={props.handleChangeJobRequirements}>No experience</button>
            <button className="jobOption" value="under_3_years_experience" onClick={props.handleChangeJobRequirements}>Under 3 years of experience</button>
            <button className="jobOption" value="more_than_3_years_experience" onClick={props.handleChangeJobRequirements}>3+ years of experience</button>
          </div>
        </div>
        <hr />
        <div className="jobRadius">
          <div className="jobNavHead">
            Job Radius
          </div>
          <div className="jobNavContent">
            <button className="jobOption selectedJobRadius" value="" onClick={props.handleChangeJobRadius}>Anywhere</button>
            <button className="jobOption" value="1" onClick={props.handleChangeJobRadius}>1 km</button>
            <button className="jobOption" value="5" onClick={props.handleChangeJobRadius}>5 km</button>
            <button className="jobOption" value="25" onClick={props.handleChangeJobRadius}>25 km</button>
            <button className="jobOption" value="100" onClick={props.handleChangeJobRadius}>100 km</button>
            <button className="jobOption" value="250" onClick={props.handleChangeJobRadius}>250 km</button>
            <button className="jobOption" value="600" onClick={props.handleChangeJobRadius}>600 km</button>
            <button className="jobOption" value="1000" onClick={props.handleChangeJobRadius}>1000 km</button>
            <button className="jobOption" value="5000" onClick={props.handleChangeJobRadius}>5000 km</button>
          </div>
        </div>
        <hr />
        <div className="jobWorkFromHome">
        <div className="jobNavHead">
            Work From Home only
          </div>
          <label class="rocker rocker-small">
            <input type="checkbox"  onClick={props.handleWorkFromHome}/>
            <span class="switch-left">Yes</span>
            <span class="switch-right">No</span>
          </label>
        </div>
      </div>
    </div>

    <div className="jobsSearchbar">
      <input type="text" value={props.jobSearchQuery} onChange={e => props.setJobSearchQuery(e.target.value)} />
      <button onClick={props.handleJobSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
    </div>
  );
}

export default JobsNav;