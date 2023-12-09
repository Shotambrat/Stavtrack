import React from "react";
// import loader from '../../assets/img/loading.svg';
// import './Loading.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
    return (
        <Box sx={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
            <CircularProgress />
        </Box>
    )
};

export default Loader;