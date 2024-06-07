import {useParams} from 'react-router-dom';
import styles from './style/singlePage.module.css';
import {useAgentData} from '../../utils/AgentApi';
import Spinner, {ErrorComponent} from '../../utils/Spinner' 
import SectionLayout from '../../sections/SectionLayout';
import AgentProperties from '../../components/agent/AgentProperties';

const AgentSinglePage = () => {
    const {id} = useParams();

    const {error, loading, agent} = useAgentData({id});

    if (loading) 
        return <Spinner/>

    if (error) 
        return <ErrorComponent message={error}/>

    const customStyles = {
      color: "white",
      backgroundColor: "#91B029"
  };


    return (   
  <>
      <SectionLayout title={agent.name} content='' style={customStyles}>
        <div className={styles.agentContainer}>
            <div>
              <img src={agent.image} alt=''/>
              <h3>{agent.Property} Properties</h3>
            </div>
            <p>{agent.bio}</p>
        </div>
    </SectionLayout>  
    <AgentProperties id={id}/>
  </>
    );
};

export default AgentSinglePage;