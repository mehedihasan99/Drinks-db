const loadDrink = () => {
  const searchText = document.getElementById("search-input").value;
  document.getElementById("search-input").value = "";
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
  )
    .then((res) => res.json())
    .then((data) => displayDrink(data.drinks));
};

const displayDrink = (drinks) => {
  drinks.forEach((drink) => {
    console.log(drink);
    const showDrink = document.getElementById("showDrink");
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
    <div class="card" ">
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center">${drink.strDrink}</h5>
    <button class="btn btn-info w-100 mt-4 mx-auto">Details</button>
    </div>
    </div>
    `;
    showDrink.appendChild(div);
  });
};
