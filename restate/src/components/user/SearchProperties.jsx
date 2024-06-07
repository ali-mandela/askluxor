/* eslint-disable react/prop-types */
import styles from '../../styles/user/Prop.module.css';
import { useSelector } from 'react-redux';
import { getItems } from '../../utils/ApiRequest'; 
import PaginationComponent from '../PaginationComponent';
import Spinner, { ErrorComponent } from '../../utils/Spinner';
import PropertyComponent from '../PropertyComponent';


 
const SearchProperties = () => {
    
    const items = useSelector((state) => state.search.items);

          const {isLoading, error } =  getItems();

    const style={
        display :"flex",
        justifyContent:"space-between",
        flexWrap:"wrap",
        rowGap:"20px"
    }

    if(isLoading) return <Spinner/>

    if(error) return <ErrorComponent message={error}/>
    return (
        <div className={styles.searchPropertiesContainer}>
            <h1>Properties</h1> 
            
            <PaginationComponent customStyle={style} items={items} iPerPage={6} message="No propery is live for the search." component={PropertyComponent} />
            </div>
    );
};

export default SearchProperties;
