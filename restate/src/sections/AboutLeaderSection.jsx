import { useSelector } from "react-redux";
import { getTopAgents } from "../utils/ApiRequest";
import Spinner, { ErrorComponent } from "../utils/Spinner";
import SectionLayout from "./SectionLayout"
import AgentComponent from "../components/AgentComponent";
import Container from "./Container";

const AboutLeaderSection = () => {
    const customStyles = {
        color: "black",
        backgroundColor: "transparent"
    };
    const {isLoading, error} = getTopAgents();

    if(error)return <ErrorComponent message={error} />
 

    return (
        <SectionLayout
            title="LEADERSHIP"
            content="Perspiciatis Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti.Perspiciatis quidem, harum provident, repellat sint officia quos fugit tempora id deleniti. quidem, harum provident, repellat sint officia quos fugit tempora id deleniti."
            style={customStyles}>
            { isLoading ? <Spinner/> :<LeadersComponent/>} 
        </SectionLayout>
    )
}

const LeadersComponent= ()=>{

    const agent = useSelector((state) => state.agent.topAgents); 

    return(
        <Container>
            {
                agent.map((item)=><AgentComponent key={item._id} item={item}/>)
            }
        </Container>
    )

}

export default AboutLeaderSection