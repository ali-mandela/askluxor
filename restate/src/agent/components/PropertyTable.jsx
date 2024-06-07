/* eslint-disable react/prop-types */
import { useCallback } from 'react';
import style from '../styles/component.module.css';
import { MdDelete } from "react-icons/md";
import {Link} from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
const PropertyTable = ({ data }) => {

  console.log(data[0 ]);

const handleDelete = useCallback(async (id) => {
    try {
        await axios.delete(`/property/delete-property/${id}`, {
            headers: {
                Authorization:  localStorage.getItem('token') 
            }
        }); 
    } catch (err) {
        console.error('Error deleting property:', err);
        toast.error('Failed to delete property. Please try again later.');
    }
}, []);

  return (
    <div className={style.TableContainer}>
      <table className={style.Table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              {/* <td><Link to={`/agent/property/${item?._id}`}>{item.name}</Link></td>*/}
               <td>  {item.name} </td> 
              
              <td>
                <img src={item.image} alt={item.name} className={style.Image} />
              </td>
              <td>
                <button
                  className={style.DeleteButton}
                  onClick={() => handleDelete(item._id)}
                > Delete
                  <MdDelete />
                </button> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyTable;
