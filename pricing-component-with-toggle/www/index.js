const classes = ["basic", "professional", "master"];
const prices = {
  "basic": {
    "monthly": 19.99,
    "annually": 199.99
  },
  "professional": {
    "monthly": 24.99,
    "annually": 249.99
  },
  "master": {
    "monthly": 39.99,
    "annually": 399.99
  }
};

function updatePrices() {
  let value = this.getAttribute("data-value");
  value = value == "monthly" ? "annually" : "monthly";
  el.setAttribute("data-value", value);
  classes.forEach(cl => {
    const price = document.querySelector(`.${cl} .card__price_value`);
    price.innerHTML = prices[cl][value];
  });
}

const el = document.querySelector("#switch");
el.addEventListener("click", updatePrices);
