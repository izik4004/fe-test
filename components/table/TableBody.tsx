// TableBody.tsx
import React from 'react';
import { Row, TableBodyPropGetter, TableBodyProps, TableBodyPropGetter, TableBodyProps } from 'react-table';

interface TableBodyProps<T extends object> {
    rows: Row<T>[];
    prepareRow: (row: Row<T>) => void;
    getTableBodyProps: (propGetter?: TableBodyPropGetter<T>) => TableBodyProps;
}

const TableBody = <T extends object>({ rows, prepareRow, getTableBodyProps }: TableBodyProps<T>) => {
    return (
        <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
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
    );
};

export default TableBody;
