# RoadsideAssistance
Author: Shangjie Zheng | Southern Methodist University
E-mail: shangjiez@mail.smu.edu
1.	Compilation & Implementation platform: Node.js (v18.13.0, download link: https://nodejs.org/en/download
Node.js framework: Express (embedded in WebStorm)
View Engine: EJS (embedded in WebStorm) 
Integrated Development Environment: WebStorm (download link:  https://www.jetbrains.com/webstorm/download/#section=windows)
Database: MySQL (version 8.0.32, download link: https://www.mysql.com/downloads/)
Database GUI: NaviCat 16 for MySQL ( free-trial link: https://www.navicat.com/en/download/navicat-for-mysql)
2.	How to compile this code?
•	Before compiling the code, make sure to create a database that contains three tables, named driver, technician, request. The name of the database in the project was “finalproject” by default. Feel free to make changes in ./sql.js file. Make sure you set the correct password for your host before executing the project (it is set xxxxx by default). 
•	In “driver” table, the property of each attribute is as below:
“ id INT NOT NULL AUTO_INCREMENT,
   userName VARCHAR (255) NOT NULL,
   userPwd VARCHAR (255) NOT NULL,
   userType VARCHAR (255) NOT NULL,
   PRIMARY KEY (id)”
•	In “technician” table, the property of each attribute is as below:
“ id INT NOT NULL AUTO_INCREMENT,
   userName VARCHAR (255) NOT NULL,
   userPwd VARCHAR (255) NOT NULL,
   userType VARCHAR (255) NOT NULL,
   PRIMARY KEY (id)”
•	In “request” table, the property of each attribute is as below:
“ request_id INT NOT NULL AUTO_INCREMENT,
   driver VARCHAR (255) NOT NULL,
   tech VARCHAR (255),
   location VARCHAR (255),
   comment VARCHAR (255),
   status VARCHAR (255) NOT NULL,
   PRIMARY KEY (request_id)”
•	Configure the sql.js file in the project folder.
3.	How to execute the system?
	The system was developed on WebStorm IDE, please execute using WebStorm, run the www.js file under /bin folder.
