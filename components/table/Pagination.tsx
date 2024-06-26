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
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {'<<'}
            </button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'<'}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'>'}
            </button>
            <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage}>
                {'>>'}
            </button>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
                | Go to page:{' '}
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={(e) => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0;
                        gotoPage(page);
                    }}
                    style={{ width: '100px' }}
                />
            </span>
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
        </div>
    );
};

export default Pagination;
