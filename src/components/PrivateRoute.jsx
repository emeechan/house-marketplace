import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from "./Spinner"

const PrivateRoute = () => {
    //checks if we're logged in
    const {loggedIn, checkingStatus } = useAuthStatus()

    //if checking status is true and its loading then say Loading...
    if(checkingStatus) {
        return <Spinner />
    }
  
    //if not, it renderes a redirect  if not logged in, or an outlet if we are
    return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute
