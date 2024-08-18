import React from 'react';
import './Content.css';
import BreakingNews from './Video/BreakingNews.mp4';
import Image1 from './Images/Image1.jpg';

const Content = () => {
  return (
    <div className="parent">
    <div className='content'>
      <div className='Latest-News'>
        <h2>Latest News</h2>
        <div className='part1'>
            <h3>Sports</h3>
            <h4>Get the latest sports news, scores, stats, and more with our comprehensive coverage</h4>
            <p>Published 1 hour</p>
        </div>
        <div className='part2'>
            <h3>Politics</h3>
            <h4>Get the latest news and analysis on politics, elections, and more</h4>
            <p>Published 2 hours</p>
        </div>
        <div className='part3'>
            <h3>Technology</h3>
            <h4>Get the latest news and updates on technology, gadgets, and more</h4>
            <p>Published 3 hours</p>
        </div>
        <div className='part4'>
            <h3>Entertainment</h3>
            <h4>Get the latest news and updates on entertainment, movies, and more</h4>
            <p>Published 4 hours</p>
        </div>
      </div>
      <div className='Break'>
        <div className='prt1'>
            <h2>Breaking News</h2>
            <video width="600" controls>
                <source src={BreakingNews} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p> A massive fire broke out in the downtown area earlier today, engulfing several buildings and forcing hundreds of residents to evacuate. Emergency services were quickly on the scene, battling the flames and working to contain the blaze. </p>
        </div>
        <div className='prt2'>
            <h2>Weather</h2>
            <img src={Image1} width='600px'></img>
            <p>Today's forecast is looking partly cloudy with a high of 75 and a low of 50. Tomorrow's forecast is looking mostly sunny with a high of 80 and a low of 55.</p>
        </div>
      </div>
      <div className='News'>
        <h2>Top News</h2>
        <div className='news1'>
            <h3>Independence Day 2024</h3>
            <p> India is gearing up to celebrate its 78th Independence Day on August 15, 2024. Prime Minister Narendra Modi will deliver his 11th consecutive address from the Red Fort, with the theme "Viksit Bharat" (Developed India), emphasizing the government's vision to transform India into a developed nation by 2047. </p>
        </div>
        <div className='news2'>
            <h3>Chandrayaan-3 Mission Success</h3>
            <p>India's Chandrayaan-3 mission has successfully landed on the lunar surface, marking a historic moment for the country's space program. The mission, launched on July 14 from the Satish Dhawan Space Centre in Sriharikota, has sent back stunning images of the lunar surface, providing valuable insights into the moon's geology and composition. </p>
        </div>
        <div className='news3'>
            <h3>Monsoon and Flood Management</h3>
            <p>The Indian government has approved ₹2,514.36 crore for urban flood management projects across five states. This decision comes in response to the challenges posed by the monsoon season, which has led to significant flooding in various regions, disrupting lives and infrastructure.</p>
        </div>
        <div className='news4'>
            <h3>NEP 2020 Fourth Anniversary</h3>
            <p>The National Education Policy (NEP) 2020 has completed four years of implementation The policy aims to transform India's education system, focusing on equity, quality, and accessibility.</p>
        </div>
        <div className='news5'>
            <h3>India's Economic Growth</h3>
            <p>India's economy has shown signs of recovery, with the GDP growth rate increasing to 6.1% in the first quarter of 2024-25. The government has taken various measures to boost economic growth, including infrastructure development and tax reforms.</p>
        </div>
      </div>
    </div>
      <div className='More-News'>
        <div className='Business'>
          <h2>Business</h2>
          <div className='article'>
            <h3>Stock Market Rally</h3>
            <p>The stock market saw a significant rally today, with major indices closing at record highs. Analysts are optimistic about continued economic recovery.</p>
          </div>
          <div className='article'>
            <h3>Startups Thriving</h3>
            <p>Despite global challenges, startups are thriving in various sectors, driven by innovation and investor interest.</p>
          </div>
        </div>
        <div className='Health'>
          <h2>Health</h2>
          <div className='article'>
            <h3>COVID-19 Vaccination Drive</h3>
            <p>The government has launched a new phase of its COVID-19 vaccination drive, aiming to vaccinate millions by the end of the year.</p>
          </div>
          <div className='article'>
            <h3>Mental Health Awareness</h3>
            <p>There is growing awareness about the importance of mental health, with new initiatives being launched to support people facing mental health challenges.</p>
          </div>
        </div>

        <div className='Opinion'>
          <h2>Opinion</h2>
          <div className='article'>
            <h3>The Future of Work</h3>
            <p>As remote work becomes the norm, what does the future hold for traditional office spaces? Experts weigh in on the shift to hybrid work models.</p>
          </div>
          <div className='article'>
            <h3>Climate Change Action</h3>
            <p>The need for urgent climate change action has never been more critical. Global leaders must come together to address this pressing issue.</p>
          </div>
        </div>

        <div className='Lifestyle'>
          <h2>Lifestyle</h2>
          <div className='article'>
            <h3>Travel Trends 2024</h3>
            <p>As travel restrictions ease, new trends are emerging in the travel industry, with more people opting for sustainable and eco-friendly travel options.</p>
          </div>
          <div className='article'>
            <h3>Home Decor Ideas</h3>
            <p>Looking to spruce up your home? Check out these latest home decor ideas that combine functionality with style.</p>
          </div>
        </div>

        <div className='International'>
          <h2>International News</h2>
          <div className='article'>
            <h3>Global Economic Summit</h3>
            <p>World leaders gather for the annual Global Economic Summit to discuss strategies for addressing economic challenges and promoting global growth.</p>
          </div>
          <div className='article'>
            <h3>Conflict in the Middle East</h3>
            <p>The ongoing conflict in the Middle East has escalated, with international calls for peace and diplomacy becoming more urgent.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
