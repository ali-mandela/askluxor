/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import LayoutContainer from '../../components/Layout';
import {  useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../utils/Spinner';
import PropertyAgentComponent from '../../components/user/PropertyAgentComponent';
import PropertyForm from '../../components/user/PropertyForm';
import PropertyContent from '../../components/user/PropertyContent';

const Property = () => {
    const { id } = useParams();
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const { data } = await axios.get(`/property/get-property/${id}`);
                if (data.success) {
                    setPropertyDetails(data.property);
                } 
            } catch (err) {
                console.log(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPropertyDetails();
    }, [id]);

    if (loading) {
        return <LayoutContainer><Spinner/></LayoutContainer>;
    } 

    return (
        <LayoutContainer> 
        <PropertyContent data={propertyDetails} /> 
        <PropertyAgentComponent data={propertyDetails.agent}/>
        <PropertyForm data={propertyDetails}/>
        </LayoutContainer>
    );
};


 
 
export default Property;
