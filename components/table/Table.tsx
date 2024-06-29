"use client"
import React from 'react';
import { useTable, usePagination, Column as TableColumn, TableInstance, Row } from 'react-table';
import { User, TableStateWithPagination } from '@/Types';
import './Table.scss';
import Pagination from './Pagination';
import TableRowWithModal from './TableRowWithModal';
import SearchModal from '../modals/SearchModal';

interface TableProps {
    columns: TableColumn<User>[];
    data: User[];
}

// Extend the TableInstance to include pagination properties
type TableInstanceWithPagination<T extends object> = TableInstance<T> & {
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: number[];
    page: Row<T>[]; // Ensure page is of type Row<T>
    gotoPage: (pageIndex: number) => void;
    nextPage: () => void;
    previousPage: () => void;
    setPageSize: (size: number) => void;
    state: TableStateWithPagination;
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 } as Partial<TableStateWithPagination>,
        },
        usePagination
    ) as TableInstanceWithPagination<User>;

    return (
        <>
        <div className="table-container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} key={column.id} className='table__dropdown'>
                                    {column.render('Header')}
                                    <SearchModal onFilter={function (filters: Partial<User>): void {
                                        throw new Error('Function not implemented.');
                                    } }  />
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} key={cell.column.id}>
                                        {/* Render the status with conditional class based on status value */}
                                        {cell.column.id === 'status' ? (
                                            <span className={`status_${row.original.status.toLowerCase()}`}>
                                                {row.original.status}
                                            </span>
                                        ) : (
                                            cell.render('Cell')
                                        )}
                                    </td>
                                ))}
                                <td >
                                    <TableRowWithModal user={row.original} />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
       
            </div>
            <Pagination
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageOptions={pageOptions}
                pageIndex={pageIndex}
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
            />
        </>
    );
};

export default Table;
