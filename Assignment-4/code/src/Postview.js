import React from 'react';
import './Postview.css';
import instaCard from './Mock-data/data.json';
import Card from './Component/Card';
import NavBar from './Component/NavBar';

const Postview=()=> {
  return (
    <div className="site-container">
      <NavBar/>
      <section>
          {instaCard.data.map((person,index) => {
        const {name,location,likes,description,PostImage,date}=person
        return(
        <Card name={name} location={location} likes={likes} description={description} PostImage={PostImage} date={date} key={index}/>
        )
        })}
      </section>
    </div>
    )}
    

export default Postview;
