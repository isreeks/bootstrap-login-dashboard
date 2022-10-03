var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["<  1", "1 - 2", "3 - 4", "5 - 9", "10 - 14", "15 - 19", "20 - 24", "25 - 29", "> - 29"],
    datasets: [{
      label: 'Total Views',
      backgroundColor: "#EB4D4B",
      data: [12, 59, 5, 56, 58, 12, 59, 87, 45],
    }, {
      label: 'Total Sells',
      backgroundColor: "#50DBB4",
      data: [12, 59, 5, 56, 58, 12, 59, 85, 23],
    },],
  },
  options: {
    tooltips: {
      displayColors: true,
      callbacks: {
        mode: 'x',
      },
    },
    scales: {
      xAxes: [{
        stacked: true,
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
        type: 'linear',
      }]
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom' },
  }
});