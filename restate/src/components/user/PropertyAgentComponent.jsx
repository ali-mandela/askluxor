/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import styles from '../../styles/user/PropertyComponent.module.css';

const PropertyAgentComponent = ({data}) => {
    return (
        <section className={styles.propertyAgentContainer}>
            <div>
                <h2>{data.name}</h2>
                <img src={data.image} alt={data.name} />
                <p>{data.Property} Properties</p>
            </div>
            <div>
                <p>{data.bio}</p>
            </div>
        </section>
    )
}

export default PropertyAgentComponent