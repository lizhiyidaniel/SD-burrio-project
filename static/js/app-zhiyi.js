function makeChart(neighborhood) {
    // neighborhood is an array of objects where each object is something like:
    // {
    //   "neighborhood": "horton plaza",
    //   "listings": "377",
    // }
  
    var neighborLabels = neighborhood.map(function(d) {
      return d.neighborhood;
    });
    var listingsData = neighborhood.map(function(d) {
      return +d.listings;
    });
  
    var chart = new Chart('chart', {
      type: "horizontalBar",
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      },
      data: {
        labels: neighborLabels,
        datasets: [
          {
            data: listingsData
          }
        ]
      }
    });
  }
  
  // Request data using D3
  d3
    .csv("https://raw.githubusercontent.com/lizhiyidaniel/SD-burrio-project/master/zhiyi/airbnb_listing.csv")
    .then(makeChart);