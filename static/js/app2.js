  // Use the D3 Library to read in samples.json

// d3.json("../listings.json").then(function(data) {
//     console.log(data)
// });

// Anime code
anime({
        targets: ['#burrito1'],
        translateX: 250,
        direction: 'alternate',
        duration: 1500
      });

anime({
        targets: ['#burrito2'],
        translateX: -250,
        direction: 'alternate',
        duration: 1500
      });

pictureClick = d3.selectAll('.picture')
console.log(pictureClick)
pictureClick.on('click', function(event) {
        console.log('clicked!!')
        anime({
                targets: '#burrito1',
                rotate: 720,
                duration: 4000
              });
              anime({
                targets: '#burrito2',
                rotate: -720,
                duration: 4000
              });      
})

id_list = []
price_list = []

d3.json("../listings.json").then(function(response) {
    for (var i = 0; i < response.length; i++) {
        if (response[i].price < 2000) {
            id_list.push(response[i].id);
            price_list.push(response[i].price)
        }
    }
});

d3.json("../listings.json").then(function(data){
    var trace1 = {
        type: "line",
        x: id_list.slice(0,10),
        y: price_list.slice(0,10),

    }
    var data = [trace1];
    var layout = {
        title: `Sample Chart`,
        xaxis: {
            title: "Listing"
        },
        yaxis: {
            title: "Price"
        }
        };
    Plotly.newPlot('line', data, layout)
    });
  

// // Drop Down menu
// function create_dropdown(){
//    var dropdown = d3.select("#selDataset")
//    d3.json("summary.json").then(function(data) {
//        // CHANGE TO MATCH DATA var names = data.names;
//        // names.forEach(Neighborhood => {
//            dropdown.append("option")
//            .text(Neighborhood)
//            .attr('value', Neighborhood)
//        });
//    });
// };

// create_dropdown()

// function optionChanged(new_selection){
//     buildMetaData(new_selection)
//     buildPlot(new_selection)
// }

// // // Display each key-value pair from metadata JSON object
// function buildMetaData(selection) {
//     d3.json("samples.json").then(function(data){
//         var samples = data.metadata;
//         // other charts will call data.sample
//         //filter by whatever is chosen
//         var new_array = samples.filter(sample => sample.id == selection);
//         console.log(new_array);
//         var div_tag = d3.select("#neighborhood-metadata")
//         div_tag.html("")
//         Object.entries(new_array[0]).forEach(([key, value]) => div_tag.append("h3").text(`${key}: ${value}`));
//      });
// }

// // // Horizontal Bar Chart- sample_values as values for bar chart, otu_ids as labels, otu_labels as hovertext; top 10 OTU's
// function buildPlot(selection) {
//     d3.json("samples.json").then(function(data){
//         var samples = data.samples;
//         var new_array = samples.filter(sample => sample.id == selection);
//         var trace1 = {
//             type: "bar",
//             //slice for top 10 and order
//             x: new_array[0].otu_ids.slice(0,10).reverse(),
//             y: new_array[0].sample_values.slice(0,10).reverse(),
//             orientation: "h"
//         }
//         var data = [trace1];
//         var layout = {
//             title: `top 10 OTUs`,
//             xaxis: {
//                 title: "OTU IDs"
//             },
//             yaxis: {
//                 title: "Sample Values"
//             }
//             };
//         Plotly.newPlot('bar', data, layout)
//     });
// }
// optionChanged("Pacific Beach");
