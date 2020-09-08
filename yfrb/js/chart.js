// chart colors
var colors = ["#007bff", "#28a745", "#333333", "#6c757d"];

/* 3 donut charts */
var donutOptions = {
  //   cutoutPercentage: 85,
  legend: {
    position: "bottom",
    display: false,
    padding: 5,
    labels: { pointStyle: "circle", usePointStyle: true, fontColor: "#f8a912" },
  },
  legendCallback: (chart) => {
    var text = [];
    text.push('<ul class="' + chart.id + '-legend">');
    for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
      text.push(
        '<li><span style="background-color:' +
          chart.data.datasets[0].backgroundColor[i] +
          '">'
      );
      if (chart.data.labels[i]) {
        text.push(chart.data.labels[i]);
      }
      text.push("</span></li>");
    }
    text.push("</ul>");
    return text.join("");
  },
};

// donut 1
var chDonutData1 = {
  labels: [
    "For Sale",
    "Liquidity on Uniswap",
    "Team Tokens",
    "Incentive Platform",
  ],
  datasets: [
    {
      borderColor: "#f8a912",
      backgroundColor: colors.slice(0, 4),
      borderWidth: 1,
      data: [40, 20, 20, 20],
    },
  ],
};

var chDonut1 = document.getElementById("chDonut1");
if (chDonut1) {
  this.c1 = new Chart(chDonut1, {
    type: "doughnut",
    data: chDonutData1,
    options: donutOptions,
  });
}

//donut 2
colors = ["#ff6361", "#58508d"];
var chDonutData2 = {
  labels: ["Liquidity Pool", "Development"],
  datasets: [
    {
      borderColor: "#f8a912",
      backgroundColor: colors.slice(0, 2),
      borderWidth: 1,
      data: [80, 20],
    },
  ],
};

var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
  this.c2 = new Chart(chDonut2, {
    type: "doughnut",
    data: chDonutData2,
    options: donutOptions,
  });
}

if (chDonut1) {
  document.getElementById("legend1").innerHTML = this.c1.generateLegend();
}
if (chDonut2) {
  document.getElementById("legend2").innerHTML = this.c2.generateLegend();
}
