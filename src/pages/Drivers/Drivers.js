import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import DriversTable from '../../components/DriversTable/DriversTable';

export default function Drivers() {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '30px 0 0 0' }}>
                <Paper sx={{ width: '75%', mb: 2 }}>
                    <DriversTable />
                </Paper>
        </Box>
    )
}
