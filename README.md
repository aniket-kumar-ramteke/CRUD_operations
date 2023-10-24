# CRUD_operations
#1.We're creating an employee CRUD project.
#2.We're using React as front-end.
3.We're using Java as spring-boot for making restfull web services.
4.It will our full stack application.
5.React is not concerned with http calls that's why we're using "axios" library for this.
6.We create a springboot project("https://start.spring.io/") first with below mentioned dependencies:-
	1. Spring Boot DevTools
	2. Spring Data JPA
	3. MySQL Driver
	4. Spring Web
7.We are using jar packaging, maven for this Spring boot project and when we download it will extract it first then import it in eclipse.


8.Create database in Mysql first (employee_management_system) then go to java src/main/resources-> application.properties

	inside this file->spring.datasource.url = jdbc:<dB software name - mysql>://localhost:<port number of that software - 3306 >/<database name - employee_management_system>?useSSL=false
			->spring.datasource.username = <username>
			->spring.datasource.password = <password>
			->spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5InnoDBDialect
			->spring.jpa.hibernate.ddl-auto = update
9.Create Packages inside parent package - controller , model , repository , exception.
10.Next we go on model package and create our classes As Employee.
11.Now go to repository package and create an Employee repository(Interface extending JpaRepository) for employee class.
12.Go and create Custom Exception class (ResourceNotFoundException) in exception package.

13.Go to controller package and then create controller class now 

14.Create a new react app using "npx create-react-app <Project_name>".
	->react team has recommended to use jsx type code in ract app 
	->all react components are rendered inside root element which is present in the "index.HTML" file.
15.Add "bootstrap" to your project.
	->npm i bootstrap --save     [we're writing --save for making entry in package.json - ye older versions me hota tha , 
					abhi simply "npm i bootstrap" likne se bhi package.json me entry hota hai]
16.Create a folder named as "component" under src folder inside that :-
			-> ListEmployeeComponent.js is created [class component]
17.Add "axios" to your project.
	->npm i axios [axios is also a library which used to handle HTTP call(GET POST PUT DELETE)]
	->we're using axios here for interacting with REST API created in JAVA.
18.Create new folder called as "services".[services ka kaam hoga axios ka use karke REST API ki functionalies ka use karna].
19.Go to Components folder add 2 new components as "HeaderComponent" and "FooterComponet".
20.Installing router dom for Routing by using "npm i react-router-dom".
	-> import Route,Routes,BrowserRouter from 'react-router-dom';
	-> <BrowserRouter>
          	<HeaderComponent />
           	     <Routes>
          	    	<Route path="/" element={<EmployeeList />} />
                     </Routes>
          	<FooterComponent />
      	   </BrowserRouter>
21.Go to controller class in java and create a post method for entering the employee in database.

you want to give annotations as @RequestBody before Employee employee object.---- for model-binding. 
22.In react make CreateEmployeeComponent.js inside components.
23.Do Routing for CreateEmployeeComponent by creating a button in the homepage.
24.Create form inside CreateEmployeeComponent.js where 2 buttons have given one "save" and one "cancel".
		->save will redirect to -> saveEmployee function where it will call -> service class method which ultimately call -> axios library createEmployee function -> then navigate 					back to employee list component
		->cancel will redirect to employee list component.
25.We're using useState hook to save modification of form data.
26.We're using useNavigate of "react-router-dom" for navigating one page to another.
27.create another method for finding one employee by id in Employee Controller which is returning ResponseEntity<Employee> if ok(200) , if not then it will throw error.
28.create another method for updating an employee 
	-> first we need to find one employee by id / if not found we'll throw ResourceNotFoundException.
	-> next we need to update the same employee which we found. 
	-> then we will do employeeRepository.save(updatedEmployee).
29.we have now merged the 2 method components {create and update} in react js into one component.
	-> route is employee/{id}
		-> if id == -1 -> logic of create employee.
		-> if id != -1 -> logic of updating employee.
30.at last we're add one more method in controller class name as deleteEmployee we're using deleteMapping(/employee/{id}) here  
31.Also create delete component here in react js so that you can delete elements up there.
