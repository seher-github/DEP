import { useState, useEffect } from "react";
import { useAuth } from "../../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../../Spinner";

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const authCheck = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/v1/auth/user-auth", {
                    headers: {
                        Authorization: `Bearer ${auth?.token}`,
                    },
                });
                console.log('Response:', res.data); // Log response for debugging
                if (res.data.ok) {
                    setOk(true);
                } else {
                    setOk(false);
                    navigate('/login');
                }
            } catch (error) {
                console.error('Error during auth check:', error);
                setOk(false);
                navigate('/login');
            }
        };
        if (auth?.token) authCheck();
    }, [auth?.token, navigate]);

    return ok ? <Outlet /> : <Spinner path="" />;
}
