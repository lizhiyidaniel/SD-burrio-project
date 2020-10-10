function draw_map() {

function createMap(low, med, high, higher) {

        // Create the tile layer that will be the background of our map
        var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
          attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
          maxZoom: 18,
          id: "light-v10",
          accessToken: 'pk.eyJ1IjoiZ2FidW5pbGFzaiIsImEiOiJja2ZkYTkyb3UwNGh6MnVtdmxhajlla3JxIn0.sBtML3qsir6qU1nrXRG8uw'
        });
      
        // Create a baseMaps object to hold the lightmap layer
        var baseMaps = {
          "Light Map": lightmap
        };
      
        // Create an overlayMaps object to hold the bikeStations layer
        var overlayMaps = {
          "Low Cost (<$60)": low,
          "Med Cost ($60-$99)": med,
          "High Cost ($99-$150)": high,
          "Highest Cost (>$150)": higher
        };
      
        // Create the map object with options
        var map = L.map("map-id", {
          center: [32.72, -117.16],
          zoom: 12,
          layers: [lightmap, low]
        });
      
        // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
        L.control.layers(baseMaps, overlayMaps, {
          collapsed: false
        }).addTo(map);
      }
      
      function createMarkers(response) {
        // console.log("success!")
        // console.log(response)
      
        // Pull the "stations" property off of response.data
        // var stations = response.data.stations;
      
        // Initialize an array to hold bike markers
        var listings_1 = [];
        var listings_2 = [];
        var listings_3 = [];
        var listings_4 = [];
        // var listings_5 = [];

      
        // Loop through the stations array
        for (var index = 0; index < response.length; index++) {
                if (response[index].price <= 60) {
                                // For each station, create a marker and bind a popup with the station's name
                        var listing = L.marker([response[index].latitude, response[index].longitude]).bindPopup("<h3>" + response[index].name + "<h3><p>Price: $" + response[index].price + "</p>");
                        
                        // Add the marker to the bikeMarkers array
                        listings_1.push(listing);
                        } else if (response[index].price <= 99 && response[index].price > 60) {
                                var listing = L.marker([response[index].latitude, response[index].longitude]).bindPopup("<h3>" + response[index].name + "<h3><p>Price: $" + response[index].price + "</p>");
                                listings_2.push(listing);

                        } else if (response[index].price <= 150 && response[index].price > 99) {
                                var listing = L.marker([response[index].latitude, response[index].longitude]).bindPopup("<h3>" + response[index].name + "<h3><p>Price: $" + response[index].price + "</p>");
                                listings_3.push(listing);
                        } else {
                                var listing = L.marker([response[index].latitude, response[index].longitude]).bindPopup("<h3>" + response[index].name + "<h3><p>Price: $" + response[index].price + "</p>");
                                listings_4.push(listing);
                        }

          }
        //   console.log(listings_1)
        //   console.log(listings_2)
        //   console.log(listings_3)
        //   console.log(listings_4)


      
        // Create a layer group made from the bike markers array, pass it into the createMap function
        createMap(L.layerGroup(listings_1), L.layerGroup(listings_2), L.layerGroup(listings_3), L.layerGroup(listings_4));
      }
      
      
      // Perform an API call to the Citi Bike API to get station information. Call createMarkers when complete
      d3.json("../../listings.json", createMarkers);
}

      