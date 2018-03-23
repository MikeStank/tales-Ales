CREATE DATABASE tales_db;
USE tales_db;

CREATE TABLE tales(
id int AUTO_INCREMENT,
PRIMARY KEY (id),
book_name varchar(50) NOT NULL,
date TIMESTAMP);
