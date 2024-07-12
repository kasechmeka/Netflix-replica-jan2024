import React from 'react';
import './Header.css';
import NetflixLogo from "../../assets/images/Netflix_Logo_PMS.png" ;
import AllLinks from "../AllLinks/AllLink";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div className='logo-nav'>
          <div className="logo">
            <a href="/">
            <img src={NetflixLogo} alt="Netflix" />
            </a>
          </div>
          <nav className='nav_black'>
          <ul>
          < AllLinks linkName = "Netflix" linkUrl ="/#/"/> 
          < AllLinks linkName = "Home" linkUrl ="/#/"/> 
          < AllLinks linkName = "TV Shows" linkUrl ="/#/"/> 
          < AllLinks linkName = "Movies" linkUrl ="/#/"/> 
          < AllLinks linkName = "Latest" linkUrl ="/#/"/> 
          < AllLinks linkName = "Browse" linkUrl ="/#/"/> 
          < AllLinks linkName = "My List" linkUrl ="/#/"/> 
          < AllLinks linkName = "Browse by Languages" linkUrl ="/#/"/> 
          </ul>
          </nav>
        </div>
        
        <div className="user-actions">
          <li><SearchIcon/></li>
          <li><NotificationsNoneIcon/></li>
          <li><AccountBoxIcon/></li>
          <li><ArrowDropDownIcon/></li>
        </div>
      </div>
    </header>
  );
};

export default Header;