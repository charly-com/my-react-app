import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about"> 
        <h2> Hi, My Name is Charles</h2>
        <div className="prompt">
          <p> I am a Software Engineer with a Experience in solving problem through Tech and i have a passion for learning and creating</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      
      <div className="skills"> 
        <h1> Skills</h1>
        <ol className="list">
          <li className="item"> 
            <h2> Front-End</h2>
            <span> ReactJs, HTML, CSS, NPM, MaterialUI </span>
          </li>
          <li className="item"> 
            <h2> Back-End</h2>
            <span> NodeJS, ExpressJS, MongoDB</span>
          </li>
          <li className="item"> 
            <h2> Language</h2>
            <span> Javascript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;