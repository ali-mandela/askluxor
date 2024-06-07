/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from 'axios';
import styles from '../../styles/user/PropertyComponent.module.css';
import { useState } from 'react';
import { toast } from 'react-toastify';

const PropertyForm = ({data}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/user/contact', {formData,data});
            toast(response.data.message);
            setFormData({
                name: '',
                email: '',
                phone: ''
            });
        } catch (error) {
            toast(error.message)
        }
    }

    return (
        <section className={styles.PropertyFormContainer}>
        <h3>Contact Agent</h3>
        <form onSubmit={handleSubmit}>
            <div className={styles.inputRow}>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    value={formData.name} 
                    onChange={handleChange} 
                />
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Email' 
                    value={formData.email} 
                    onChange={handleChange} 
                />
                <input 
                    type='Number' 
                    name='phone' 
                    placeholder='Phone' 
                    value={formData.phone} 
                    onChange={handleChange} 
                />
            </div>
            <button type='submit'>Contact Agent</button>
        </form>
    </section>
    )
}

export default PropertyForm;