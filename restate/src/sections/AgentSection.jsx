import { useSelector } from 'react-redux';
import AgentComponent from '../components/AgentComponent'; 
import Container from './Container';
import { getTopAgents } from '../utils/ApiRequest';
import Spinner from '../utils/Spinner';
import SectionLayout from './SectionLayout';

const AgentSection = () => {

    const Agents = useSelector((s)=>s.agent.topAgents);
    // eslint-disable-next-line no-unused-vars
    const {isLoading, error} = getTopAgents();
    const customStyles = {
        color: "black",
        backgroundColor: "transparent"
    };
    return (
        // <LayoutContainer>
        <SectionLayout  title="OUR AGENT"
            content="Perspiciatis quidem, harum provident, repellat sint officia quos fugit
                        tempora id deleniti"
            style={customStyles}>
            <Container>
                { isLoading ? <Spinner/>
             :  Agents.slice(0, 3)
                        .map((item, i) => <AgentComponent key={i} item={item}/>)
             
}

                </Container>

        </SectionLayout>
           
        // </LayoutContainer>
    )
}

export default AgentSection