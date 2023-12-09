import React, {useEffect, useState} from 'react';
import {API_URL, TOKEN} from '../../../api/api';
import axios from 'axios';
import Loader from '../../Loader/Loader';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

// id, name, uniqueId, status, lastUpdate
const headCells = [
    {
        id: 'ID',
        numeric: false,
        disablePadding: true,
        label: 'ID',
    },
    {
        id: 'Name',
        numeric: true,
        disablePadding: false,
        label: 'Name',
    },
    {
        id: 'UniqueID',
        numeric: true,
        disablePadding: false,
        label: 'UniqueID',
    },
    {
        id: 'status',
        numeric: true,
        disablePadding: false,
        label: 'status',
    },
    {
        id: 'lastUpdate',
        numeric: true,
        disablePadding: false,
        label: 'lastUpdate',
    },
];

export default function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } =
        props;

    return (
        <TableHead>
        <TableRow>
            <TableCell padding="checkbox">
            <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                'aria-label': 'select all desserts',
                }}
            />
            </TableCell>
            {headCells.map((headCell) => (
            <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}
                sortDirection={orderBy === headCell.id ? order : false}
            >
                {headCell.label}
            </TableCell>
            ))}
        </TableRow>
        </TableHead>
    );
}