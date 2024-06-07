/* eslint-disable react/prop-types */
import AgentComponent from '../components/AgentComponent';
import LayoutContainer from '../components/Layout';
import PropertyComponent from '../components/PropertyComponent';
import styles from '../styles/section.module.css';

const Latest = ({title, body}) => {
  return (
   <LayoutContainer bgColor={"#000"}>
      <section className={styles.latestContainer}>
              <h2>{title}</h2>
              <p>{body}</p>
              <PropertyComponent/>
              <AgentComponent/>
      </section>
   </LayoutContainer>
  )
}

export default Latest