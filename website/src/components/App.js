import React,{useState} from "react";
import MealList from "./MealList";

function App() {

  const[mealData,setMealData]=useState(null);
  const[calories,setCalories]=useState(null);

  function handleChange(e){
    setCalories(e.target.value);                            
  }

  function getMealData(){
  fetch(
    `https://api.spoonacular.com/mealplanner/generate?apiKey=bae565de28754165ae8db829409212f2&timeFrame=day&targetCalories=${calories}`
  ).then((response)=>response.json()).then((data)=>{
    setMealData(data);
    console.log(data);
  }).catch(()=>{
    console.log("Error");
  });
  }

  return (
  <div className="container">
  <section className="controls">
   <input onChange={handleChange} className="calories" type="number" placeholder="Enter Calories (e.g. 2000)" />
  
   <button onClick={getMealData} className="getplan">Get daily meal plan</button>
   </section>
   {mealData && <MealList mealData={mealData} />}
  </div>
  );
}

export default App;
