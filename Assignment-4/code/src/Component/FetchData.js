import { useState,useEffect } from "react";
import React from 'react';

function FetchData() {
    const [array,setArray] = useState([])
    useEffect(() => {
      async function getData(){
        let objectData = await fetch("http://localhost:3004/data")
        let object = objectData.json()
        console.log(object)
        setArray(...object)
      }
      getData()
    }, [])
  return(
  <p array={array} setArray={setArray}/>
  )

}

export default FetchData