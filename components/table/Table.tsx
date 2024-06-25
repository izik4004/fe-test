"use client"

// Table.tsx
import React from 'react';
import { useTable, usePagination, Column as TableColumn, TableInstance, Row } from 'react-table';
import { Person, TableStateWithPagination } from '@/Types';
import './Table.scss';
import Pagination from './Pagination';

interface TableProps {
    columns: TableColumn<Person>[];
    data: Person[];
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
            initialState: { pageIndex: 0, pageSize: 5 } as Partial<TableStateWithPagination>,
        },
        usePagination
    ) as TableInstanceWithPagination<Person>;

    return (
        <div className="table-container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} key={column.id}>
                                    {column.render('Header')}
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
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
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
        </div>
    );
};

export default Table;
