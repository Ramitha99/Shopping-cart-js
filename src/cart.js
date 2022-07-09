let label = document.createElement("label");
let shoppingCart = document.createElement("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCardItems = () => {
  if (basket.length !== 0) {
  } else {
    console.log("empty");
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
    <h2>Cart is empty</h2>
    <a href="index.html">
        <button class="HomeBtn">Back To Home</button>
    </a>
    `;
  }
};

generateCardItems();
