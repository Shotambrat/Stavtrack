import React, {useEffect, useState} from 'react';
import {API_URL, TOKEN} from '../../../api/api';
import axios from 'axios';
import Loader from '../../Loader/Loader';
import { alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Searchbar from '../../SearchBar/SearchBar';

export default function EnhancedTableToolbar(props) {
    const { numSelected, data, setFilteredObjects } = props;

    const [state, setState] = useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal, open } = state;
    
    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };
    
    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <Toolbar
        sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numSelected > 0 && {
            bgcolor: (theme) =>
                alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            }),
        }}
        >
        {numSelected > 0 ? (
            <Typography
            sx={{ flex: '1 1 100%', margin: '24px 0'}}
            color="inherit"
            variant="subtitle1"
            component="div"
            >
            {numSelected} выбрано
            </Typography>
        ) : (

        <>
            <Typography
                sx={{ flex: '1 1 100%' }}
                variant="h6"
                id="tableTitle"
                component="div"
            >
                Объекты
            </Typography>
            <Searchbar data={data} setFilteredObjects={setFilteredObjects}/>
        </>
        )}

        {numSelected > 0 ? (
                <Tooltip 
                    title="Удалить"
                    onClick={handleClick({ vertical: 'top', horizontal: 'center' })}
                >
                    <Snackbar
                        severity="error"
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        // message="У Вас нет прав на удаление"
                        key={vertical + horizontal}
                    >
                        <Alert 
                            severity="error"
                            sx={{ backgroundColor: 'black', color: 'red' }}
                        >У Вас нет прав на удаление</Alert>
                    </Snackbar>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
                </Tooltip>
        ) : (
            <></>
        )}
        </Toolbar>
    );
}