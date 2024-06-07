/* eslint-disable react/prop-types */
import { useState } from "react";
import PaginationBtns from "./utils/PaginationBtns";

const PaginationComponent = ({ items,customStyle={
    display:"flex",
    justifyContent:"center"
}, component: Component,iPerPage=4,message }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = iPerPage; 

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = items.slice(startIdx, endIdx);

    return (
        <><div className="xbzs" style={customStyle}>
            {items.length === 0 && <p style={{ color: "black" }}>{message}</p>}
            {currentItems.map((item, i) => (
                <Component key={i} item={item} /> 
            ))}
        </div>
            {items.length != '0' && <PaginationBtns len={items.length} iPerPage={iPerPage} currentPage={currentPage} onPageChange={handlePageChange} />}
        </>
    );
};


export default PaginationComponent