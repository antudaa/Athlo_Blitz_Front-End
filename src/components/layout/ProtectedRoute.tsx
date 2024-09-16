import { ReactNode, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

type TUser = {
    role: string;
};

type TProtectedRoute = {
    children: ReactNode;
    role?: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();
    const [user, setUser] = useState<TUser | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const verifyUser = async () => {
            if (token) {
                const verifiedUser = verifyToken(token) as TUser;
                setUser(verifiedUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        };

        verifyUser();
    }, [token]);

    useEffect(() => {
        if (!loading && role && role !== user?.role) {
            dispatch(logout());
        }
    }, [role, user, token, dispatch, loading]);

    if (!token) {
        return <Navigate to="/login" replace={true} />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (role && role !== user?.role) {
        return <Navigate to="/login" replace={true} />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
