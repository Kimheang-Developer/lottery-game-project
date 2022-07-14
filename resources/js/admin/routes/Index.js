import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from '../pages/Dashboard'
import Layout from '../layouts/Layout'
import ProtectedRoutes from '../routes/ProtectedRoutes'
import PublicRoutes from '../routes/PublicRoutes'

const Index = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<ProtectedRoutes/>}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>

                    <Route path="login" element={<PublicRoutes/>}>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Index