import React from "react";
import "./jobDesc.css";
import Loader from "../loader/loader";

function JobDesc(props) {
  return (
    // <div id="jobDescOuter" className="jobDescOuter dispNone">
      <div className="jobDesc">
        {!props.jobDesc && (
          <div className="load">
            <Loader />
          </div>
        )}
        {/* {console.log(props.jobDesc)} */}
          {props.jobDesc && <div>
        {props.jobDesc.employer_logo && (
          <img src={props.jobDesc.employer_logo} alt="logo" />
        )}
        {props.jobDesc.employer_name &&<div className="jobDescHead">{props.jobDesc.employer_name}</div>}
        {props.jobDesc.employer_company_type && <div className="part">
          <div className="topic">Company Type:</div>
          <div className="ans">{props.jobDesc.employer_company_type}</div>
        </div>}
        {props.jobDesc.job_apply_quality_score && <div className="part">
          <div className="topic">Quality Score:</div>
          <div className="ans">{props.jobDesc.job_apply_quality_score}</div>
        </div>}
        <div className="part">
          <div className="topic">Direct Application:</div>
          <div className="ans">{props.jobDesc.job_apply_is_direct?"Yes":"No"}</div>
        </div>
        <div className="part">
          <div className="topic">Location:</div>
          <div className="ans">{props.jobDesc.job_city}, {props.jobDesc.job_country}</div>
        </div>
        
        {props.jobDesc.job_employment_type &&<div className="part">
          <div className="topic">Work Schedule:</div>
          <div className="ans">{props.jobDesc.job_employment_type}</div>
        </div>}
        <div className="part">
          <div className="topic">Work From Home:</div>
          <div className="ans">{props.jobDesc.job_is_remote?"Yes":"No"}</div>
        </div>
        <div className="part">
          <div className="topic">Salary:</div>
          <div className="ans">{props.jobDesc.job_min_salary}-{props.jobDesc.job_max_salary} ({props.jobDesc.job_salary_currency}) / {props.jobDesc.job_salary_period}</div>
        </div>
        <div className="btnSet">
        {props.jobDesc.job_google_link && <a href={props.jobDesc.job_google_link}><button>Google</button></a>}
        {props.jobDesc.job_apply_link && <a href={props.jobDesc.job_apply_link}><button>Apply</button></a>}
        </div>
        {props.jobDesc.job_offer_expiration_datetime_utc && <div>
            <hr />
          <div className="part">
          <div className="topic">
            Expires on:</div>
          <div className="ans">{props.jobDesc.job_offer_expiration_datetime_utc.slice(0,10)}</div>
          </div>
        </div>}
        {props.jobDesc.job_benefits && props.jobDesc.job_benefits.length>0 && <div className="btnSet">
          <hr />
        {props.jobDesc.job_benefits.map((article)=>{
            return <div className='review' key={article}>
                <button>
                  {article}
                </button>
            </div>
          })}
        </div>}
        {console.log(props.jobDesc)}
          <hr />
        <div className="part">
          <div className="job_descciption">{props.jobDesc.job_description}</div>
        </div>

        {props.jobDesc.employer_reviews && props.jobDesc.employer_reviews.length>0 && <div className="reviews">
          <hr />
          Reviews
          <div className="innerReviews">
          {props.jobDesc.employer_reviews.map((article)=>{
            return <div className='review' key={article.publisher}>
              {article.reviews_link && <a href={article.reviews_link} target="_blank" rel="noreferrer noopener">
                <button>
                  <div className="name">{article.publisher}</div>
                  <div className="score"><div className="topic">Score:</div>
                  <div className="ans">{article.score}</div></div>
                  <div className="count"><div className="topic">Count:</div>
                  <div className="ans">{article.review_count}</div></div>
                </button>
              </a>}

              {!article.reviews_link && 
                <button>
                  <div className="name">{article.publisher}</div>
                  <div className="score"><div className="topic">Score:</div>
                  <div className="ans">{article.score}</div></div>
                  <div className="count"><div className="topic">Count:</div>
                  <div className="ans">{article.review_count}</div></div>
                </button>}
            </div>
          })}
          </div>
        </div>}

        {props.jobDesc.job_highlights && props.jobDesc.job_highlights.Benefits && <div className="benefits">
          <hr />
          Benefits :
          <ul>
          {props.jobDesc.job_highlights.Benefits.map((article)=>{
            return <div className='benefit' key={article}>
              {article}
            </div>
          })}
          </ul>
        </div>}

        </div>
}
        <button className="closeButton" onClick={props.handleJobMoreOff}>Close</button>
      </div>
    // </div>
  );
}

export default JobDesc;
