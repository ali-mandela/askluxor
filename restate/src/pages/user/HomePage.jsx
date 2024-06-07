 
import About from "../../components/About"
import Filter from "../../components/user/Filter"
import AgentSection from "../../sections/AgentSection"
 import ProperySection from "../../sections/ProperySection"
import TestimonialSection from "../../sections/user/TestimonialSection" 
 
 
const HomePage = () => {
  return (
   
    <>  
    <Filter isNav={true}/>
    <About/>
    <ProperySection/>
      <AgentSection/>
     <TestimonialSection/> 
    </>
  )
}

export default HomePage