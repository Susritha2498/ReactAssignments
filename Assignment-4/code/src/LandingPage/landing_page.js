import React from 'react';
import '../App.css';
import instaCard from '../Mock-data/data.json';
import Card from '../Components/Card.js';
import NavBar from '../Components/NavBar.js';

const LandingPage=()=> {
  return (
    <div className="site-container">
      <NavBar/>
      <section className='section1'>
          {instaCard.data.map((person,index) => {
        const {name,location,likes,description,PostImage,date}=person
        return(
        <Card name={name} location={location} likes={likes} description={description} PostImage={PostImage} date={date} key={index}/>
        )
        })}
      </section>
    </div>
    )}
    

export default LandingPage;
