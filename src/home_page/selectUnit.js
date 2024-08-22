import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ plabel, array,name,id }) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{plabel !== null ? plabel : ""}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id={id}
                    value={age}
                    label={plabel !== null ? plabel : ""}
                    onChange={handleChange}
                    /*name={name}*/
                >
                    {array.map((rank, index) => (
                        <MenuItem value={rank} key={index}>{rank}</MenuItem>
                    ))};
                </Select>
            </FormControl>
        </Box>
    );
} /*
<MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>

                    
*/