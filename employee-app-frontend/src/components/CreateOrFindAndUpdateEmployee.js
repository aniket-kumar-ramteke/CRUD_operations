import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateOrFindAndUpdateEmployee = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    emailId: ''
  });

  useEffect(() => {
    if (id == -1) {
      return;
    } else {
      findEmployeeData();
    }
    return () => {
    }
  }, [])

  const findEmployeeData = () => {
    EmployeeService.getEmployee(id)
      .then((response) => {
        setEmployee(response.data)
      })
  }

  const inputChangeHandler = (event) => {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  }

  const createOrUpdateEmployee = (event) => {
    event.preventDefault();
    if (id == -1) {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          window.alert(`You added ${response.data.firstName} !`);
          navigate("/employees");
        });
    } else {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          window.alert(`You updated records for ${response.data.firstName} !`);
          navigate("/employees");
        });
    }
  }

  const getTitle = () => {
    if (id == -1) {
      return <h3 className="text-center"> Create Employee </h3>
    } else {
      return <h3 className="text-center"> Update Employee </h3>
    }
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={employee.firstName}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={employee.lastName}
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Email Id:</label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={employee.emailId}
                    onChange={inputChangeHandler}
                  />
                </div>
                <br />
                <div className="form-group text-center">
                  <button className="btn btn-success" onClick={createOrUpdateEmployee}>
                    Save
                  </button>
                  <Link to={'/employees'} className='btn btn-danger' title='Cancel' style={{ marginLeft: "10px" }} > Cancel </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateOrFindAndUpdateEmployee;