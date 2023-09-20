import React from "react";
import "./salCard.css";

function SalCard(props) {
  return (
    <div className="salCard">
      <div className="salCardMain">
        <div className="salCardInner">
          <div>
            {props.job_title}
          </div>
          <hr />
          <div>
            <p>Location : </p>
            {props.location && <p>{props.location}</p>}
            {!props.location && <p>Unknown</p>}
          </div>
          <div className="salary">
            <p>Salary : </p>
            {props.min_salary && props.max_salary && <p>{props.min_salary} - {props.max_salary}</p>}
            {!props.min_salary && props.max_salary && <p>{props.max_salary}</p>}
            {props.min_salary && !props.max_salary && <p>{props.min_salary}</p>}
            {!props.min_salary && !props.max_salary && <p>Unknown</p>}

            {props.salary_currency && props.salary_period && <p> {props.salary_currency}/{props.salary_period}</p>}
            {props.salary_currency && !props.salary_period && <p> {props.salary_currency}</p>}
          </div>
          <div className="median_salary">
            <p>Median Salary : </p>
            {props.median_salary && <p>{props.median_salary}</p>}
            {!props.median_salary && <p>Unknown</p>}

            {props.salary_currency && props.salary_period && <p> {props.salary_currency}/{props.salary_period}</p>}
            {props.salary_currency && !props.salary_period && <p> {props.salary_currency}</p>}
          </div>
          <hr />
          <div className="publisher">
            <p>-by </p>
            {props.publisher_link && <a href={props.publisher_link} target="_blank" rel="noreferrer noopener"><b>{props.publisher_name}</b></a>}
            {!props.publisher_link && <p><b>{props.publisher_name}</b></p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalCard;
