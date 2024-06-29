import React, { useState, useEffect } from 'react';

interface PaginationProps {
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: number[];
    pageIndex: number;
    gotoPage: (pageIndex: number) => void;
    previousPage: () => void;
    nextPage: () => void;
    pageSize: number;
    setPageSize: (size: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageIndex,
    gotoPage,
    previousPage,
    nextPage,
    pageSize,
    setPageSize,
}) => {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    // Detect screen size on component mount and resize
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Determine page size based on screen size
    const pageSizeForScreen = isSmallScreen ? 5 : 10;

    useEffect(() => {
        // Set initial page size
        setPageSize(pageSizeForScreen);
    }, [isSmallScreen, setPageSize, pageSizeForScreen]);

    const renderPageNumbers = () => {
        const maxPagesToShow = 5;
        const totalPages = pageOptions.length;
        const currentPage = pageIndex + 1;
        let startPage = 1;
        let endPage = Math.min(maxPagesToShow, totalPages);

        if (currentPage > Math.floor(maxPagesToShow / 2)) {
            startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
            endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
        }

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(endPage - maxPagesToShow + 1, 1);
        }

        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => gotoPage(i - 1)}
                    className={i === currentPage ? 'active' : ''}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="pagination">
            <div>
                <span>
                    Showing
                    <select
                        value={pageSize}
                        onChange={(e) => {
                            setPageSize(Number(e.target.value));
                        }}
                    >
                        {[5, 10, 20, 30, 40, 50].map((size) => (
                            <option key={size} value={size}>
                                Show {size}
                            </option>
                        ))}
                    </select>
                </span>
            </div>
            <div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>
                {renderPageNumbers()}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default Pagination;
