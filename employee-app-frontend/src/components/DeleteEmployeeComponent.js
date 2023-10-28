import React,{ useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const DeleteEmployeeComponent = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {
        findEmployeeData();
    }, [])

    const findEmployeeData = () => {
        EmployeeService.getEmployee(id)
            .then((response) => {
                setEmployee(response.data)
            });
    }

    const deleteEmployee = (event) => {
        event.preventDefault();
        if (window.confirm(`Are you sure to delete records of ${employee.firstName} with id: ${id}`))
        {
            EmployeeService.deleteEmployee(id)
            .then((response) => {
                if (response.data.deleted) {
                    window.alert(`You deleted records!`);
                navigate("/employees");   
                }
            });
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3> Delete Employee </h3>
                        <div className="card-body">
                                <div className="form-group">
                                    <p><b>First Name: </b>{employee.firstName}</p>
                                </div>
                                <div className="form-group">
                                    <p><b>Last Name: </b>{employee.lastName}</p>
                                </div>
                                <div className="form-group">
                                    <p><b>Email: </b>{employee.emailId}</p>
                                </div>
                                <br />
                                <div className="form-group text-center">
                                    <button className="btn btn-success" onClick={deleteEmployee}>
                                        Delete
                                    </button>
                                    <Link to={'/employees'} className='btn btn-danger' title='Cancel' style={{ marginLeft: "10px" }} > Cancel </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteEmployeeComponent;