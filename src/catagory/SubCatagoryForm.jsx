// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SubCategoryForm = () => {
  const [categories, setCategories] = useState([]);
  const [, setSubCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [allSubCategories, setAllSubCategories] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editSubCategoryId, setEditSubCategoryId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/qrcatagories');
        setCategories(response.data);
        console.log('Categories:', response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to fetch categories!');
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchSubCategories = async () => {
      if (selectedCategory) {
        try {
          const response = await axios.get(`http://localhost:8000/subcategories/${selectedCategory}`);
          setSubCategories(response.data);
          console.log('Subcategories:', response.data);
        } catch (error) {
          console.error('Error fetching subcategories:', error);
          toast.error('Failed to fetch subcategories!');
        }
      } else {
        setSubCategories([]);
      }
    };

    fetchSubCategories();
  }, [selectedCategory]);

  useEffect(() => {
    const fetchAllSubCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8000/subcategories');
        setAllSubCategories(response.data);
        console.log('All Subcategories:', response.data);
      } catch (error) {
        console.error('Error fetching all subcategories:', error);
        toast.error('Failed to fetch all subcategories!');
      }
    };

    fetchAllSubCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting subcategory:', { name, description, category: selectedCategory });
    try {
      if (editMode) {
        const response = await axios.put(`http://localhost:8000/subcategories/${editSubCategoryId}`, {
          name,
          description,
          category: selectedCategory
        });
        toast.success('Subcategory updated successfully!');
        console.log(response.data);
      } else {
        const response = await axios.post('http://localhost:8000/subcategories', {
          name,
          description,
          category: selectedCategory
        });
        toast.success('Subcategory created successfully!');
        console.log(response.data);
      }

      setTimeout(() => {
        navigate("/registeration");
      }, 2000);

      setName('');
      setDescription('');
      setSelectedCategory('');
      setEditMode(false);
      setEditSubCategoryId(null);

      const updatedSubCategories = await axios.get('http://localhost:8000/subcategories');
      setAllSubCategories(updatedSubCategories.data);
    } catch (error) {
      console.error('Error creating/updating subcategory:', error);
      toast.error('Failed to create/update subcategory!');
    }
  };

  const handleEdit = (subCategory) => {
    setName(subCategory.name);
    setDescription(subCategory.description);
    setSelectedCategory(subCategory.category._id);
    setEditMode(true);
    setEditSubCategoryId(subCategory._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/subcategories/${id}`);
      toast.success('Subcategory deleted successfully!');
      const updatedSubCategories = await axios.get('http://localhost:8000/subcategories');
      setAllSubCategories(updatedSubCategories.data);
    } catch (error) {
      console.error('Error deleting subcategory:', error);
      toast.error('Failed to delete subcategory!');
    }
  };

  return (
    <>
      <div className='text-dark text-dark'>
        <h1>{editMode ? 'Edit Subcategory' : 'Create Subcategory'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="form-control" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea 
              id="description" 
              className="form-control" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="categorySelect">Main Category</label>
            <select 
              id="categorySelect" 
              className="form-select " 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)} 
              required
            >
              <option value="" className='text-secondary'>Assign Your Main Category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.catagoryname}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className=" animated-button1">
            {editMode ? 'Update Subcategory' : 'Create Subcategory'}
          </button>
        </form>
        <ToastContainer />

        <h2>All Categories Listing</h2>
        <table className="table table-striped boxtable">
          <thead className='boxtable'>
            <tr>
              <th>Main Category</th>
              <th>Subcategory Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allSubCategories.map((sub) => (
              <tr key={sub._id}>
                <td>{sub.category.catagoryname}</td>
                <td>{sub.name}</td>
                <td>{sub.description}</td>
                <td>
                  <button onClick={() => handleEdit(sub)} className="btn btn-success m-2">Edit</button>
                  <button onClick={() => handleDelete(sub._id)} className="btn btn-success m-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SubCategoryForm;
