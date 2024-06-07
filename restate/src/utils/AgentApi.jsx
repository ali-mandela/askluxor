/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux"; 

export const getAgentsToVerify = () => {
    const dispatch = useDispatch();
    const [isLoading,
        setIsLoading] = useState(false);
    const [agents,
        setAgents] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            setIsLoading(true);

            try {
                const response = await axios.get("/agent/agents-Verify", {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                });
                dispatch(setAgents(response.data.users));
            } catch (error) {
                console.error("Error fetching agents:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();

    }, [dispatch]);

    return {isLoading, agents};
};

export const useAgentData = ({id}) => {  
    const [agent,
        setAgent] = useState(null);
    const [loading,
        setLoading] = useState(true);
    const [error,
        setError] = useState(null);

    const getAgent = async() => {
        try {
            const {data} = await axios.get(`/agent/get-agent/${id}`);
            setAgent(data.agent);
            setLoading(false);
        } catch (error) {
            setError(error.response
                ? error.response.data.message
                : error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        getAgent();
    }, [id]);

    return {error, loading, agent};
};


export const getAgentProperties = ({id}) =>{
  const [properties,
    setProperties] = useState(null);
const [loading,
    setLoading] = useState(true);
const [error,
    setError] = useState(null);

const getAgent = async() => {
    try {
        const {data} = await axios.get(`/property/get-properties/${id}`);
        setProperties(data.properties);
        setLoading(false);
    } catch (error) {
        setError(error.response
            ? error.response.data.message
            : error.message);
        setLoading(false);
    }
};

useEffect(() => {
    getAgent();
}, [id]);

return {error, loading, properties};
};

