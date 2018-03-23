DROP DATABASE IF EXISTS Tales_and_Ales_DB;
CREATE database Tales_and_Ales_DB;

USE Tales_and_Ales_DB;

CREATE TABLE aleslist (
  id INT(11) AUTO_INCREMENT NOT NULL,
  BEERS VARCHAR(255) DEFAULT NULL,
  WINE VARCHAR(255) DEFAULT NULL,
  LIQUOR VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id)  
);




CREATE TABLE taleslist (
  ASIN VARCHAR(10) DEFAULT NULL,
  FILE_NAME VARCHAR(14) DEFAULT NULL,
  IMAGE_URL VARCHAR(59) DEFAULT NULL,
  TITLE VARCHAR(500) DEFAULT NULL,
  AUTHOR VARCHAR(260) DEFAULT NULL,
  CATEGORY_ID INT(2) DEFAULT NULL,
  CATEGORY VARCHAR(30) DEFAULT NULL
  PRIMARY KEY (CATEGORY_ID)
  
);



SELECT * FROM aleslist;
SELECT * FROM taleslist;


SELECT TITLE, IMAGE_URL
FROM taleslist
LEFT JOIN aleslist ON taleslist.CATEGORY_ID =
aleslist.id;