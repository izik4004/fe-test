// TableHeader.tsx
import React from 'react';
import { HeaderGroup, ColumnInstance } from 'react-table';

interface TableHeaderProps<T extends object> {
    headerGroups: HeaderGroup<T>[];
}

const TableHeader = <T extends object>({ headerGroups }: TableHeaderProps<T>) => {
    return (
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                    {headerGroup.headers.map((column: ColumnInstance<T>) => (
                        <th {...column.getHeaderProps()} key={column.id}>
                            {column.render('Header')}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );
};

export default TableHeader;
