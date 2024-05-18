import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
const Home = () => {
  const  fetchApi = async (query)=>{
  try{
      let response =await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      let data = await response.json();
      // console.log(data);
      setResult(data.meals)
      console.log("result is ", result);
  }
  catch{
    console.log("Error");
  }}
useEffect(()=>{
    fetchApi('cake')
},[])
const [result, setResult] = useState([])
  return (
    
    <div className="bg-gray-100 p-8">
      <Card result={result}/>
    </div>
  );
};

export default Home;
