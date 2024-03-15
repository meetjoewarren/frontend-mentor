const xlabels = [];
const yamount = [];

async function loadJSON() {
  const response = await fetch("./data.json");
  const json_data = await response.json();

  for (let i = 0; i < json_data.length; i++) {
    let day = json_data[i].day;
    let amount = json_data[i].amount;

    xlabels.push(day);
    yamount.push(amount);

    console.log(yamount.reduce((a, b) => a + b, 0));
  }
}

async function chartIt() {
  await loadJSON();
  const ctx = document.getElementById("chart");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: xlabels,
      datasets: [
        {
          data: yamount,
          backgroundColor: "hsl(10, 79%, 65%)",
          borderRadius: 5,
          borderSkipped: false,
          borderWidth: 0,
          hoverBackgroundColor: "hsl(186, 34%, 60%)",
        },
      ],
    },
    options: {
      onClick: (e) => {
        e.target.classList.add("active");
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            title: function () {
              return null;
            },
            label: function (context) {
              var label = context.dataset.label || "";
              if (label) {
                label += " ";
              }
              label += "$" + context.parsed.y.toFixed(2);
              return label;
            },
          },
          caretSize: 0,
          displayColors: false,
          xAlign: "center",
          yAlign: "bottom",
        },
      },
      responsive: true,
      scales: {
        x: {
          border: {
            display: false,
          },
          display: true,
          grid: {
            display: false,
            drawOnChartArea: false,
          },
        },
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
      },
    },
  });
}
chartIt();
