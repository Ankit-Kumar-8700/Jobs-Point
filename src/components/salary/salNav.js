import React from 'react';
import './salNav.css';

function SalNav(props) {
  return (
    <div className='salNav'>
        <div className="salNavInput">
            <input type="text" value={props.area} onChange={e => props.setArea(e.target.value)} placeholder='Location'/>
            <input type="text" value={props.job} onChange={e => props.setJob(e.target.value)} placeholder='Job Name'/>
            <input type="number" value={props.dist} onChange={e => props.setDist(e.target.value)} placeholder='Radius (in Km)'/>
        </div>
        <button onClick={props.handleSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>
  )
}

export default SalNav
