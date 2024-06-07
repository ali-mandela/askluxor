/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types';
import style from '../../styles/agent/agent.module.css';
import PaginationComponent from '../PaginationComponent';
import PropertyComponent from '../..//components/PropertyComponent'
import Spinner,{ErrorComponent} from '../../utils/Spinner';
import LayoutContainer from '../Layout';
import { getAgentProperties } from '../../utils/AgentApi';

const AgentProperties = ({ id }) => {
  const { error, loading, properties } = getAgentProperties({ id });

  if (loading) return <Spinner />;
  if (error) return <ErrorComponent message={error} />;

  return (
    <LayoutContainer> 
      <h1 className={style.title}> Agent's Properties</h1>
      <PaginationComponent
        customStyle={styles.container}
        items={properties}
        iPerPage={3}
        message="No properties have been posted by this agent."
        component={PropertyComponent}
      />
    </LayoutContainer>
  );
};

AgentProperties.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AgentProperties;

const styles = {
  container: {
    display: 'flex',
    fontSize:"4rem",
    gap: '30px',
    justifyContent: 'space-between', 
  },
  '@media (max-width: 700px)': {
    container: {
      flexDirection: 'Column',
    },
  },
};
