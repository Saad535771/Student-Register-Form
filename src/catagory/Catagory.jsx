// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Catagory() {
    const [catagoryname, setCatagoryname] = useState('');
    const [description, setDescription] = useState('');
    const navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        var data = {
            catagoryname,
            description
        };
        try {
            const response = await axios.post('http://localhost:8000/qrcatagories', data);
            console.log(response);
            toast.success('Category added successfully!');
           setTimeout(()=>{
            navigate('/subcategories');
            },3000)
        } catch (error) {
            toast.error('Failed to add category!');
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='w-100'>
                <div className="form-group">
                    <label htmlFor="catagoryNameInput" className='text-dark'>Name Catagory</label>
                    <input
                        type="text"
                        className="form-control"
                        id="catagoryNameInput"
                        placeholder="Enter Your Catagory"
                        value={catagoryname}
                        onChange={(e) => { setCatagoryname(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descriptionInput" className='text-dark text-left'>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="descriptionInput"
                        placeholder="Write Description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <button type="submit" className='btn btn-success mt-3'>
                    Add Catagory
                </button>
            </form>
            <ToastContainer />
        </>
    );
}
