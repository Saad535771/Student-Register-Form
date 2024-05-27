import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SubCatagory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:8000/qrcatagories');
                setCategories(response.data);
                toast.success('Categories fetched successfully!');
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                toast.error('Failed to fetch categories!');
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = (e) => {
        var timeout=2000;
        setSelectedCategory(e.target.value);
        toast.success("selcted catagory")
        setTimeout(() => {
            navigate('/registeration');
        }, timeout); // If you want to navigate on change
    };
    return (
        <>
            <h1>Select a Category</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="categorySelect">Category</label>
                    <select 
                        id="categorySelect" 
                        className="form-control" 
                        value={selectedCategory} 
                        onChange={handleCategoryChange}
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.catagoryname}
                            </option>
                        ))}
                    </select>
                </div>
            </form>

            <h1>Category </h1>
            <table className="table table-striped table table-responsive table-borderless">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category._id.slice()}>
                            <th scope="row">{category._id}</th>
                            <td>{category.catagoryname}</td>
                            <td>{category.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </>
    );
};

export default SubCatagory;
