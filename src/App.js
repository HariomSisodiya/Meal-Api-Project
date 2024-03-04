import { useEffect, useState } from 'react';
import './App.css';
import './meal.css';
import axios from 'axios';

function App() {
  const [items , setItems] = useState([]);
  
  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((res)=>{
      setItems(res.data.meals);
    })
    .catch((err)=>{
      console.log(err);
    });
  } ,[]);

  return<>
    <div className='header'>
        <h1><u>Meal Items</u></h1>
    </div>
    <div className='container'>
      {items.map((meal , index)=>{
        return(
          <section key={index} className='card'>
            <img src={meal.strMealThumb} alt='internet issue'/>
            <p>#{meal.idMeal}</p>
            <p>{meal.strMeal}</p>
          </section>
        )
      })}
    </div>
  </>
}

export default App;
