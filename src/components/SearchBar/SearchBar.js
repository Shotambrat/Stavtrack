import React, {useState, useEffect} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


export default function SearchBar(props) {

    const [searchQuery, setSearchQuery] = useState('');
    const { data, setFilteredObjects } = props;

    useEffect(() => {
        const filteredObjects = searchQuery == '' ? data : data.filter(obj => obj.id.toString().includes(searchQuery));
        setFilteredObjects(filteredObjects)
    }, [searchQuery])

    return (
        <OutlinedInput 
            onChange={e => setSearchQuery(e.target.value)}
            sx={{ borderRadius: '20px', margin: '10px 0' }}
            placeholder="Search id..."
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon position="start" />
                </InputAdornment>
            }
        />
    )
}
