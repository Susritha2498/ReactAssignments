import React from 'react';
import './Postview.css';
import FetchData from './Component/FetchData';
import Card from './Component/Card';
import NavBar from './Component/NavBar';

const Postview=({array})=> {
  console.log(array)
  return (
    <div className="site-container">
      <FetchData/>
      <NavBar/>
      <section>
          {array.map((person,index) => {
        return(
        <Card person={person} key={index}/>
        )
        })}
      </section>
    </div>
    )}
    

export default Postview;
