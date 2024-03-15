document.addEventListener("DOMContentLoaded", function () {
  async function loadJSON() {
    const response = await fetch("./data.json");
    const json_data = await response.json();
    const selector = document.querySelector(".selector");
    const card = document.querySelectorAll(".card");
    const card_title = document.querySelectorAll(".card__title");
    const current = document.querySelectorAll(".current");
    const previous = document.querySelectorAll(".previous");

    for (let i = 0; i < json_data.length; i++) {
      card[i].style.backgroundImage = `${json_data[i].image}, ${json_data[i].color}`;
      card_title[i].textContent = json_data[i].title;

      selector.addEventListener("click", (e) => {
        const timeframe = json_data[i].timeframes;

        if (e.target.matches(".button--daily")) {
          if (
            Number(timeframe.daily.current) <= 1 ||
            Number(timeframe.daily.previous) <= 1
          ) {
            current[i].textContent = timeframe.daily.current + "hr";
            previous[i].textContent =
              "Yesterday - " + timeframe.daily.previous + "hr";
          } else {
            current[i].textContent = timeframe.daily.current + "hrs";
            previous[i].textContent =
              "Yesterday - " + timeframe.daily.previous + "hrs";
          }
        }
        if (e.target.matches(".button--weekly")) {
          if (
            Number(timeframe.weekly.current) <= 1 ||
            Number(timeframe.weekly.previous) <= 1
          ) {
            current[i].textContent = timeframe.weekly.current + "hr";
            previous[i].textContent =
              "Last Week - " + timeframe.daily.previous + "hr";
          } else {
            current[i].textContent = timeframe.weekly.current + "hrs";
            previous[i].textContent =
              "Last Week - " + timeframe.weekly.previous + "hrs";
          }
        }
        if (e.target.matches(".button--monthly")) {
          if (
            Number(timeframe.monthly.current) <= 1 ||
            Number(timeframe.monthly.previous) <= 1
          ) {
            current[i].textContent = timeframe.monthly.current + "hr";
            previous[i].textContent =
              "Last Month - " + timeframe.monthly.previous + "hr";
          } else {
            current[i].textContent = timeframe.monthly.current + "hrs";
            previous[i].textContent =
              "Last Month - " + timeframe.monthly.previous + "hrs";
          }
        }
      });
    }
  }

  loadJSON();
});
