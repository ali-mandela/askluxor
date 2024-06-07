import { useEffect, useState } from 'react';
import LayoutContainer from '../../components/Layout';
import PropertyTable from '../components/PropertyTable';
import style from '../styles/myproperties.module.css';
import axios from 'axios';
import { toast } from 'react-toastify';  // Assuming you are using react-toastify for notifications

const MyProperties = () => {
    const [myProperties, setMyProperties] = useState([]); 

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const {data} = await axios.get('/property/get-all-properties-of-user', {
                    headers: {
                        Authorization:  localStorage.getItem('token')
                    }
                });

                if(data.success){
                    setMyProperties(data.properties)
                }else{
                    toast(data.message)

                }
                
            } catch (err) {
                console.error('Error fetching properties:', err);
                 toast.error('Failed to fetch properties. Please try again later.');
            }  
        };

        fetchProperties();
    }, []);

   

    return (
        <LayoutContainer>
            <div className={style.propertyContainer}>
                <h1>My Properties</h1>
                {myProperties.length > 0 ? (
                    <PropertyTable data={myProperties} />
                ) : (
                    <p>No properties found.</p>
                )}
            </div>
        </LayoutContainer>
    );
}

export default MyProperties;
