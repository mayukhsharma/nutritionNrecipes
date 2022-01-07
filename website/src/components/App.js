import React,{useState} from "react";
import MealList from "./MealList";

function App() {

  const[mealData,setMealData]=useState(null);
  const[calories,setCalories]=useState(null);
  const[diet,setDiet]=useState(null);
  const[exclude,setExclude]=useState(null);

  function handleChange(e){
    setCalories(e.target.value);                            
  }

  function handleDiet(e){
    setDiet(e.target.value);
  }
  
  function handleExclude(e){
    setExclude(e.target.value);
  }

  function getMealData(){
  fetch(
    `https://api.spoonacular.com/mealplanner/generate?apiKey=bae565de28754165ae8db829409212f2&timeFrame=day&targetCalories=${calories}&diet=${diet}&exclude=${exclude}`
  ).then((response)=>response.json()).then((data)=>{
    setMealData(data);
    console.log(data);
  }).catch(()=>{
    console.log("Error");
  });
  }

  return (
  <div className="container">
  {/* <section className="names">
    <p>Enter Calories (e.g. 2000)</p>
    <p>Enter ingredients to exclude</p>
    <p>Choose a Diet</p>
  </section> */}
  <section className="controls">
  <section className="col">
  <p>Enter the amount of Calories</p>
   <input onChange={handleChange} className="calories" type="number" placeholder="Intake of Calories for the Day (e.g. 2000)" />
   </section>
   <section className="col">
  <p>Enter ingredients to exclude</p>
   <input onChange={handleExclude} className="exclude" type="text" placeholder="Ingredients to exclude from Diet (e.g. Milk, Egg)" />
  </section>
   {/* <label for="diet" className="dietlabel">Choose a Diet:</label> */}
    <section className="col">
  <p>Choose a Diet</p>
<select name="diet" className="diet" onChange={handleDiet}>
  <option value="volvo">Gluten Free</option>
  <option value="saab">Ketogenic</option>
  <option value="mercedes">Vegetarian</option>
  <option value="audi">Lacto-Vegetarian</option>
  <option value="audi">Ovo-Vegetarian</option>
  <option value="audi">Vegan</option>
  <option value="audi">Pescetarian</option>
  <option value="audi">Paleo</option>
  <option value="audi">Primal</option>
  <option value="audi">Low FODMAP</option>
  <option value="audi">Whole30</option>
</select>
</section>
</section>
   <button onClick={getMealData} className="getplan">Get daily meal plan</button>
   
   {mealData && <MealList mealData={mealData} />}
  </div>
  );
}

export default App;
