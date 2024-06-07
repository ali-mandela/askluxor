/* eslint-disable react/prop-types */
import LayoutContainer from '../../components/Layout';
import style from '../../styles/admin.module.css'; 
import PaginationComponent from '../../components/PaginationComponent';
import AgentComponent from './utils/AgentComponent';
import { getAgentsToVerify } from '../../utils/AgentApi';
import  Spinner from '../../utils/Spinner'

const AdminDashBoard = () => {
    return (
        <LayoutContainer>
            <AdminHeader/>
        </LayoutContainer>
    )
}
 
export default AdminDashBoard

const AdminHeader = () => {
    
    const {isLoading,agents,} = getAgentsToVerify();

    const styles = {
        display:"flex", 
        justifyContent:"space-between",
        flexWrap:"wrap",
        rowGap:"20px" ,
        gap:"30px",

    }

    return (
        
        <div className={style.adminHeaderContainer}>
            <h2 className={style.title}>Admin Dashboard</h2> 
            <div className={style.adminBody}>
            {
                isLoading ? <Spinner /> : <PaginationComponent customStyle={styles} message="As of now all the agents are verified, No new agent to verify." iPerPage={3} items={agents} component={AgentComponent} />
            }
                
            </div>
        </div>
    );
};
 