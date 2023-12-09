import React, {useEffect, useState} from 'react';
import {API_URL, TOKEN} from '../../api/api';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';

import EnhancedTableHead from './ObjectTableHead/TableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar/EnhancedTableToolbar';

export default function EnhancedTable() {
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState([]);
    const [rows, setRows] = useState([]);
    const [filteredObjects, setFilteredObjects] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
        .get(API_URL, {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
        })
        .then(({ data }) => {
            setLoading(false);
            // toast.success("Success")
            setRows(data)
            console.log(data)
        })
        .catch(() => {
            setLoading(false);
        });
    }, [])

    // const normLocaleDate = (data) => {
    //     let date = new Date(`${rows.lastUpdate}`);
    //     console.log(data.lastUpdate);
    //     console.log(date)
    //     return date.toLocaleDateString();
    // }

    // const normLocaleTime = (data) => {
    //     let date = new Date(`${rows.lastUpdate}`);
    //     console.log(data.lastUpdate);
    //     console.log(date)
    //     return date.toLocaleTimeString();
    // }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
        const newSelected = rows.map((n) => n.id);
        setSelected(newSelected);
        return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
        }
        setSelected(newSelected);
    };


    const isSelected = (id) => selected.indexOf(id) !== -1;

    return (
        <>
            {loading ? (<Loader />): (
                <Box sx={{ width: '100%' }}>
                <EnhancedTableToolbar numSelected={selected.length} data={rows} setFilteredObjects={setFilteredObjects}/>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'large'}
                    >
                        <EnhancedTableHead
                        numSelected={selected.length}
                        onSelectAllClick={handleSelectAllClick}
                        rowCount={rows.length}
                        />
                        <TableBody>
                        {filteredObjects.map((row, index) => {
                            const isItemSelected = isSelected(row.id);
                            const labelId = `enhanced-table-checkbox-${index}`;
        
                            return (
                            <TableRow
                                hover
                                onClick={(event) => handleClick(event, row.id)}
                                role="checkbox"
                                aria-checked={isItemSelected}
                                tabIndex={-1}
                                key={row.id}
                                selected={isItemSelected}
                                sx={{ cursor: 'pointer' }}
                            >
                                <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    checked={isItemSelected}
                                    inputProps={{
                                    'aria-labelledby': labelId,
                                    }}
                                />
                                </TableCell>
                                <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                                >
                                {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.uniqueId}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right" title={`${new Date(`${row.lastUpdate}`).toLocaleDateString()}`}>{`${new Date(`${row.lastUpdate}`).toLocaleTimeString()}`}</TableCell>
                            </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            )}
        </>
    );
}
