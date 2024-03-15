async function loadJSON() {
  const response = await fetch('./data.json');
  const json_data = await response.json();

  for (let i = 0; i < json_data.length; i++) {
    views.push(json_data[i].views);
    price.push(json_data[i].price);
  }
}

let views = [];
let price = [];

async function sliderInput() {
  await loadJSON();

  const numOfViews = document.querySelector('.pageview');
  const sliderInput = document.querySelector('.slider__selector');
  const subInput = document.getElementById('sub__input');
  const pricing = document.querySelector('.price');

  function getSubType() {
    const num = Number(sliderInput.value) - 1;
    numOfViews.textContent = views[num];
    if (!subInput.checked) pricing.textContent = `$${Number(price[num]).toFixed(2)}`; // Monthly Billing
    else pricing.textContent = `$${Number(price[num] - (0.25 * price[num])).toFixed(2)}`; // Yearly Billing
  }

  sliderInput.oninput = () => {
    getSubType();
  }

  subInput.addEventListener('change', () => {
    getSubType();
  });
}

sliderInput();