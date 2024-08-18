import React from 'react';
import './Header.css';
import NewsLogo from './Images/NewsLogo.png';

const Header = () => {
  return (
    <div className='header'>
        <div className='title'>
            <div className='title-image'>
                <img src={NewsLogo} alt='News Logo'/>
            </div>
            <div className='title-text'>
                <h1>The News Flare</h1>
                <h2>Journalism  Of Courage</h2>
            </div>
        </div>
        <div className='nav'>
            <ul>
                <li>Home</li>
                <li>India</li>
                <li>Politics</li>
                <li>Opinion</li>
                <li>Sports</li>
                <li>Education</li>
                <li>Entertainment</li>
                <li>Business</li>
                <li>Lifestyle</li>
                <li>Tech</li>
                <li>Research</li>
                <li>Trend</li>
            </ul>
            <div className='butt'>
                <button className='subscribe'>Subscribe</button>
                <button className='sign'>Sign in</button>
            </div>
        </div>
    </div>
  )
}

export default Header
