import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ObjectsTable from '../../components/Tables/ObjectsTable';

export default function DeviceList() {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '30px 0 0 0' }}>
            <Paper sx={{ width: '75%', mb: 2 }}>
                <ObjectsTable />
            </Paper>
        </Box>
    )
}
