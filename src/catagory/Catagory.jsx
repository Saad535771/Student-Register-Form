import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Catagory(props) {
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
           setTimeout((e)=>{
            navigate('/subcatagory');
            },3000)
        } catch (error) {
            toast.error('Failed to add category!');
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center'>
                <div className="form-group">
                    <label htmlFor="catagoryNameInput" className='text-white'>Name Catagory</label>
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
                    <label htmlFor="descriptionInput" className='text-white text-left'>Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="descriptionInput"
                        placeholder="Write Description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </div>
                <button type="submit" className="animated-button1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="text-size-sm">Add Catagory</div>
                </button>
            </form>
            <ToastContainer />
            <div className='row'>
                <Link to="/" className="animated-button1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className="text-size-sm">Home</div>    
                </Link>
            </div>
        </>
    );
}
