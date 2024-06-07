/* eslint-disable react/prop-types */
import axios from 'axios';
import styles from './admin.module.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from 'react-toastify';

const AgentComponent = ({ item }) => {

  const verifyAgent = async (id) => {
    try {
      const { data } = await axios.put(`/agent/verify/${id}`, null, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });

      if (data.success) {
        toast.success(data.message);
       } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className={styles.agentContainer}>
      <div>
        <img src={item.image} alt='Agent' className={styles.agentImage} />
        <div className={styles.agentInfo}>
          <h3>{item.name}</h3>
          <p className={styles.agentEmail}><MdEmail/> {item.email}</p>
          <p className={styles.agentPhone}><FaPhoneAlt/> {item.Phone}</p>
          <button disabled={item.isVerified} onClick={() => verifyAgent(item._id)}>
            {item.isVerified ? "Verified" : "Verify"}
          </button>
        </div>
      </div>
      <div>
        <h4>About {item.name}</h4>
        <p className={styles.agentBio}>{item.bio}</p> 
      </div>
    </div>
  );
};

export default AgentComponent;
