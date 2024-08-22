import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const SearchableAutocomplete = ({ plabel, array, name ,id}) => {
    const options = array;

    return (
        <Autocomplete
            options={options}
            renderInput={(params) => <TextField {...params} label={plabel} /*name={name}*/ id={id} />}
            freeSolo
            onInputChange={(event, newInputValue) => {
                // You can handle the input value change here
            }}
        />
    );
};

export default SearchableAutocomplete;