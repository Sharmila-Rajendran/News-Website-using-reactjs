import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='Foot'>
      <div className='title-foot'>
        <h2>The News Flare</h2>
      </div>
      <h3>Top Categories</h3>
      <div className='divisions'>
        <ul className='list1'>
            <li>Explained News</li>
            <li>Delhi News</li>
            <li>Health News</li>
            <li>Latest News</li>
            <li>Mobile & Tabs</li>
        </ul>
        <ul className='list2'>
            <li>Political Pulse</li>
            <li>Pune News</li>
            <li>India News</li>
            <li>Cricket</li>
            <li>Food & Wine</li>
        </ul>
        <ul className='list3'>
            <li>Latest Opinion</li>
            <li>Bangalore News</li>
            <li>Sports News</li>
            <li>Tech Reviews</li>
            <li>Elections 2024</li>
        </ul>
        <ul className='list4'>
            <li>Mumbai News</li>
            <li>Bollywood News</li>
            <li>Lifestyle News</li>
            <li>Gadgets</li>
            <li>Fitness</li>
        </ul>
      </div>
      <h3>Trending News</h3>
      <div className='trending'> 
        <ul>
            <li>Latest News</li>
            <li>Entertainment News</li>
            <li>Why Subscribe Indian Express</li>
            <li>Income Tax Calculator</li>
        </ul>
        <ul>
            <li>Health And Wellness</li>
            <li>Trending News</li>
            <li>Buy Digital Premium</li>
            <li>Stock Market</li>
        </ul>
        <ul>
            <li>Education News</li>
            <li>Political News</li>
            <li>Subscribe To The Indian Express</li>
        </ul>
        <ul>
            <li>Buy All-Access Plan</li>
            <li>Business News</li>
            <li>Indian Express Subscription UPSC Offer</li>
        </ul>
      </div>
      <div className='footer-foot'>
        <h3>Subscribe to Our Newsletter</h3>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </div>
      <div className='socialMedia'>
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
      <div className='about'>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Advertise with Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div className='copyright'>
        <p>&copy; Copyright 2020</p>
      </div>
      <marquee>Get updates with all the trending news</marquee>
    </div>
  )
}

export default Footer
