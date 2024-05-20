import React, { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import { RecipieProvider } from '../contexts/recipieContext';
const Home = () => {
  
  const [result, setResult] = useState([])
  const [bookmark, setBookmark] = useState([])
  const  [search,setSearch] = useState('')
  const fetchApi = async (query) => {
    try {
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      let data = await response.json();
      // console.log(data);
      setResult(data.meals)
      console.log("result is ", result);
    }
    catch {
      console.log("Error");
    }
  }
  const bookmarkRecipie = (id) =>{
    setBookmark((prev)=> prev.filter((prevCard)=> prevCard.idMeal === id))
  }
  useEffect(() => {
    fetchApi(search)
  }, [])
  return (

    <RecipieProvider value={{result,fetchApi ,bookmarkRecipie}}>
      <div className="bg-gray-100 p-8">
        <Card result={result} />
      </div>
    </RecipieProvider>
  );
};

export default Home;
