/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styles  from '../styles/agent.module.css'; 
import i from '../assets/auth.svg' 

const AgentComponent = ({item}) => {
    return (
        <div className={styles.agentComponent}>
            <div style={{backgroundImage:i}} className={styles.imgContainer}>
                <Link to={`/agents/${item._id}`}><img src={item.img? item.img : item.image} alt='home-image' /></Link>
                <div>

                </div>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.list}> <span>{item?.Property}</span> Properties  </p>
            </div>
        </div>
    )
}

export default AgentComponent