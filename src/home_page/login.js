import React, { useEffect, useRef, useState } from 'react'
import '../style/login.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, postUser } from '../Useres/usersSlice';
import { fetchDecead } from '../Decead/deceadSlice';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useForm } from 'react-hook-form';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useFormikContext } from 'formik';




function Login() {



    const dispatch = useDispatch();

    const handleSignSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let newDobject = {
            Name: data.get('txt'),
            Id_person: data.get('pswd'),
            Email: data.get('email'),
        };

        try {
            const response = await axios.post("https://localhost:7288/login", {
                "Name": newDobject.Name,
                "Id_person": newDobject.Id_person,
                "Email": newDobject.Email
            });
            document.getElementById('chk').checked = true;
            document.getElementById("log-email").value = newDobject.Email.toString();
            document.getElementById("log-id").value = newDobject.Id_person.toString();
            alert(`שמך רשום במערכת בבקשה התחבר/י ${newDobject.Name}`)
            clearFormInputs();
            return response.data;

        } catch (error) {
            //throw error; // Rethrow the error to handle it further up the call stack if needed
            if (error.response.status == 404) {
                let item = dispatch(postUser(newDobject));
                alert(` ברוכ/ה הבא/ה\n נרשמת בהצלחה! ${newDobject.Name}`);
                sessionStorage.setItem('isLoggedIn', 'true');
                clearFormInputs();
                try {
                    const response = await axios.post("https://localhost:7288/login", {
                        "Name": newDobject.Name,
                        "Id_person": newDobject.Id_person,
                        "Email": newDobject.Email
                    });
                    const token = response.data;
                    sessionStorage.setItem('token', token);
                    const decoded = jwtDecode(token);
                    const JSONdecoder = JSON.parse(JSON.stringify(decoded));
                    let currentUserId;
                    for (const key in JSONdecoder) {
                        if (key.includes("nameidentifier")) {
                            currentUserId = JSONdecoder[key];
                        }
                    }
                    sessionStorage.setItem('userId', currentUserId);
                    return response.data;
                } catch (error) {
                    console.log(error);
                }
                sessionStorage.setItem('isLoggedIn', 'true');
                clearFormInputs();
            }
        }
        clearFormInputs();
    }



    const handleLogSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let newDobject = {
            Id_person: data.get('pswd'),
            Email: data.get('email'),
        };
        try {
            const response = await axios.post("https://localhost:7288/login", {
                "Name": newDobject.Name ? newDobject.Name : "",
                "Id_person": newDobject.Id_person,
                "Email": newDobject.Email
            });
            alert(`התחברת בהצלחה!`)
            sessionStorage.setItem('isLoggedIn', 'true');
            document.getElementById('chk').checked = false;
            const token = response.data;
            sessionStorage.setItem('token', token);
            const decoded = jwtDecode(token);
            const JSONdecoder = JSON.parse(JSON.stringify(decoded));
            let currentUserId;
            for (const key in JSONdecoder) {
                if (key.includes("nameidentifier")) {
                    currentUserId = JSONdecoder[key];
                }
            }
            sessionStorage.setItem('userId', currentUserId);
            clearLogFormInputs();
            return response.data;
        } catch (error) {
            if (error.response.status == 404) {
                document.getElementById('chk').checked = false;
                document.getElementById("sign-email").value = newDobject.Email.toString();
                document.getElementById("sign-id").value = newDobject.Id_person.toString();
                alert(`אינך רשום במערכת בבקשה הרשם`)
            }
            clearLogFormInputs();
        }
        clearLogFormInputs();
    }



    function clearFormInputs() {
        const form = document.getElementById('myFormSign');
        if (form) {
            form.reset();
        } else {
            console.log('Form not found');
        }
    }
    function clearLogFormInputs() {
        const form = document.getElementById('myForm');
        if (form) {
            form.reset();
        } else {
            console.log('Form not found');
        }

    }


    return (
        <>
            <div className='body' id='sign-up-area'>
                <div className="main">
                    <input type='checkbox' id="chk" aria-hidden="true" />
                    <div className='signup'>
                        <form
                            onSubmit={handleSignSubmit}
                            id='myFormSign'>
                            <label for="chk" aria-hidden="true">Sign up</label>
                            <input
                                id="sign-name"
                                type='text'
                                name="txt"
                                placeholder='User name'
                            />
                            <input
                                id="sign-email"
                                type='email'
                                name="email"
                                placeholder='Email'

                            />

                            <input
                                id="sign-id"
                                type='Id'
                                name="pswd"
                                placeholder='Id'

                            />

                            <p id='comment-sign'>לצרכי אבטחה</p>
                            <button type='submit'>Sign up</button>
                        </form>
                    </div>
                    <div className='login'>
                        <form onSubmit={handleLogSubmit} id='myForm'>
                            <label for="chk" aria-hidden="true">Login</label>
                            <input
                                id='log-email'
                                type='email'
                                name="email"
                                placeholder='Email'

                            />

                            <input
                                id='log-id'
                                type='Id'
                                name="pswd"
                                placeholder='Id'

                            />

                            <button type='submit'>Login</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Login

