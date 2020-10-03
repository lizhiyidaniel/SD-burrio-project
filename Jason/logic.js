console.log("Hello world")


// Neighborhood: total listings, average price

neighborhoods = {
        "names": [],
        "avg_price": [],
        "total_listings": []
}


d3.json('../summary.json').then(function(response) {
        console.log(response)
        for (var i = 0; i < response.length; i++) {
                // console.log(response[i].Neighborhood)
                if (!neighborhoods.names.includes(response[i].Neighborhood)) {
                        neighborhoods.names.push(response[i].Neighborhood)
                        neighborhoods.avg_price.push(response[i]["Avg Price Per Night"])
                        neighborhoods.total_listings.push(response[i]["Total Listings"])
                }
        }
        
})

console.log(neighborhoods)