# Project 2: Burritos and AirBnB
# Written by the Super Duper Data Ninjas from Mars
# import dependencies for Flask
from flask import Flask, jsonify, escape

# import dependencies for SQLAlchemy, numpy, and datetime
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt
from datetime import timedelta

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///burritos_bnb.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Burritos = Base.classes.burritos
Listings = Base.classes.listings
Summary = Base.classes.summary


#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################
@app.route("/")
def welcome():
        return (
        f"Welcome to the Burrito and AirBnB API!<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/burritos<br/>"
        f"/api/v1.0/listings<br/>"
        f"/api/v1.0/summary<br/>" 
        )

# The listings route
@app.route("/api/v1.0/listings")
def listings():
        session = Session(engine)

        # Query the database
        results = session.query(Listings.id, Listings.name, Listings.neighborhood, Listings.latitude, Listings.longitude, Listings.price).all()

        print(results)

        # Close session
        session.close()

        # Initialize list for listings data
        listings_data = []

        # Iterate through each listing and create a new dictionary for each one, with the keys referring to the different attributes and the values being the results of the query. Append each listing dictionary to the list.
        for result in results:
                listing_info = {}
                listing_info['id'] = result[0]
                listing_info['name'] = result[1]
                listing_info['neighborhood'] = result[2]
                listing_info['latitude'] = float(result[3])
                listing_info['longitude'] = float(result[4])
                listing_info['price'] = float(result[5])
                listings_data.append(listing_info)
        # JSONify the listings_data list
        return jsonify(listings_data)


# The summary route
@app.route("/api/v1.0/summary")
def summary():
        session = Session(engine)

        # Query the database
        results = session.query(Summary.id, Summary.Location, Summary.Burrito, Summary.Neighborhood, Summary.Yelp, Summary.Google, Summary.Cost, Summary.overall, Summary.Total_Listings, Summary.Average_Price_per_Night).all()

        print(results)

        # Close session
        session.close()

        # Initialize list for listings data
        summary_data = []

        # Iterate through each listing and create a new dictionary for each one, with the keys referring to the different attributes and the values being the results of the query. Append each listing dictionary to the list.
        for result in results:
                summary_info = {}
                summary_info['id'] = result[0]
                summary_info['Restaurant'] = result[1]
                summary_info['Burrito'] = result[2]
                summary_info['Neighborhood'] = result[3]
                summary_info['Yelp'] = float(result[4])
                summary_info['Google'] = float(result[5])
                summary_info['Cost'] = float(result[6])
                summary_info['Overall Burrito Score'] = float(result[7])
                summary_info['Total Listings'] = result[8]
                summary_info['Avg Price Per Night'] = result[9]

                
                summary_data.append(summary_info)

        # JSONify the listings_data list
        return jsonify(summary_data)

# The listings route
@app.route("/api/v1.0/burritos")
def burritos():
        session = Session(engine)

        # Query the database
        results = session.query(Burritos.id, Burritos.Location, Burritos.Burrito, Burritos.Neighborhood, Burritos.Address, Burritos.URL, Burritos.Cost, Burritos.overall).all()

        print(results)

        # Close session
        session.close()

        # Initialize list for listings data
        burritos_data = []

        # Iterate through each listing and create a new dictionary for each one, with the keys referring to the different attributes and the values being the results of the query. Append each listing dictionary to the list.
        for result in results:
                burritos_info = {}
                burritos_info['id'] = result[0]
                burritos_info['restaurant name'] = result[1]
                burritos_info['Burrito Type'] = result[2]
                burritos_info['neighborhood'] = result[3]
                burritos_info['address'] = result[4]
                burritos_info['URL'] = result[5]
                burritos_info['price'] = float(result[6])
                burritos_info['burrito score'] = float(result[7])
                burritos_data.append(burritos_info)
        # JSONify the listings_data list
        return jsonify(burritos_data)

if __name__ == "__main__":
    app.run(debug=True)