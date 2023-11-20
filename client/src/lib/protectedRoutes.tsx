import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoutes = ({children}) => {
    const isAuthenticated = useSelector((state: any) => state.auth.user !== undefined)

    return isAuthenticated ? (
        <>{ children }</>
    ) : (
        <Navigate to = "/" replace />
    )
}

export default ProtectedRoutes;