import React,{ useState,useEffect } from "react";
import './Postview.css';
import Card from './Component/Card';
import NavBar from './Component/NavBar';

const Postview=()=> {
  const [array,setArray] = useState([])
    useEffect(() => {
      async function getData(){
        const response = await fetch("http://localhost:3004/data")
        const instaCards = await response.json()
        console.log(instaCards)
        setArray([...instaCards])
      }
      getData()
    }, [])
  return (
    <div className="site-container">
      <NavBar/>
      <section>
        {array.map((person,index) => 
        {
        return(
        <Card person={person} key={index}/>
        )
        })}
      </section>
    </div>
    )}
    

export default Postview;
