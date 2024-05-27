import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Registeration() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState();
    const [city, setCity] = useState('');
    const [cnic, setCnic] = useState();
    const [selectedOption, setSelectedOption] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState();
    // Function to format CNIC
    const handleCnicChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        if (value.length <= 13) {
            if (value.length > 5 && value.length <= 12) {
                value = value.replace(/(\d{5})(\d{7})/, '$1-$2');
            } else if (value.length > 12) {
                value = value.replace(/(\d{5})(\d{7})(\d{1})/, '$1-$2-$3');
            }
            setCnic(value);
        }
    };
    // Function to generate registration number based on the selected option
    const generateRegistrationNumber = (option) => {
        const currentTimestamp = Date.now();
        return `${option.toUpperCase()}_${currentTimestamp}`;
    };

    useEffect(() => {
        if (selectedOption) {
            setRegistrationNumber(generateRegistrationNumber(selectedOption));
        }
    }, [selectedOption]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            city,
            cnic,
            selectedOption,
            registrationNumber
        };

        try {
            const response = await axios.post('http://localhost:8000/registers', data);
            console.log(response);
            toast.success('Registration successful!');
        } catch (error) {
            toast.error('Registration failed!');
            console.log(error);
        }
    };

    return (
        <>
            <section>
                <form onSubmit={handleSubmit} className="text-start">
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-12">
                                <div className="">
                                    <div className="p-0">
                                        <div className="row d-flex justify-content-center g-0">
                                            <div className="col-lg-12 box  shadow-lg">
                                                <div className="p-5">
                                                    <h1 className="fw-large text-center mb-5">
                                                        Student Data
                                                    </h1>
                                                    <div className="mb-4 pb-2">
                                                        <div data-mdb-input-init className="form-outline form-white">
                                                            <label className="form-label" htmlFor="form3Examplea2">
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="form3Examplea2"
                                                                className="form-control form-control-lg"
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <label className="form-label" htmlFor="form3Examplea9">
                                                                Phone
                                                            </label>
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="form3Examplea8"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="+9233333233"
                                                                    onChange={(e) => setPhone(e.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <label className="form-label" htmlFor="form3Examplea9">
                                                                City
                                                            </label>
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="form3Examplea8"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="Enter Your City Name"
                                                                    onChange={(e) => setCity(e.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="form-group pb-2">
                                                                <label htmlFor="skillSelect" className="form-label">
                                                                    Select your skill:
                                                                </label>
                                                                <select
                                                                    id="skillSelect"
                                                                    value={selectedOption}
                                                                    onChange={(e) => setSelectedOption(e.target.value)}
                                                                    className="form-control form-control-lg"
                                                                >
                                                                    <option value="">Select a skill</option>
                                                                    <option value="web">Web</option>
                                                                    <option value="shopify">Shopify</option>
                                                                    <option value="graphic-designing">Graphic Design</option>
                                                                    <option value="autocad">AutoCAD</option>
                                                                </select>
                                                                <label htmlFor="registrationNumber" className="form-label">
                                                                    Registration number:
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    id="registrationNumber"
                                                                    className="form-control form-control-lg"
                                                                    value={registrationNumber}
                                                                    readOnly
                                                                    onChange={(e)=>setRegistrationNumber(e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <div className="mb-4">
                                                                <div data-mdb-input-init className="form-outline form-white">
                                                                    <label className="form-label" htmlFor="form3Examplea9">
                                                                        CNIC
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        id="form3Examplea9"
                                                                        className="form-control form-control-lg"
                                                                        value={cnic}
                                                                        onChange={handleCnicChange}
                                                                        required
                                                                    />
                                                                </div>
                                                                <div data-mdb-input-init className="form-outline form-white">
                                                                    <label className="form-label" htmlFor="form3Examplea9">
                                                                        Your Email
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        id="form3Examplea9"
                                                                        className="form-control form-control-lg"
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                        required
                                                                    />
                                                                </div>
                                                                <ToastContainer />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="submit"
                                                        data-mdb-button-init
                                                        data-mdb-ripple-init
                                                        className="btn btn-success btn-lg"
                                                        data-mdb-ripple-color="dark"
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}
