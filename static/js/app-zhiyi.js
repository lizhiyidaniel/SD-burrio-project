anychart.onDocumentReady(function() {

    // set the data
    var data = {
        header: ["neighborhood", "listings"],
      rows: [
        ["Horton Plaza",2],
				["Eastlake Trails",2],
				["Amphitheater And Water Park",3],
				["Terra Nova",3],
				["Yosemite Dr",4],
				["Lincoln Park",4],
				["Palm City",4],
				["Tijuana River Valley",4],
				["Bonita Long Canyon",4],
				["Eastlake Woods",4],
				["Paseo Ranchoero",5],
				["Lynwood Hills",6],
				["Rolling Hills Ranch",6],
				["Sky Line",7],
				["Bario Logan",7],
				["Alta Vista",7],
				["Chollas View",7],
				["Rancho Del Rey",8],
				["Estlake Greens",9],
				["East Lake",9],
				["Southcrest",10],
				["Sunbow",10],
				["Egger Highlands",10],
				["Nestor",12],
				["Sabre Springs",13],
				["Kearny Mesa",13],
				["Eastlake Vistas",14],
				["Columbia",15],
				["Torrey Pines",15],
				["San Ysidro",16],
                ["Emerald Hills",17],
				["Tierrasanta",18],
				["Jomacha-Lomita",18],
				["Valencia Park",18],
				["Gateway",18],
				["Allied Gardens",22],
				["Carmel Mountain",22],
				["El Cerritos",22],
				["Bird Land",23],
				["Lake Murray",23],
				["Oak Park",23],
				["Webster",25],
				["Mount Hope",26],
				["Bay Terrace",27],
				["Darnall",28],
				["Del Cerro",29],
				["Sorrento Valley",31],
				["Paradise Hills",31],
				["Mountain View",33],
				["Encanto",41],
				["Talmadge",41],
				["North City",44],
				["Wooded Area",49],
				["San Carlos",49],
				["Rolando",49],
				["La Jolla Village",50],
				["Scripps Ranch",51],
				["City Heights East",52],
				["Southwest",52],
				["Rancho Bernadino",53],
				["Kensington",56],
				["Midtown District",57],
				["Grantville",60],
				["Otay Ranch",63],
				["Mission Valley",69],
				["Del Mar Heights",80],
				["Rancho Penasquitos",85],
				["Northwest",91],
				["Bay Ho",91],
				["Memorial",93],
				["Moreno Mission",95],
				["Roseville",95],
				["South Park",101],
				["North Clairemont",105],
				["City Heights West",109],
				["College Area",120],
				["Core",129],
				["Linda Vista",133],
				["Serra Mesa",137],
				["Carmel Valley",156],
				["Normal Heights",156],
				["Marina",161],
				["Cortez Hill",166],
				["Clairemont Mesa",170],
				["Grant Hill",171],
				["Bay Park",191],
				["Mira Mesa",207],
				["Old Town",211],
				["Park West",211],
				["West University Heights",214],
				["University City",230],
				["Gaslamp Quarter",233],
				["Little Italy",242],
				["Balboa Park",311],
				["Loma Portal",336],
				["Ocean Beach",522],
				["Midtown",576],
				["North Hills",629],
				["East Village",745],
				["La Jolla",847],
				["Pacific Beach",1052],
				["Mission Bay",1680]
    ]};

    // create the chart
   var chart = anychart.bar();

    // add data
    chart.data(data);

    // set the chart title
    chart.title("airbnb listings in San Diego");


  // draw
  chart.container("container2");
  chart.draw();
});

  
  