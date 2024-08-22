import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { colors } from '@mui/material';
//import { createTheme, ThemeProvider } from '@mui/material';



export default function BasicTextFields() {
  return (
    
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },

      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" 
      label="Search" 
      variant="outlined"  
      />
    </Box>
    
  );
}
