// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [remarks, setRemarks] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState('');
    const [subcategories, setSubcategories] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState('');

    // Fetch subcategories on component mount
    useEffect(() => {
        const fetchSubcategories = async () => {
            try {
                const response = await axios.get('http://localhost:8000/subcategories');
                setSubcategories(response.data);
                console.log('Subcategories:', response.data);
            } catch (error) {
                console.error('Error fetching subcategories:', error);
                toast.error('Failed to fetch subcategories!');
            }
        };

        fetchSubcategories();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            phone1,
            phone2,
            mobile,
            address,
            remarks,
            date,
            status,
            subcategory: selectedSubcategory   // Added subcategory to data
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
                <form onSubmit={handleSubmit} >
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 ">
                                <div className="">
                                    <div className="p-0">
                                        <div className="row d-flex justify-content-center g-0">
                                            <div className="col-lg-12 box shadow-lg">
                                                <div className="p-5">
                                                    <h1 className="fw-large text-center ">
                                                        Student Data
                                                    </h1>
                                                    <div className="mb-4 ">
                                                        <div data-mdb-input-init className="form-outline form-white">
                                                            <label className="form-label" htmlFor="form3Examplea2">
                                                                Name
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="form3Examplea2"
                                                                className="form-control form-control-lg"
                                                                onChange={(e) => setName(e.target.value)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div data-mdb-input-init className="form-outline form-white">
                                                        <label className="form-label" htmlFor="form3Examplea9">
                                                            Your Email
                                                        </label>
                                                        <input
                                                            type="email"
                                                            id="form3Examplea9"
                                                            className="form-control form-control-lg"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-3 mb-4 pb-2">
                                                            <label className="form-label" htmlFor="form3Examplea8">
                                                                Date
                                                            </label>
                                                            <div data-mdb-input-init className="form-outline  form-white">
                                                                <input
                                                                    type="date"
                                                                    id="form3Examplea8"
                                                                    className="form-control form-control-lg"
                                                                    onChange={(e) => setDate(e.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-9 mb-4 pb-2">
                                                            <label className="form-label" htmlFor="form3Examplea8">
                                                                Address
                                                            </label>
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="form3Examplea8"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="Address"
                                                                    onChange={(e) => setAddress(e.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <label className="form-label" htmlFor="form3Examplea8">
                                                                Phone 1
                                                            </label>
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="form3Examplea8"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="+9233333233"
                                                                    onChange={(e) => setPhone1(e.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-4 pb-2">
                                                            <label className="form-label" htmlFor="form3Examplea8">
                                                                Phone 2
                                                            </label>
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="form3Examplea8"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="+9233333233"
                                                                    onChange={(e) => setPhone2(e.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="form-label" htmlFor="form3Examplea8">
                                                                Mobile
                                                            </label>
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <input
                                                                    type="text"
                                                                    id="form3Examplea8"
                                                                    className="form-control form-control-lg"
                                                                    placeholder="+9233333233"
                                                                    onChange={(e) => setMobile(e.target.value)}
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 ">
                                                            <label className="form-label" htmlFor="form3Examplea8">
                                                                Status
                                                            </label>
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <select
                                                                    id="form3Examplea8"
                                                                    className="form-control form-control-lg"
                                                                    value={status}
                                                                    onChange={(e) => setStatus(e.target.value)}
                                                                    required
                                                                >
                                                                    <option value="">Select Status</option>
                                                                    <option value="open">Open</option>
                                                                    <option value="close">Close</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 ">
                                                            <label className="form-label" htmlFor="form3Examplea8">
                                                                Subcategory
                                                            </label>
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <select
                                                                    id="form3Examplea8"
                                                                    className="form-control form-control-lg"
                                                                    value={selectedSubcategory}
                                                                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                                                                    required
                                                                >
                                                                
                                                                    <option value="">Select Subcategory</option>
                                                                    {subcategories.map((subcategory) => (
                                                                        <option key={subcategory._id} value={subcategory._id}>
                                                                            {subcategory.name}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="mb-4">
                                                                <div data-mdb-input-init className="form-outline form-white">
                                                                    <label className="form-label" htmlFor="form3Examplea9">
                                                                        Remarks
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        id="form3Examplea9"
                                                                        className="form-control form-control-lg"
                                                                        onChange={(e) => setRemarks(e.target.value)}
                                                                    />
                                                                </div>
                                                                <ToastContainer />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='text-center'>

                                                    <button className="btn btn-success"
                                                        type="submit"
                                                        data-mdb-button-init
                                                        data-mdb-ripple-init
                                                        data-mdb-ripple-color="dark"
                                                    >  Add Query
                                                    </button>
                                                    </div>
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
