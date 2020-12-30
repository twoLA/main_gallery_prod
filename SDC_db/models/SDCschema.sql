-- MySQL

  -- Table options:
    -- listing
    -- images
    -- tags (either separate or in listing)

  -- More tables...
  -- (-) Will slow queries
  -- (+) Flexible/modular

  -- Enforce validation, nothing null.

  -- 'City' allows 17 characters for the longest city name in the US
  -- 17 letters: Mooselookmeguntic, Maine


-- MongoDB:

  -- If images are in an array, how easy is it to switch order? Do we even need to?

  -- Also enforce full form, nothing empty.

  -- too much nesting article?? ?
  -- bunching
  -- only id's
  -- references

-- does not exist statements?
-- use BOOLEAN or BIT?
-- Why is 'State' color coded?
-- TEXT or VARCHAR FOR Url?


-- each variable is a column
CREATE DATABASE SDC;
USE listings;

CREATE TABLE listings(
  listingId INT NOT NULL AUTO_INCREMENT,
  price INT NOT NULL,
  street VARCHAR(50) NOT NULL,
  city VARCHAR(20) NOT NULL,
  state VARCHAR(5) NOT NULL,
  zip INT(5) NOT NULL,

  new BOOLEAN NOT NULL,
  sale BOOLEAN NOT NULL,
  sold BOOLEAN NOT NULL,
  construction BOOLEAN NOT NULL,

  PRIMARY KEY (listingId)
);

CREATE TABLE images(
  imageId INT NOT NULL AUTO_INCREMENT,
  link VARCHAR(255),
  listingId INT NOT NULL,

  PRIMARY KEY (imageId)
);

INSERT INTO images VALUES (0, "link", 1);

-- FOREIGN KEY (ListingId) REFERENCES listings(ListingId)

-- check server running
-- mysql < SDC_db/models/SDCschema.sql

INSERT INTO listings (price, street, city, state, zip, new, sale, sold, construction) VALUES (5, 300000, "18962 Sandy Road", "Castro Valley", "CA", 94546, false, false, true, false);

INSERT INTO listings VALUES (0, 300000, "18962 Sandy Road", "Castro Valley", "CA", 94546, false, false, true, false);

TRUNCATE TABLE listings;
TRUNCATE TABLE images;

LOAD DATA
LOCAL
INFILE '/Users/GLaDOS/Documents/HRSF131/SDC/main_gallery_sdc/seeding/listingSeed.csv'
INTO TABLE listings
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 0 LINES;

LOAD DATA
LOCAL
INFILE '/Users/GLaDOS/Documents/HRSF131/SDC/main_gallery_sdc/seeding/imageSeed.csv'
INTO TABLE images
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 0 LINES;


-- SHOW VARIABLES LIKE "secure_file_priv";

-- does varchar include quotations in its count?
-- for state only loads if varchar is 5
-- counting quotations and comma??