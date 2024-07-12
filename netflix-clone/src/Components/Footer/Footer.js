import React from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className='footer-icons'>
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer-data">
            <div>
              <ul>
                <li><a href="#">Audio Description</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Legal Notices</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="#">Gift Cards</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Corporate Information</a></li>
              </ul>
            </div>
            <div>
              <ul>
                <li><a href="#">Media Center</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="service_code">
              <p>service code</p>
          </div>
          <div className="copy-writer ">
            <p>&copy; 2024 Netflix, Inc.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;