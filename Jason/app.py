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
# Burritos = Base.classes.burritos
Listings = Base.classes.listings
# Summary = Base.classes.summary


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

        # Initial
        listings_data = []

        for result in results:
                listing_info = {}
                listing_info['id'] = result[0]
                listing_info['name'] = result[1]
                listing_info['neighborhood'] = result[2]
                listing_info['latitude'] = float(result[3])
                listing_info['longitude'] = float(result[4])
                listing_info['price'] = float(result[5])
                listings_data.append(listing_info)

        return jsonify(listings_data)

if __name__ == "__main__":
    app.run(debug=True)