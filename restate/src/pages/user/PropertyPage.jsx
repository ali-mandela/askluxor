 import LayoutContainer from "../../components/Layout"
import Filter from "../../components/user/Filter"
import SearchProperties from "../../components/user/SearchProperties"
import TestimonialSection from "../../sections/user/TestimonialSection"



 const PropertyPage = () => {

   return ( <>
     <Filter/>
     <LayoutContainer>
     <SearchProperties/>
     </LayoutContainer> 
     <TestimonialSection/>
     </>
   )
 }

 export default PropertyPage