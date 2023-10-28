import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const ViewEmployee = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        emailId: ''
    });

    useEffect(() => {
        findEmployeeData();
        return () => {
        }
    }, [])

    const findEmployeeData = () => {
        EmployeeService.getEmployee(id)
            .then((response) => {
                setEmployee(response.data)
            })
    }

    return (
        <div>
            <div className='container'>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <div className='text-center'>
                            <h3> View Employee </h3>
                        </div>
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
                                <Link to={'/employees'} className='btn btn-danger' title='Go-Back'>
                                    <FontAwesomeIcon icon={faArrowLeft} /> Go Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewEmployee