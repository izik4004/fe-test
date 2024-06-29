// Pagination.tsx

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
    }, [isSmallScreen, setPageSize]);

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
            {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button> */}
            <div>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
                </button>
            </div>
            {/* <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
                {'>>'}
            </button> */}
            
     
        </div>
    );
};

export default Pagination;
