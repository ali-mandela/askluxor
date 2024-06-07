import style from './component.module.css'

const PaginationBtns = ({ len, currentPage, onPageChange, iPerPage=4 , }) => {
    const itemsPerPage = iPerPage;
    const totalPages = Math.ceil(len / itemsPerPage);

    const renderPageButtons = () => {
        let buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => onPageChange(i)}
                    className={currentPage === i ? style.active : ''}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    return (
        <div className={style.paginationContainer}>
            {renderPageButtons()}
        </div>
    );
};
export default PaginationBtns