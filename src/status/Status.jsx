// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Status() {
    const [registrations, setRegistrations] = useState([]);
    useEffect(() => {
        const fetchRegistrations = async () => {
            try {
                const response = await axios.get('http://localhost:8000/registers');
                setRegistrations(response.data);
            } catch (error) {
                console.error('Error fetching registrations:', error);
            }
        };

        fetchRegistrations();
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center mb-5">Registrations Status</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-12">
                    <div className="box shadow-lg">
                        <div className="p-5">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone 1</th>
                                        <th>Phone 2</th>
                                        <th>Mobile</th>
                                        <th>Address</th>
                                        <th>Remarks</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Subcategory</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {registrations.map((registration) => (
                                        <tr key={registration._id}>
                                            <td>{registration._id}</td>
                                            <td>{registration.name}</td>
                                            <td>{registration.email}</td>
                                            <td>{registration.phone1}</td>
                                            <td>{registration.phone2}</td>
                                            <td>{registration.mobile}</td>
                                            <td>{registration.address}</td>
                                            <td>{registration.remarks}</td>
                                            <td>{registration.date}</td>
                                            <td>{registration.status}</td>
                                            <td>{registration.subcategory}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
