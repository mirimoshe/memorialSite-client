import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import BasicSelect from './selectUnit.js'
import rankArray from './rankArr.js';
import SearchableAutocomplete from './autoSearch.js'
import unitArray from './unitArr.js'
import { useState, useEffect } from 'react';
import { dark } from '@mui/material/styles/createPalette.js';
import { postDecead, fetchDecead, addNewDecead } from '../Decead/deceadSlice.js'
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import '../style/additionPage.css'
import plony from '../images/ploni.jpg';
import { useNavigate } from 'react-router-dom';



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const defaultTheme = createTheme({
    palette: {
        primary: {
            light: '#fff',
            main: '#ffea00',
        },
        secondary: {
            main: '#ffea00',
        },
    },
});




export default function Addition() {
    const deceads = useSelector(state => state.decead.deceads);
    const status = useSelector(state => state.decead.status)
    const dispatch = useDispatch();
    const [imageUrl, setImageUrl] = useState('');
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [formData, setFormData] = useState(new FormData());//
    const dataURI = 'data:image/jpeg;base64,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c8888888o08kco88888884cc8sw88888888sw0w8888888888sM888888888wsMM8s888888ow88888w88888UAU8884UU88888AA888AcA88//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8QKf/EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8QKf/EACkQAQABAgQFBQEAAwAAAAAAAAERAEEhMDFRYXGBobEQIECR8MFw0eH/2gAIAQEAAT8Q/wADu7HGlyNXpT+cL98Z4rT8zjfVHWRv3xvitwTiBwTUefxE3AY8UmkL7LL7VqHpkJwLBwMPSfTQvTAXg2Tg4UGA4uCDWFrn6bfCQlOstHFmwx5wXpOmHZQyq3V9wbNOwBkRs0bEOEvHAmwx5z8HDVpGl68OjIgWlE6X+B1VHDPw7+RifxUg4C3RXzkMrLPZQnimmnlYH9Z6uYAHkP6p19s+prTqMqh/G2ekC50asg1pqjt54xiQx+C1asg1oAIR+x/Wf3SHQvNOmDPFRPXXIScGAnFR/wBrs+OgHj4CsY00gMCuhgmwNmvHvSGEPCCErKYBsrt8EwdYoc20MpumE8SKxitgqvRjvSIgbidqYsdv/uiASbi96KTfVh+hHehrxsYXfQnizSzr8SKio+LsS0UuRq9CiCSx872pYF2WuxSNtbVFjey13KNENiXc7VvT8XUNTqfBwSGDDi05qqIXjLhzSeBWMv8AXt1fbNY67Vy6lTIyBD4w4PODwawiFBDg52hpYBNgF1+wpUiQ/Njr9R7Z9sjATDfkZ+5oNODRwuCsP2GYhDa8AGK0tTyz9BrtpanLLzcEf0GG+lACC7gmjlEXpHEkQ66ulq5m3q5RTyhKjicp0cR3ytCWDgMDqwdacOyV0l9XLXKEVkkrS/A4jE6MnTJaLI6NiXu+lPscopJk6dJPofbIGKYht3Fl2Cn2OUUstbOJDstavZ//2Q=='
    const localfileName = 'ploni.jpg';

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        birthdate: '',
        deathdate: '',
        city: '',
        cemetery: '',
        deathDetailes: '',
        age: '',
        rank: '',
        unit: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        birthdate: '',
        deathdate: '',
        city: '',
        cemetery: '',
        deathDetailes: '',
        age: '',
        rank: '',
        unit: ''
    });

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required').min(3, 'Min 3 characters').matches(/^[\u0590-\u05FFa-zA-Z\s]*$/, 'Only English and Hebrew letters are allowed'),
        lastName: Yup.string().required('Last Name is required').min(3, 'Min 3 characters').matches(/^[\u0590-\u05FFa-zA-Z\s]*$/, 'Only English and Hebrew letters are allowed'),
        birthdate: Yup.date().max(new Date(), 'Date must be in the past'),
        deathdate: Yup.date().max(new Date(), 'Date must be in the past'),
        city: Yup.string().min(3, 'Min 3 characters'),
        cemetery: Yup.string().required('Cemetery is required').min(3, 'Min 3 characters'),
        deathDetailes: Yup.string().required('Death Detailes is required').min(15, 'Min 15 characters').max(135,'Max 135 characters'),
        age: Yup.number(),
        rank: Yup.string(),
        unit: Yup.string(),
    });


    const handleBlur = (field) => {
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        if (errors[name]) {
            handleBlur(name);
        }
    };

    const navigate = useNavigate();

    const funconSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
         let Bdate = data.get('birthdate') ? new Date(data.get('birthdate')).toISOString() : '';
         let Ddate = data.get('deathdate') ? new Date(data.get('deathdate')).toISOString() : '';

        if (file === null) {
            const blob = new Blob([convertDataURIToFile(dataURI, localfileName)]);
            formData.append('files', blob, 'ploni.jpg ');
        }
         formData.append('First_name', data.get('firstName'));
         formData.append('Last_name', data.get('lastName'));
         formData.append('Birth_date', Bdate);
         formData.append('Death_date', Ddate);
         formData.append('Hometown', data.get('city'));
         formData.append('Burial_location', data.get('cemetery'));
         formData.append('Age', data.get('age'));
         formData.append('Death_detailes', data.get('deathDetailes'));
         formData.append('Rank', data.get('rank'));
         formData.append('Unit', data.get('unit'));
         const userId = sessionStorage.getItem('userId');
         formData.append('UserId',userId);
         dispatch(postDecead(formData));
         dispatch(addNewDecead(formData));
         clearForm();
         window.location.reload();
    }



    function convertDataURIToFile(dataURI, localfileName) {
        // Extract base64 data from data URI
        const base64Data = dataURI.split(',')[1];
        // Decode base64 data to binary
        const binaryData = atob(base64Data);
        // Convert binary to array buffer
        const arrayBuffer = new ArrayBuffer(binaryData.length);
        const uint8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < binaryData.length; i++) {
            uint8Array[i] = binaryData.charCodeAt(i);
        }
        // Create Blob object from array buffer
        const blob = new Blob([arrayBuffer], { type: 'image/jpeg' });
        // Create File object from Blob
        const defaultfile = new File([blob], localfileName, { type: 'image/jpeg' });
        return defaultfile;
    }


    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(event.target.files[0]);
        setFileName(event.target.files[0].name);
        const formData1 = new FormData();
        // Create a Blob from the file
        const blob = new Blob([event.target.files[0]]);
        formData1.append('files', blob, event.target.files[0].name);
        setFormData(formData1);
        setImageUrl(URL.createObjectURL(event.target.files[0]));
    };

    const clearForm = () => {
        setFormValues({
            firstName: '',
            lastName: '',
            birthdate: '',
            deathdate: '',
            city: '',
            cemetery: '',
            deathDetailes: '',
            age: '',
            rank: '',
            unit: ''
        })
        setFile(null);
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: '#fff'
                    }} enctype="multipart/form-data"
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <CoPresentIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        דף הוספה
                    </Typography>
                    <Box component="form" id='formadd'  onSubmit={funconSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstName"
                                    required
                                    type='text'
                                    fullWidth
                                    id="firstName"
                                    label="שם פרטי"
                                    value={formValues.firstName}
                                    onBlur={() => handleBlur('firstName')}
                                    onChange={handleChange}
                                    error={Boolean(errors.firstName)}
                                    helperText={errors.firstName}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    type='text'
                                    id="lastName"
                                    label="שם משפחה"
                                    name="lastName"
                                    autoComplete="family-name"
                                    value={formValues.lastName}
                                    onBlur={() => handleBlur('lastName')}
                                    onChange={handleChange}
                                    error={Boolean(errors.lastName)}
                                    helperText={errors.lastName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="birth_date"
                                    label="תאריך לידה"
                                    name="birthdate"
                                    autoComplete="Date"
                                    type='date'
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    value={formValues.birthdate}
                                    onBlur={() => handleBlur('birthdate')}
                                    onChange={handleChange}
                                    error={Boolean(errors.birthdate)}
                                    helperText={errors.birthdate}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    id="birth_date"
                                    label="תאריך פטירה"
                                    name="deathdate"
                                    autoComplete="Date"
                                    type='date'
                                    InputLabelProps={{
                                        shrink: true
                                    }}
                                    value={formValues.deathdate}
                                    onBlur={() => handleBlur('deathdate')}
                                    onChange={handleChange}
                                    error={Boolean(errors.deathdate)}
                                    helperText={errors.deathdate}
                                />
                            </Grid>
                            <Grid item xs={10} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    id="age"
                                    label="גיל"
                                    name="age"
                                    type='number'
                                    value={formValues.age}
                                    onBlur={() => handleBlur('age')}
                                    onChange={handleChange}

                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <SearchableAutocomplete
                                    plabel={"יחידה"}
                                    array={unitArray}
                                    name={'unit'}
                                    id={'unit'}
                                    value={formValues.unit}
                                    onBlur={() => handleBlur('unit')}
                                    onChange={handleChange}
                                ></SearchableAutocomplete>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <BasicSelect
                                    plabel={"דרגה"}
                                    array={rankArray}
                                    name="rank"
                                    id={'rank'}
                                    value={formValues.rank}
                                    onBlur={() => handleBlur('rank')}
                                    onChange={handleChange}
                                ></BasicSelect>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="city"
                                    fullWidth
                                    id="city"
                                    label="עיר מגורים"
                                    value={formValues.city}
                                    onBlur={() => handleBlur('city')}
                                    onChange={handleChange}
                                    error={Boolean(errors.city)}
                                    helperText={errors.city}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="cemetery"
                                    label="מקום קבורה"
                                    name="cemetery"
                                    value={formValues.cemetery}
                                    onBlur={() => handleBlur('cemetery')}
                                    onChange={handleChange}
                                    error={Boolean(errors.cemetery)}
                                    helperText={errors.cemetery}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    name="deathDetailes"
                                    required
                                    fullWidth
                                    type='text'
                                    id="deathDetailes"
                                    label="פרטי פטירה"
                                    value={formValues.deathDetailes}
                                    onBlur={() => handleBlur('deathDetailes')}
                                    onChange={handleChange}
                                    error={Boolean(errors.deathDetailes)}
                                    helperText={errors.deathDetailes}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I agrre to share those detailes and I aware that the site is checking the reliability those detailes."
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item  >
                                <input
                                    accept="image/*"
                                    style={{ display: 'none' }}
                                    id="file-upload"
                                    type="file"
                                    onChange={handleFileChange}
                                />
                                <label htmlFor="file-upload" >
                                    <Button
                                        variant="contained"
                                        component="span"
                                        sx={{
                                            mb: 2,
                                            mt: 2,
                                            bgcolor: 'secondary.main',
                                            color: 'secondary.dark',
                                            "&:hover": { bgcolor: 'secondary.light' }
                                        }} >
                                        הוספת תמונה
                                    </Button>
                                </label>
                            </Grid>
                            {file && (
                                <Grid item >
                                    <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
                                </Grid>
                            )}
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mb: 2, bgcolor: 'secondary.main', color: 'secondary.dark', "&:hover": { bgcolor: 'secondary.light' } }}
                        >
                            הוספה
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};
