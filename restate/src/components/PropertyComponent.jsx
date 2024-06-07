/* eslint-disable react/prop-types */
import styles from '../styles/property.module.css';
import {CiLocationOn} from "react-icons/ci";
import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { LuParkingSquare } from "react-icons/lu";
import { LuParkingSquareOff } from "react-icons/lu";
import { Link } from 'react-router-dom';





const PropertyComponent = ({item}) => {
    return (
        <div className={styles.PropertyComponent}>
            <Link to={`/property/${item._id}`}><img src={item.image} alt='real-estate'/></Link>
            <div className={styles.description}>
                <div className={styles.features}>
                    {/* {
                      item.features?.map((i, index)=> <p key={index}>{i}</p>)
                    } */}
                    {
                        item.baths && <p><FaBath/> {item.baths}</p>
                    }
                    {
                        item.beds && <p><IoBedSharp/> {item.beds}</p>
                    }
                    {
                        !item.parkingSpot ? <p><LuParkingSquare/></p> : <p> <LuParkingSquareOff/></p> 
                    } 
                </div>
                <p className={styles.price}>$ {item.price}</p>
                <p className={styles.location}>
                    <b><CiLocationOn/>
                    </b>
                    {item.address}</p>
            </div>
        </div>
    )
}

export default PropertyComponent