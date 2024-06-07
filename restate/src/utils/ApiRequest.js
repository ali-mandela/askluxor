/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAgents, setTopAgents } from "../Rdeux/agentSlice";
import axios from "axios";
import { setItems } from "../Rdeux/searchSlice";
import { setUser } from "../Rdeux/userSlice";



const getAgents = () => {
  const dispatch = useDispatch();
  const agent = useSelector((state) => state.agent.agents); 
  const [isLoading, setIsLoading] = useState(false);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);  

      try {
        const response = await axios.get("/agent/all-agents");
        dispatch(setAgents(response.data.users)); 
      } catch (error) {
        console.error("Error fetching agents:", error);
        setError("Failed to load agents. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
 
  }, [agent]);  

  return { isLoading, error };  
};

const getTopAgents = () => {
    const dispatch = useDispatch();
    // const agent = useSelector((state) => state.agent.topAgents); 
    const [isLoading, setIsLoading] = useState(false);  
    const [error, setError] = useState(null);  
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);  
  
        try {
          const response = await axios.get("/agent/top-agents");
          dispatch(setTopAgents(response.data.users)); 
        } catch (error) {
          console.error("Error fetching agents:", error);
          setError("Failed to load agents. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  
  
    return { isLoading, error };  
  };

  const getItems = () => {
    const dispatch = useDispatch()
    // const agent = useSelector((state) => state.agent.topAgents); 
    const [isLoading, setIsLoading] = useState(false);  
    const [error, setError] = useState(null);  
  
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        setError(null);  
  
        try {
          const {data} = await axios.get("/property/get-all-properties");
          // properties
          dispatch(setItems(data.properties)); 
        } catch (error) {
          console.error("Error fetching agents:", error);
          setError("Failed to load agents. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  
  
    return { isLoading, error };  
  };

const getUser = async (dispatch) => {
    try {
      const { data } = await axios.get("/agent/get-user", {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });
      dispatch(setUser(data.user));
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };
 
export { getAgents,getTopAgents,getItems,getUser };
