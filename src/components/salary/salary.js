import React,{useState} from 'react';
import './salary.css';
import SalCard from './salCard';
import SalNav from './salNav';
import Loader from '../loader/loader';

function Salary() {

  let [responseData, setResponseData] = useState([]);
  let [load,setLoad]=useState(false);

  let [area,setArea]=useState("");
  let [dist,setDist]=useState(0);
  let [job,setJob]=useState("");

  const handleSearch=()=>{
    if (area.length<=0 || job.length<=0 || !dist || dist<=0 || dist>10000){
        alert("Kindly enter correct details:\n *Area can't be empty\n *Job can't be empty\n *Distance must be between 1 to 10000 kms")
    }
    else {
        setResponseData([]);
        setLoad(true);
        fetchData(area,job,dist);
    }
    // console.log(area);
    // console.log(dist);
    // console.log(job);
  }

  const options = {
  	method: 'GET',
  	headers: {
  		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_JOBS,
  		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  	}
  };

  const fetchData = React.useCallback((area,job,dist) => {
    fetch(`https://jsearch.p.rapidapi.com/estimated-salary?job_title=${job}&location=${area}&radius=${dist}`, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            setResponseData(response.data); 
            setLoad(false);
        })
        .catch(err =>console.error(err));
  }, [])

  return (
    <div className='salary'>
      <SalNav setArea={setArea} setJob={setJob} setDist={setDist} handleSearch={handleSearch} area={area} job={job} dist={dist} />
      {console.log(responseData)}

      {load && <div className="load"><Loader/></div>}
      {!load && responseData.length===0 && <div className='noDataHandle'><div><i className="fa-solid fa-ban"></i></div><div>Nothing To Show</div></div>}

      <div className="accordion">
      {responseData.map((article)=>{
            return <div key={article.publisher_link}>
            <SalCard 
              job_title={article.job_title} 
              location={article.location}
              max_salary={article.max_salary}
              median_salary={article.median_salary}
              min_salary={article.min_salary}
              publisher_link={article.publisher_link}
              publisher_name={article.publisher_name}
              salary_currency={article.salary_currency}
              salary_period={article.salary_period}
            />
            </div>
          })}
      </div>

    </div>
  )
}

export default Salary
