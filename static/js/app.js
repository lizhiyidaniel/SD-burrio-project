// Drop Down menu

neighborhood_list = []

function create_dropdown(){
    var dropdown = d3.select("#selDataset")
    d3.json("../summary.json").then(function(response) {
        for (var i = 0; i < response.length; i++) {
            neighborhood_list.push(response[i].Neighborhood);
            }

        neighborhood_list = _.uniq(neighborhood_list,false);

        neighborhood_list.forEach(neighborhood => {
            dropdown.append("option")
            .text(neighborhood)
            .attr('value', neighborhood)
        });
    });
 };

create_dropdown()

function optionChanged(new_selection){
    buildairbnbdata (new_selection)
    buildPlot(new_selection)
}

function buildairbnbdata(selection) {
    d3.json('../summary.json').then(function(response) {
        var selected_hood = response.filter(neighborhood => neighborhood.Neighborhood == selection)[0];
        // console.log(selected_hood)
        var div_tag = d3.select("#neighborhood-metadata")
        div_tag.html("")    
        // Object.entries(selected_hood).forEach(([key, value]) => div_tag.append("p").text(`${key}: ${value}`));
        div_tag.append("p").text(`Average Price/Night: $${selected_hood["Avg Price Per Night"]}`);
        div_tag.append("p").text(`Total Listings: ${selected_hood["Total Listings"]}`)
        
    });
};

//buildairbnbdata("Carmel Valley")

// Horizontal Bar Chart- sample_values as values for bar chart, otu_ids as labels, otu_labels as hovertext; top 10 OTU's
function buildPlot(selection) {
    d3.json("../burritos.json").then(function(data){
        var new_array = data.filter(neighborhood => neighborhood.neighborhood == selection);
        // console.log(new_array);
        var restaurant_name = [];
        var restaurant_name_type = [];
        var restaurant_address = [];
        var burrito_score = [];
        var burrito_type = [];
        var burrito_price = [];
        var burrito_type_price=[]

        // }
        for (i = 0; i < new_array.length; i++) {
            //restaurant_name_type.push(new_array[i]["restaurant name"]);
            restaurant_name_type.push(`${new_array[i]["restaurant name"]}: ${new_array[i]["Burrito Type"]}: ${new_array[i]["burrito score"]}`);
            //restaurant_name_price.push(`${new_array[i]["restaurant name"]}: ${new_array[i]["price"]}`);
            restaurant_name.push(new_array[i]["restaurant name"]);
            //console.log(restaurant_name_type);
            restaurant_address.push(new_array[i]["address"]);
            burrito_score.push(new_array[i]["burrito score"]);
            burrito_type.push(new_array[i]["Burrito Type"]);
            burrito_type_price.push(`${new_array[i]["Burrito Type"]}: ${new_array[i]["burrito score"]}: $${new_array[i]["price"]}`);
            burrito_price.push(new_array[i]["price"])
        };
        var trace1 = {
            type: "bar",
            //slice for top 10 and order
            x: [restaurant_name, burrito_type_price],
            // x: restaurant_name_type,
            y: burrito_score,
        }
        var data = [trace1];
        var layout = {
            title: `Burritos in the Neighborhood`,
            xaxis: {
                title: "Purveyors of Burritos",
                automargin: true
            },
            yaxis: {
                title: "Overall Satisfaction Score"
            }
            };
        Plotly.newPlot('bar', data, layout)
    });
}
optionChanged("Carmel Valley");
