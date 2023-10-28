import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faUserPlus, faEye } from '@fortawesome/free-solid-svg-icons';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    EmployeeService.getEmployees()
      .then((response) => {
        setEmployees(response.data);
      });
  }, []);

  return (
    <div>
      <h2 className='text-center'><u>Employees List</u></h2>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <Link to={`/employees/${employee.id}`} className='btn btn-outline-success btn-sm' title='edit'>
                    <FontAwesomeIcon icon={faPenToSquare} /> Edit
                  </Link>
                  <Link to={`/delete-employee/${employee.id}`} style={{ marginLeft: "10px" }} className='btn btn-outline-danger btn-sm' title='delete'>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </Link>
                  <Link to={`/employee/${employee.id}`} style={{ marginLeft: "10px" }} className='btn btn-outline-primary btn-sm' title='delete'>
                    <FontAwesomeIcon icon={faEye} /> View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={'/employees/-1'} className='btn btn-outline-primary' title=' Add Employee '>
          <FontAwesomeIcon icon={faUserPlus} /> Add Employee
        </Link>
      </div>
    </div>
  );
}

export default EmployeeList;
