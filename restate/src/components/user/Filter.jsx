/* eslint-disable no-unused-vars */
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import styles from '../../styles/component.module.css';
import {setItems, updateQuery} from '../../Rdeux/searchSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LayoutContainer from '../Layout';

// eslint-disable-next-line react/prop-types
const Filter = ({isNav = false}) => {
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);
    
    const nav =useNavigate()
    const [formData,
        setFormData] = useState(query);

    useEffect(() => {
        setFormData(query);
    }, [query]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch(updateQuery(formData));

        // Make request to /property/search
        console.log(formData);
        const {data} = await axios.post('/property/search', formData) ;

        if(data.success){
        dispatch(setItems(data.response));
       {isNav && nav('/property')}


        }
    };

    return (
        <div className={styles.mainFilter}>
            <div className={styles.firstDiv}>
                <p
                    className={formData.type === 'Rent'
                    ? styles.ac
                    : ''}
                    onClick={() => dispatch(updateQuery({type: 'Rent'}))}>
                    For Rent
                </p>
                <p
                    className={formData.type === 'Buy'
                    ? styles.ac
                    : ''}
                    onClick={() => dispatch(updateQuery({type: 'Buy'}))}>
                    For Buy
                </p>
            </div>

            <div className={styles.secondDiv}>
                <LayoutContainer>
                    <form >
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                            value={formData.title}/>
                        <select name="bedrooms" onChange={handleChange} value={formData.bedrooms}>
                            <option value="" >Any Bedrooms</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3+</option>
                        </select>
                        
                        <select name="bathrooms" onChange={handleChange} value={formData.bathrooms}>
                            <option value="" disabled>Any Bathrooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3+">3+</option>
                        </select>
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            onChange={handleChange}
                            value={formData.address}/>
                        <select name="minPrice" onChange={handleChange} value={formData.minPrice}>
                            <option value="" >Min Price</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                        </select>
                        <select name="maxPrice" onChange={handleChange} value={formData.maxPrice}>
                            <option value="" >Max Price</option>
                            <option value="25000">25000</option>
                            <option value="50000">50000</option>
                            <option value="100000">100000</option>
                            <option value="100000+">100000+</option>
                        </select>

                    </form>
                    <button onClick={handleSubmit} type="submit">Search Properties</button>
                </LayoutContainer>
            </div>
        </div>
    );
};

export default Filter;
