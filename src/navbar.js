import React from 'react';
import './navbar.css';
import logo from './images/logo.png';
import Contact from './components/contact';
import AboutCard from './components/aboutCard';
import AboutMe from './components/aboutMe';
import Salary from './components/salary/salary';
import Jobs from './components/jobs/jobs';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="ct" id="t1">
 <div className="ct" id="t2">
   <div className="ct" id="t3">
     <div className="ct" id="t4">
<section>  
 <ul className='Pages'>
   <a href="#t1"><li className="icon fa fa-home" id="uno"></li></a>
   <a href="#t2"><li className="icon fa fa-magnifying-glass-dollar" id="dos"></li></a>
   <a href="#t3"><li className="icon fa fa-coins" id="tres"></li></a>
   <a href="#t4"><li className="icon fa fa-circle-info" id="cuatro"></li></a>
 </ul>
  <div className="page" id="p1">
     <li><img src={logo} alt="logo.png"/><span className="title">Jobs-Point</span><br/><span className="hint">Find the job of your choice here!!...<br/>Are you looking for a job, this is 'the' website you need!<br/>
     Just put up your preferences, and get a list of your preferred jobs nearby.<br/><br/>
     Wanna try!! Give it a shot...</span></li>
     <li className='abtCon'><AboutMe/><Contact/></li>  
  </div>
  <div className="page" id="p2">
    <Jobs/>
  </div>  
  <div className="page" id="p3">
    <Salary/>
  </div>
  <div className="page" id="p4">
    <div className='p4inner'>
   <li className="icon fa fa-circle-info"></li>
   <span className="title">Website-Info</span>
   </div>
   <div className="infoCards">
    <AboutCard icon='icon fa fa-home' heading='Home' content="Welcome to my Job-Finding Website. If you are looking for a decent job ny your preferences, be sure to look for it on our website.. " />
    <AboutCard icon='icon fa fa-magnifying-glass-dollar' heading='Jobs' content='This section provides you the best suited jobs according to your costomizations. Just put up the filters and look for the job at your favourite location.' />
    <AboutCard icon='icon fa fa-coins' heading='Salary' content='Salary section provides some rough idea about what salary to expect at the workplace according to your specified preferences.' />
    <AboutCard icon='icon fa fa-circle-info' heading='Info' content='This section itself is the Info section, which provides a go-through for the website.' />
    </div>
  </div>  
	{/* <p className="credit"> Original Pen by <a href="https://codepen.io/hrtzt/">Alberto Hartzet</a></p> */}
</section>
       
     </div>
     </div>
   </div>
  </div>
    </div>
  )
}

export default Navbar
