import React, { useState } from 'react'
import '../style/addImg.css';
import Button from '@mui/material/Button';
import { putDecead ,addImageToObject } from '../Decead/deceadSlice';
import { useDispatch, useSelector } from 'react-redux';

function AddImg({ id, item }) {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [formData, setFormData] = useState(null);
    const dispatch = useDispatch();
    const deceads = useSelector(state => state.decead.deceads);

    const handleFileChange = (event) => {
        const formData = new FormData();
        const selectedFile = event.target.files[0];
        const blob = new Blob([event.target.files[0]]);
        formData.append('files', blob, event.target.files[0].name);
        setFormData(formData);
        const sanitizedBirthDate = item.birth_date !== null ? item.birth_date : '';
        const sanitizedDeathDate = item.death_date !== null ? item.death_date : '';
        formData.append('First_name', item.first_name);
        formData.append('Last_name', item.last_name);
        formData.append('Birth_date', sanitizedBirthDate);
        formData.append('Death_date', sanitizedDeathDate);
        formData.append('Hometown', item.hometown);
        formData.append('Burial_location', item.burial_location);
        formData.append('Age', item.age);
        formData.append('images', item.images);
        formData.append('Death_detailes', item.death_detailes);
        formData.append('Rank', item.rank);
        formData.append('Unit', item.unit);
        formData.append('UserId', 1);
        formData.append('Id', id);
        dispatch(putDecead({ id, formData }));
        dispatch(addImageToObject(id,URL.createObjectURL(selectedFile)))
    };

    return (
        <>
            <input
                accept="image/*"
                style={{ display: 'none' }}
                id="file-upload"
                type="file"
                onChange={handleFileChange}
            />
            <label htmlFor="file-upload" className='addImg'>
                <Button
                    variant="contained"
                    component="span"
                    id='btn-addimg'
                >
                   Add Image
                </Button>
            </label>
        </>
    )
}
export default AddImg