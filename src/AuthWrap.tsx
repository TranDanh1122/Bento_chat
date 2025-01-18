import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "./redux/store";
import { Navigate } from "react-router-dom";
export default function AuthWrap({ children }: { children: React.ReactNode }): React.JSX.Element {
    const { token } = useSelector((state: AppState) => state.auth)
    if (!token) return <Navigate to="/auth/login"></Navigate>
    return (<>
        {children}
    </>)
} 