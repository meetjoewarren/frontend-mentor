document.addEventListener("DOMContentLoaded", function () {
  const ratings = document.querySelectorAll(".item");
  const submit = document.querySelector("button");

  for (const rating of ratings) {
    rating.addEventListener("click", () => {
      ratings.forEach((i) => i.classList.remove("selected"));
      rating.classList.add("selected");
    });
  }

  submit.addEventListener("click", () => {
    const selected = document.querySelector(".selected").textContent;
    const mainGrid = document.querySelector(".main-grid");
    if (selected) {
      document.querySelector(".rating-content").classList.add("hidden");
      const div = document.createElement("div");
      div.classList.add("thanks-content");
      div.innerHTML = `
            <div class="thanks-image">
              <img src="images/illustration-thank-you.svg" alt="Thank you!">
            </div>
            <span class="user-selection">You selected ${selected} out of 5</span>
            <h1>Thank you!</h1>

            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>`;
      mainGrid.appendChild(div);
    }
  });
});
