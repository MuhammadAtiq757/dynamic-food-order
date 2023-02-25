const loadMeals = (searchText) => {
const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
console.log(url)
  fetch(url)
  .then(res => res.json())

  .then(data => displayMeals(data.meals))
  
}


const displayMeals = meals =>{
  // console.log(meals)
  // step-1: container element
  const mealContainer = document.getElementById('meals-container');
mealContainer.innerText = '';
  meals.forEach(meal => {
    console.log(meal)

    // step -2: create child for each element
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('col');
    // step-3: set content of the child
    mealDiv.innerHTML = `
    <div class="card h-100">
    <img src="${meal.strMealThumb
    }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

      <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealsDetails">
 Details
</button>
    </div>
  </div>
    
    `;

    // step-4: appendChild
    mealContainer.appendChild(mealDiv)
  });

}

const searchMeals = () =>{
const searchText = document.getElementById('search-feild').value;
console.log(searchText)
loadMeals(searchText);
searchText.value ='';


} 

const loadMealDetail = idMeal =>{
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
fetch(url)
.then(res => res.json())
.then(data => displayMealDetails(data.meals[0]))

}

const displayMealDetails = meal =>{
document.getElementById('mealsDetailsLabel').innerText = meal.strMeal;
const mealsDetail = document.getElementById('mealsDetailsbody');
mealsDetail.innerHTML =`

<img class="img-fluid" src="${meal.strMealThumb}">

`

}


loadMeals('fish')