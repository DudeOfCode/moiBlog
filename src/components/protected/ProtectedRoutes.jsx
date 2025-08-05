
import { Outlet, Navigate } from 'react-router-dom';
import { auth } from "../../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect, useRef } from 'react';
import "./ProtectedRoutes.scss"

const ProtectedRoutes = () => {
    // const getUser = localStorage.getItem(auth?.currentUser?.email);
    // let [user] = useState(getUser);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // localStorage.setItem(user, auth?.currentUser?.email)
        setTimeout(() => setLoading(false), 5500)
        // console.log(user)
        // onAuthStateChanged(auth, (data) => {
        //     if (data) {

        //         return (<Outlet />)
        //     }

        //     else {
        //         <Navigate to="/login" />
        //     }
        // })

    }, [auth?.currentUser])
    // const delay = async (ms) => {
    //     return new Promise((resolve) =>
    //         setTimeout(resolve, ms));
    // };


    // const showSmt = () => {

    //     return (!loading ? <Outlet /> : <Navigate to="/login" />);

    //     // return smt ? <Outlet /> : < Navigate to="/login" />
    // }
    // Simulate an unauthenticated user
    // return (user ? <Outlet /> : <Navigate to="/login" />)  // Redirect to login if not authenticated
    if (auth?.currentUser) {
        return (<Outlet />)
    } else if (!auth?.currentUser & loading) {
        return <div ><h1 className="lding">Loading........</h1></div>
    }

    else if (!auth?.currentUser & !loading) {
        return <Navigate to="/login" />
    }

    // return (showSmt())


}
export default ProtectedRoutes;

