/* eslint-disable react-hooks/rules-of-hooks */
import { useRef, useState } from 'react';
import style from '../styles/auth.module.css';
import LayoutContainer from '../../components/Layout';
import img from '../../assets/auth.svg';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        Phone: '',
        password: '',
        bio:'',
        Image: null,
        imagePreview: null 
    }); 
    const navigate = useNavigate()

    const ref = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const { name, files } = e.target;
        if (name === 'image' && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevState => ({
                    ...prevState,
                    Image: file,
                    imagePreview: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const { name, email, Phone, password, Image,bio } = formData;

        
    
        // Check if any required field is empty
        if (!name || !email || !Phone || !password || !Image || !bio ) {
            toast.error('Please fill in all fields.');
            return;
        }
    
        try { 
            const imageForm = new FormData();
            imageForm.append('image', Image);
            const { data } = await axios.post('/agent/upload', imageForm);
            const imagePublicId = data.url; 
    
            const res = await axios.post('/agent/register', {
                name, 
                email,
                Phone,
                password,
                bio,
                Image: imagePublicId 
            });
            const response =await res.data;

            if(response.success == true){
                console.log(response);
                toast('you have registred succesfully,you can login oce admin approves your profile,this can take upto 12 hours'); 
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    password: '',
                    bio: '',
                    Image: null,
                    imagePreview: null
                });
                navigate('/')
            }else{
                toast(response.message)
            }
     
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('Registration failed. Please try again.');
        }
    };
    
    return (
        <LayoutContainer bgColor="#fff">
            <div className={style.registerContainer}>
                <div className={style.imgContainer}>
                    <img src={img} alt="left bg" />
                </div>

                <div className={style.formContainer}>
                    <h1>Welcome to askLuxor</h1>
                    <h3>Partner register portal</h3>
                    <form onSubmit={handleSubmit}>
                        <div className={style.formGroup}>
                            <img
                                src={formData.imagePreview || 'https://placehold.co/100x100'}
                                alt="Preview"
                                onClick={() => ref.current.click()}
                            />
                            <br />
                            <label>{formData !== null ? "Upload your image" : "image uploaded succesfully"}</label>
                            <input
                                type="file"
                                name="image"
                                ref={ref}
                                hidden
                                accept=".jpeg, .png, .jpg"
                                onChange={handleImageUpload}
                            />
                        </div>
                        <div className={style.formGroup}>
                            <input
                                name="name"
                                type='text'
                                required
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}/>
                        </div>
                        <div className={style.formGroup}>
                            <input
                                name="email"
                                type='email'
                                required
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}/>
                        </div>
                        <div className={style.formGroup}>
                            <textarea
                                name="bio"
                                type='text'
                                required
                                placeholder="About you"
                                rows={10}
                                value={formData.bio}
                                onChange={handleChange}/>
                        </div>
                        <div className={style.formGroup}>
                            <input
                                name="Phone"
                                type='number'
                                required
                                placeholder="Enter your Phone"
                                value={formData.Phone}
                                onChange={handleChange}/>
                        </div>
                        <div className={style.formGroup}>
                            <input
                                name="password"
                                required
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}/>
                        </div>
                        {/* Repeat similar blocks for other form fields */}
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </LayoutContainer>
    );
};

export default RegisterPage;
