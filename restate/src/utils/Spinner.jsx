/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import './Spinner.css'; 
import styles from './error.module.css'

const Spinner = () => {
  return (
    <div className="spinner"> 
      <span className="loader"></span>
    </div>
  );
};

export default Spinner;
 

const ErrorComponent = ({ message }) => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
      <h1 className={styles.errorTitle}>Uh-oh!</h1>
        <p className={styles.errorMessage}>Something went wrong.</p>
        <p className={styles.errorMessage}>{message}</p>
        <button className={styles.refreshButton} onClick={handleRefresh}>
          Refresh Page
        </button>
      </div>
    </div>
  );
};


const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Oops! Looks you are lost.</p>
        <Link to="/" className={styles.button}>Return to Homepage</Link>
      </div>
    </div>
  );
};
export  {ErrorComponent, NotFoundPage};
