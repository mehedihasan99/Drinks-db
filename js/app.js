const loadDrink = () => {
  const searchText = document.getElementById("search-input").value;
  document.getElementById("search-input").value = "";
  document.getElementById("error-box").style.display = "none";
  if (searchText == "") {
    const showDrink = document.getElementById("showDrink");
    showDrink.innerText = "";
    document.getElementById("error-box").style.display = "block";
  } else {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => displayDrink(data.drinks))
      .catch((error) => displayError(error));
  }
};
const displayError = (errMsg) => {
  document.getElementById("error-box").style.display = "block";
};

const displayDrink = (drinks) => {
  const showDrink = document.getElementById("showDrink");
  showDrink.innerText = "";
  drinks.forEach((drink) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");
    div.innerHTML = `
    <div class="card" ">
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center">${drink.strDrink}</h5>
    <button onclick=loadDrinkDetails('${drink.idDrink}') class="btn btn-info w-100 mt-4 mx-auto">Details</button>
    </div>
    </div>
    `;
    showDrink.appendChild(div);
    const drinkDetailsContainer = document.getElementById("drink-details");
    drinkDetailsContainer.innerHTML = "";
  });
};

const loadDrinkDetails = (drinkId) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
    .then((res) => res.json())
    .then((data) => displayDrinkDetails(data.drinks));
};

const displayDrinkDetails = (drinkDetails) => {
  const drinkDetailsContainer = document.getElementById("drink-details");
  drinkDetails.forEach((detail) => {
    console.log(detail);
    drinkDetailsContainer.innerHTML = `
    <div class="card" ">
    <img src="${detail.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title text-center">${detail.strDrink}</h5>
    <p>${detail.strInstructions}</p>
    </div>
    `;
  });
};
