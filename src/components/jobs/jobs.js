import React,{useState} from 'react';
import './jobs.css';
import JobsNav from './jobsNav';
import JobCard from './jobCard';
import Loader from '../loader/loader';
import JobDesc from './jobDesc';

function Jobs() {

  let [responseJobData, setResponseJobData] = useState([]);
  let [loadJob,setLoadJob]=useState(false);

  let [jobPostDate,setJobPostDate]=useState("all");
  let [jobEmploymentType,setJobEmploymentType]=useState("");
  let [jobRequirements,setJobRequirements]=useState("");
  let [jobRadius,setJobRadius]=useState("");
  let [jobSearchQuery,setJobSearchQuery]=useState("");
  let [workFromHome,setWorkFromHome]=useState("false");

  let [jobDesc,setJobDesc]=useState([]);
  let [loadJobDesc,setLoadJobDesc]=useState(false);


  let handleChangeJobPostDate = (e) => {
    document.getElementsByClassName("selectedJobPostDate")[0].classList.toggle("selectedJobPostDate");
    e.target.classList.toggle("selectedJobPostDate");
    setJobPostDate(e.target.value);
  };

  let handleChangeJobEmploymentType = (e) => {
    document.getElementsByClassName("selectedJobEmploymentType")[0].classList.toggle("selectedJobEmploymentType");
    e.target.classList.toggle("selectedJobEmploymentType");
    setJobEmploymentType(e.target.value);
  };

  let handleChangeJobRequirements = (e) => {
    document.getElementsByClassName("selectedJobRequirements")[0].classList.toggle("selectedJobRequirements");
    e.target.classList.toggle("selectedJobRequirements");
    setJobRequirements(e.target.value);
  };

  let handleChangeJobRadius = (e) => {
    document.getElementsByClassName("selectedJobRadius")[0].classList.toggle("selectedJobRadius");
    e.target.classList.toggle("selectedJobRadius");
    setJobRadius(e.target.value);
  };

  let handleWorkFromHome=(()=>{
    if(workFromHome==="false"){
      setWorkFromHome("true");
    } else {
      setWorkFromHome("false");
    }
  })



  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_JOBS,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  const fetchData = React.useCallback((jobEmploymentType,jobPostDate,jobRadius,jobRequirements,jobSearchQuery,workFromHome) => {
    let tempJobQuery=jobSearchQuery
    tempJobQuery=tempJobQuery.replaceAll(' ',"%20");
    tempJobQuery=tempJobQuery.replaceAll(',',"%2C");

    let jobFetchLink=`https://jsearch.p.rapidapi.com/search?query=${tempJobQuery}&page=1&num_pages=1&date_posted=${jobPostDate}&remote_jobs_only=${workFromHome}`;

    if(jobEmploymentType.length>0){
      jobFetchLink=jobFetchLink+`&employment_types=${jobEmploymentType}`;
    }

    if(jobRequirements.length>0){
      jobFetchLink=jobFetchLink+`&job_requirements=${jobRequirements}`;
    }

    if(jobRadius.length>0){
      jobFetchLink=jobFetchLink+`&radius=${jobRadius}`;
    }

    fetch(jobFetchLink, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            setResponseJobData(response.data); 
            setLoadJob(false);
        })
        .catch(err =>console.error(err));
  }, [])

  const handleJobSearch=()=>{
    if (jobSearchQuery.length<=0){
        alert("Kindly enter correct details:\n *Search box can't be empty");
    }
    else {
      let pattern = /^[a-zA-Z0-9.,-_ ]+$/;
      if(pattern.test(jobSearchQuery)){
        setResponseJobData([]);
        setLoadJob(true);
        fetchData(jobEmploymentType,jobPostDate,jobRadius,jobRequirements,jobSearchQuery,workFromHome);
      } else {
        alert("Search box can only contain following characters:\n *A-Z, a-z, 0-9\n *Special characters (.,-_)\n *Space ( )");
      }
    }
    // console.log(jobPostDate);
    // console.log(jobEmploymentType);
    // console.log(jobRequirements);
    // console.log(jobRadius);
    // console.log(workFromHome);
    // console.log(jobSearchQuery);
  }


  const fetchJobDesc = React.useCallback((tempJobId) => {
    let jobFetchLink=`https://jsearch.p.rapidapi.com/job-details?job_id=${tempJobId}`;
    // console.log(jobFetchLink)
    // setJobDesc([]);
    fetch(jobFetchLink, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response.data);
            setJobDesc(response.data);
        })
        .catch(err =>console.error(err));
  }, [])

  let handleJobMore=(e)=>{
    setJobDesc([]);
    if(document.getElementById("jobDescOuter").classList.contains("dispNone")){
    document.getElementById("jobDescOuter").classList.remove("dispNone");
    }
      let tempJobId=e.target.value;
      tempJobId=tempJobId.replaceAll('%',"%25");
      tempJobId=tempJobId.replaceAll(' ',"%20");
      tempJobId=tempJobId.replaceAll(',',"%2C");
      tempJobId=tempJobId.replaceAll('=',"%3D");
      document.getElementById("p2").style.overflowY="hidden";
      // console.log(tempJobId)
      fetchJobDesc(tempJobId);
  }
  let handleJobMoreOff=()=>{
    setJobDesc([]);
    document.getElementById("p2").style.overflowY="scroll";
    document.getElementById("jobDescOuter").classList.add("dispNone");
  }

  return (
    <div className='jobs'>
      <div id="jobDescOuter" className="jobDescOuter dispNone">
      <JobDesc jobDesc={jobDesc[0]} handleJobMoreOff={handleJobMoreOff} />
      </div>
      <JobsNav handleChangeJobPostDate={handleChangeJobPostDate} handleChangeJobEmploymentType={handleChangeJobEmploymentType} handleChangeJobRequirements={handleChangeJobRequirements} handleChangeJobRadius={handleChangeJobRadius} handleWorkFromHome={handleWorkFromHome} jobSearchQuery={jobSearchQuery} setJobSearchQuery={setJobSearchQuery} handleJobSearch={handleJobSearch} />

      {loadJob && <div className="load"><Loader/></div>}
      {!loadJob && responseJobData.length===0 && <div className='noDataHandle'><div><i className="fa-solid fa-ban"></i></div><div>Nothing To Show</div></div>}

      {/* {console.log(responseJobData)} */}

      <div className="allJobs">
      {responseJobData.map((article)=>{
            return <div className='jobMiniOuter' key={article.job_id}>
              <JobCard handleJobMore={handleJobMore}
                employer_logo={article.employer_logo}
                employer_name={article.employer_name}
                employer_website={article.employer_website}
                job_apply_link={article.job_apply_link}
                job_city={article.job_city}
                job_country={article.job_country}
                job_employment_type={article.job_employment_type}
                job_id={article.job_id}
                job_title={article.job_title}
                job_offer_expiration_datetime_utc={article.job_offer_expiration_datetime_utc}
                job_min_salary={article.job_min_salary}
                job_max_salary={article.job_max_salary}
                job_salary_currency={article.job_salary_currency}
                job_salary_period={article.job_salary_period}
                job_publisher={article.job_publisher}
              />
            </div>
          })}
      </div>
    </div>
  )
}

export default Jobs
