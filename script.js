// Adding variables to store our data
const userInput = document.querySelector('.field-input');
const userLeterPreview = document.querySelector('.plaque-prev');
const userPricePreview = document.querySelector('#plaquePrice');


// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const price = some_data.replace(' ', '').length * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price
}
const buyNow = () => {
  const inputText = userInput.value.trim();
  
  if (inputText === "") {
    alert("Please input letters before buying.");
  } else if (inputText === "YOUR NAME") {
    alert("Enter a new text.");
  } else if (inputText.length > 15) {
    alert("We have 15 letters left in stock, and you have exceeded the limit.");
  } else {
    alert("Purchase successful!");
  }
};

const buyButton = document.querySelector(".buy-submit");
buyButton.addEventListener("click", () => {
  buyNow();
});
userInput.oninput = (e)=>{
  countLeters(e.target.value)
}
