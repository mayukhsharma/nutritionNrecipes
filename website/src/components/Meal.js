import React,{useState,useEffect} from "react";

function Meal({meal}){
    const [imageUrl,setImageUrl]=useState("");

    useEffect(() => {
     fetch(
         `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=bae565de28754165ae8db829409212f2&includeNutrition=false`
     ).then((res)=>res.json()).then((data)=>{
         setImageUrl(data.image);
     }).catch(()=>{
     console.log("error");
     }
     )
    },[meal.id])

    return(
       <article>
           <h1>{meal.title}</h1>
           <img src={imageUrl} alt="recipe" />
           <ul className="ins">
               <li>Preparation time: {meal.readyInMinutes} minutes</li>
               <li>Number of servings: {meal.servings}</li>
           </ul>
           <a className="link" href={meal.sourceUrl}>Go to Recipe</a>
       </article>
    );
}

export default Meal;