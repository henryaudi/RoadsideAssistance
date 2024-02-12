# Roadside Assistance Application

## Introdiction

Roadside Assistance Application is a web application developed by Shangjie Zheng at Southern Methodist University. This application aims to connect drivers with roadside assistance technicians, facilitating requests for help in real-time. The system is built using Node.js and Express.js, with EJS as the view engine and MySQL for database management.

## Requirements

- **Node.js:** v18.13.0 or above. [Download Node.js](https://nodejs.org/en/download/)
- **Express:** Included with the project setup in WebStorm.
- **EJS:** Included with the project setup in WebStorm.
- **Integrated Development Environment:** WebStorm. [Download WebStorm](https://www.jetbrains.com/webstorm/download/#section=windows)
- **Database:** MySQL version 8.0.32 or above. [Download MySQL](https://www.mysql.com/downloads/)
- **Database GUI:** NaviCat 16 for MySQL. [Free-trial of NaviCat for MySQL](https://www.navicat.com/en/download/navicat-for-mysql)

## Installation

1. **Clone the repository:**
```bash
git clone https://github.com/henryaudi/RoadsideAssistance.git
```
2. **Navigate to the project directory**
```bash
cd RoadsideAssistance
```
3. Install dependencies
```bash
npm install
```

## Database Setup

1. **Create a MySQL database named `finalproject` (or another name if you modify in the ./config.env file accordingly, will touch the creation of config.env in the content below)**
2. **Create tables in your database using the following SQL commands:**
```sql
-- Driver table
CREATE TABLE driver (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(255) NOT NULL,
  userPwd VARCHAR(255) NOT NULL,
  userType VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Technician table
CREATE TABLE technician (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(255) NOT NULL,
  userPwd VARCHAR(255) NOT NULL,
  userType VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Request table
CREATE TABLE request (
  request_id INT NOT NULL AUTO_INCREMENT,
  driver VARCHAR(255) NOT NULL,
  tech VARCHAR(255),
  location VARCHAR(255),
  comment VARCHAR(255),
  status VARCHAR(255) NOT NULL,
  PRIMARY KEY (request_id)
);
```
3. **Create a `config.env` file: in the root of your project directory, create a new file named "config.env".**
4. **Add database configuration: Open the `config.env` file with a text editor and add the following environment variables, adjusting the values according to your database setup:**
```
DB_HOST=localhost
DB_USER=yourDBUsername
DB_PASSWORD=yourDBPassword
DB_DATABASE=yourDBNameForThisProject  // finalproject by default
```

## Running the Project
1. **After completing the installation and database setup, you can start the application by running the following command in your project root directory:**
```bash
npm run start
```
2. ** Access the application through your web browser by navigating to `http://localhost:3000` or the port you have configured your server to listen on.

## Author
**Shangjie Zheng**

- **Affiliation:** Southern Methodist University
- **E-mail:** [shangjiez@mail.smu.edu](mailto:shangjiez@mail.smu.edu)

Feel free to reach out for any question or contributions to the project.
