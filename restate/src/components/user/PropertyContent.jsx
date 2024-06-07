/* eslint-disable react/prop-types */
import { FaBath } from 'react-icons/fa';
import { IoBedSharp } from 'react-icons/io5';
import { LuParkingSquare, LuParkingSquareOff } from 'react-icons/lu';
import { GiRolledCloth } from "react-icons/gi";
import { BiSolidNotificationOff } from "react-icons/bi"; 
import { CiLocationOn } from "react-icons/ci";
import styles from '../../styles/user/PropertyComponent.module.css';

const PropertyContent = ({ data }) => {
  return (
    <section className={styles.propContent}>
    <div className={styles.content}>
      <div className={styles.imgContainer}>
       
        <img src={data.image} alt={data.name} />
      </div>
      <div className={styles.body}>
      <h2>{data.name}</h2>
        
        <div className={styles.features}>
          {data.baths && <p><FaBath /> {data.baths}</p>}
          {data.beds && <p><IoBedSharp /> {data.beds}</p>}
          {data.parkingSpot ? <p><LuParkingSquare /></p> : <p><LuParkingSquareOff /></p>}
          {data.fullyFurbished ? <p><GiRolledCloth /></p> : <p><BiSolidNotificationOff /></p>}
        </div>
        <p><CiLocationOn /> {data.address}</p>
        <p className={styles.type}><i>{data.type} @ ₹ {data.price}</i></p>
      </div>
    </div>
    <p>{data.description}</p>
  </section>
  )
}

export default PropertyContent;
