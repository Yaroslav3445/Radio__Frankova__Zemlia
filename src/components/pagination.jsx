
import React from 'react';
import arrowPage from '../image/arrow-page.svg'
import PaginationStyles from '../style/pagination.module.scss';

const Pagination = ({ currentPage, handlePrevPage, handleNextPage, getPageNumbers, handleClickPage }) => {
    return (
        <div className={PaginationStyles.pagination__pagination_wrap}>
            <button className={`${PaginationStyles['pagination__page-number']} ${PaginationStyles['pagination__arrow']} ${PaginationStyles['pagination__arrow_prev']}`} onClick={handlePrevPage}>
                <img src={arrowPage} alt="arrowPage" />
            </button>
            <div className={PaginationStyles.pagination__pagination}>
                <div id='bullet' className={PaginationStyles.pagination__pagination_bullet}>
                    {getPageNumbers().map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handleClickPage(pageNumber)}
                            className={`${pageNumber === currentPage ? PaginationStyles['active'] : PaginationStyles['pagination__page-number']}`}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>
            </div>
            <button className={`${PaginationStyles['pagination__page-number']} ${PaginationStyles['pagination__arrow']} ${PaginationStyles['pagination__arrow_next']}`} onClick={handleNextPage}>
                <img src={arrowPage} alt="arrowPage" />
            </button>
        </div>
    );
};

export default Pagination;
