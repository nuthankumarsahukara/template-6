import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute() {
    let token = localStorage.getItem("token")
    return (
        <div>
            {
                token ? (
                    <div>
                        {Children}
                    </div>
                ) : (
                    <Navigate to="/login" replace />
                )
            }
        </div>
    )
}
