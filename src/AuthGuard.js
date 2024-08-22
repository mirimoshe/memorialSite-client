import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const AuthGuard = ({ element }) => {
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    useEffect(() => {
        if (isLoggedIn) {
            return;
        } else {
            navigate('/');
            setTimeout(() => {
                window.location.href = '/#sign-up-area';
                const section = document.getElementById('sign-up-area');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 400);
        }
    }, [isLoggedIn, navigate]);

    return isLoggedIn ? element : <Navigate to="/" />;
};

export default AuthGuard;