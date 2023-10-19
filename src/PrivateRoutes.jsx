import { useContext } from "react";
import {Navigate, useLocation} from "react-router-dom"
import { AuthContext } from "./pages/provider/AuthProvider";
// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loading){
       return <span className="loading loading-bars loading-lg text-purple-500"></span>;
    }
    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;