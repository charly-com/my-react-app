import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <LinkedInIcon />
            <FacebookIcon />
            <TwitterIcon />
            <GitHubIcon />
            <EmailIcon />
        </div>
        <p> &copy: 2022 Chijuka, Charles Uche</p>
    </div>
  )
}

export default Footer;