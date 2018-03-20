CREATE DATABASE ales_db;
USE ales_db;

CREATE TABLE ales(
id int AUTO_INCREMENT,
PRIMARY KEY (id),
drink_name varchar(50) NOT NULL,
date TIMESTAMP);
