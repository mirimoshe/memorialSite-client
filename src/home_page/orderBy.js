import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import '../style/orderBy.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});






export default function ControlledOpenSelect() {
  const [order, setOrder] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setOrder(event.target.value);
    sessionStorage.setItem('order', order);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };


  sessionStorage.setItem('order', order);
 




  return (

    <>
      <ThemeProvider theme={theme}>
        <FormControl id="sort-stories" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">sort by</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={order}
            label="Order"
            onChange={handleChange}
          >
            <MenuItem value="None">
              <em>ללא</em>
            </MenuItem>
            <MenuItem value={'updated'}>הכי עדכני</MenuItem>
            <MenuItem value={'popular'}>הכי פופולרי</MenuItem>

          </Select>
        </FormControl>
      </ThemeProvider>

    </>
  );
}
/*<MenuItem value={'none'}>ללא</MenuItem>*/