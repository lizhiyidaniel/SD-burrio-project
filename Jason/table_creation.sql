CREATE table burritos (
        id int not NULL,
        Location varchar not null,
        Burrito varchar not null,
        Neighborhood varchar not null,
        Yelp decimal not null,
        Google decimal not null,
        Cost decimal not null,
        overall decimal not null,
        Total_Listings int not null,
        Average_Price_per_Night int not NULL,
        primary key (id)
)

CREATE table listings (
        id int not NULL,
        name varchar not null,
        neighborhood varchar not null,
        latitude decimal not null,
        longitude decimal not null,
        price decimal not null,
        primary key (id)
)

CREATE table summary (
        id int not null,
        Location varchar not null,
        Burrito VARCHAR not null,
        Neighborhood varchar not null,
        Yelp decimal not null,
        Google decimal not null,
        Cost decimal not null,
        overall decimal not null,
        Total_Listings int not null,
        Average_Price_per_Night int not null,
        primary key (id)
)