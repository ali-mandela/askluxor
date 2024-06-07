/* eslint-disable react/no-unescaped-entities */
import style from '../styles/auth.module.css';
import LayoutContainer from '../../components/Layout';
import img from '../../assets/auth.svg';

import {useState} from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';   
const LoginPage = () => {

    const [formData,
        setFormData] = useState({email: '', password: ''});
        const navigate = useNavigate()
 

    const handleChange = (e) => {

        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));

    };

    const handleSubmit =async (e) => {
        e.preventDefault();

        const {email, password} = formData;
        if (!email ||  !password   ) {
            toast.error('Please fill in all fields.');
            return;
        }

        try {
            const response = await axios.post('/agent/login', {
                email, password
            })

            const data = response.data;

            if(data.success){
                 
                if(response.status == '201'){
                    toast(data.message)
                    navigate('/')
                }else if(data.role == 'USER'){ 
                    toast(data.message);
                    localStorage.setItem('token', data.token);
                    navigate('/agent/post-a-property')

                }else{
                    toast(data.message);
                    localStorage.setItem('token', data.token);
                    navigate('/agent/admin/dashboard')
                }
                setFormData({})

            }else{
                toast(data.message)
            }
 
            
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('Login failed. Please try again.', error.message);
            
        }
    };

    return (
        <LayoutContainer>
            <div className={style.registerContainer}>
                <div className={style.imgContainer}>
                    <img src={img} alt="left bg"/>
                </div>

                <div className={style.formContainer}>
                    <h1>Welcome to askLuxor</h1>
                    <h3>Partner's login portal</h3>
                    <form onSubmit={handleSubmit}>

                        <div className={style.formGroup}>
                            <input
                                name="email"
                                type='email'
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}/>
                        </div>
                        <div className={style.formGroup}>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}/>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>

            </div>

        </LayoutContainer>

    )
}

export default LoginPage