import AppContainer from "../pages/container";
import { useAuth } from "../store/auth/context"
import { Navigate, useLocation } from "react-router-dom";


export const AuthGaurd = () => {
    const location = useLocation();
    const authUser = useAuth();
    console.log('sdhgvejsvjle hfew ');
    console.log('authuser is ', authUser);
    if (authUser && Object.keys(authUser.user).length && !authUser.isFirebaseAuthenticated) {
        return <div>Loading....</div>
    }
    else if(authUser && authUser.user.uid) {
        return <AppContainer />;
    } else {
        return <Navigate to={`/login?redirectLink=${location.pathname}`}/>
    }
}

