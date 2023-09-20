import React from 'react';
import './jobCard.css';

function JobCard(props) {
  return (
    <div className='jobMini'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,256L48,229.3C96,203,192,149,288,117.3C384,85,480,75,576,80C672,85,768,107,864,133.3C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="jobMiniDetails">
        <div className="employer">
          {props.employer_logo && <img src={props.employer_logo} alt="logo"/>}
          <div>
          {props.employer_website && <a href={props.employer_website} target="_blank" rel="noreferrer noopener"><b>{props.employer_name}</b></a>}
          {!props.employer_website && <p><b>{props.employer_name}</b></p>}
          </div>
        </div>
        <hr/>
        <div className="location">
          <p>Location : </p>
          {props.job_city && props.job_country && <p>{props.job_city}, {props.job_country}</p>}
          {!props.job_city && props.job_country && <p>{props.job_country}</p>}
          {props.job_city && !props.job_country && <p>{props.job_city}</p>}
          {!props.job_city && !props.job_country && <p>Unknown</p>}
        </div>
        {props.job_employment_type && <div><p>Type : {props.job_employment_type}</p></div>}
        <div className="salary">
          <p>Salary : </p>
          {props.job_min_salary && props.job_max_salary && <p>{props.job_min_salary} - {props.job_max_salary}</p>}
          {!props.job_min_salary && props.job_max_salary && <p>{props.job_max_salary}</p>}
          {props.job_min_salary && !props.job_max_salary && <p>{props.job_min_salary}</p>}
          {!props.job_min_salary && !props.job_max_salary && <p>Unknown</p>}

          {props.job_salary_currency && props.job_salary_period && <p> {props.job_salary_currency}/{props.job_salary_period}</p>}
          {props.job_salary_currency && !props.job_salary_period && <p> {props.job_salary_currency}</p>}
        </div>
        <div className="jobExpiry">
          <p>Valid till : </p>
          {props.job_offer_expiration_datetime_utc && <p>{props.job_offer_expiration_datetime_utc.substr(0,10)}</p>}
          {!props.job_offer_expiration_datetime_utc && <p>Unknown</p>}
        </div>
        <div className="jobPublisher">
          {props.job_publisher && <p>-by {props.job_publisher}</p>}
        </div>
        <hr />
        <div className="jobCardButtons">
          <button><a href={props.job_apply_link} target="_blank" rel="noreferrer noopener">Apply</a></button>
          <button value={props.job_id} onClick={props.handleJobMore}>View More</button>
        </div>
      </div>
    </div>
  )
}

export default JobCard
