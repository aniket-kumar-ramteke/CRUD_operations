
# CRUD Operations

This is a full-stack project for managing employee data using React for the front-end and Spring Boot for the back-end.

# Overview

- This project demonstrates how to create, read, update, and delete (CRUD) employee records.
- The front-end is built with React, which uses Axios for making HTTP requests to the Spring Boot API.
- The back-end is developed using Spring Boot, providing RESTful web services.
- MySQL is used as the database for storing employee data.

## Getting Started

### Prerequisites

- Ensure you have Node.js and npm installed for running the React front-end.
- You need Java and Maven for the Spring Boot back-end.
- MySQL should be installed and configured with a database named "employee_management_system."

### Installation

1. Clone the Spring Boot project:
   ```bash
   git clone https://github.com/aniket-kumar-ramteke/CRUD_operations.git;
   cd CRUD_operations;

## Database Configuration

- This project uses MySQL as the database management system to store employee data.

### Database Setup

1. Create a MySQL database named "employee_management_system."
   
2. In the Spring Boot project, update the `application.properties` file with your MySQL database configuration:

   ```properties
   spring.datasource.url = jdbc:mysql://localhost:3306/your-database-name?useSSL=false
   spring.datasource.username = your-username
   spring.datasource.password = your-password
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect
   spring.jpa.hibernate.ddl-auto = update

## Run Spring-boot

1. Learn to install Maven. It's a video tutorial by "You-tube Channel - ProgrammingKnowledge2", "Title - How to Install Maven and Configure Environment Variables".  
```html
https://youtu.be/39NhCB5YFSY?si=U0BNLdaMLjWW92yf
```
2. Move inside your springboot-backend and run your project with the help of maven.

```cmd
cd springboot-backend\springboot-backend;

mvn spring-boot:run;
```

## React Configuration
1. Traverse inside react project.
 ```cmd
cd CRUD_operations/employee-app-frontend;
```
2. Install the project dependencies.
```cmd
npm install;
```
3. Start the React application.
```cmd
npm start;
```
## React Configuration
1. Traverse inside react project.
 ```cmd
cd CRUD_operations/employee-app-frontend;
```
2. Install the project dependencies.
```cmd
npm install;
```
3. Start the React application.
```cmd
npm start;
```
## Features

- Create, update, and delete employee records.
- View a list of employees.
- Detailed view for each employee.
- Integration with a Spring Boot RESTful API.
- Cross platform


## Project Structure

- The Spring Boot project consists of controller, model, repository, and exception packages.
- The React project includes components for listing, creating, updating, and deleting employees.
## Usage
- The React app is accessible in the browser at 
```html 
http://localhost:3000
```
- The Spring Boot API endpoints are available at 
```html
http://localhost:8080
```


## Contributing

- Contributions are always welcome!
- If you want to contribute to this project, feel free to create issues or submit pull requests.


## Acknowledgements

 - We'd like to acknowledge the React, Spring Boot, and MySQL communities for their contributions and support.

