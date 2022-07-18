import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from '../pages/Dashboard'

import Game from '../pages/game/Index'

import Bank from '../pages/bank/Bank'
import EditBank from '../pages/bank/EditBank'
import NewBankForm from '../pages/bank/NewBankForm'

import TopUp from '../pages/topup/TopUp'
import EditTopUp from '../pages/topup/EditTopUp'
import NewTopUpForm from '../pages/topup/NewTopUpForm'

import User from '../pages/user/User'
import EditUser from '../pages/user/EditUser'
import NewUserForm from '../pages/user/NewUserForm'

import Withdraw from '../pages/withdraw/Withdraw'
import EditWithdraw from '../pages/withdraw/EditWithdraw'
import NewWithdrawForm from '../pages/withdraw/NewWithdrawForm'

import Layout from '../layouts/Layout';

import ProtectedRoutes from '../routes/ProtectedRoutes'
import PublicRoutes from '../routes/PublicRoutes'

const Index = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index path="admin/dashboard" element={<Dashboard />} />
                    <Route path="admin/game" element={<Game />} />
                    <Route path="admin/topup" element={<TopUp />}>
                        <Route path=":topupId" element={<TopUp />} />
                        <Route path=":topupId/edit" element={<EditTopUp />} />
                        <Route path="new" element={<NewTopUpForm />} />
                    </Route>

                    <Route path="admin/bank" element={<Bank />}>
                        <Route path=":bankId" element={<Bank />} />
                        <Route path=":bankId/edit" element={<EditBank />} />
                        <Route path="new" element={<NewBankForm />} />
                    </Route>

                    <Route path="admin/user" element={<User />}>
                        <Route path=":userId" element={<User />} />
                        <Route path=":userId/edit" element={<EditUser />} />
                        <Route path="new" element={<NewUserForm />} />
                    </Route>

                    <Route path="admin/withdraw" element={<Withdraw />}>
                        <Route path=":withdrawId" element={<Withdraw />} />
                        <Route path=":withdrawId/edit" element={<EditWithdraw />} />
                        <Route path="new" element={<NewWithdrawForm />} />
                    </Route>

                    <Route path="admin/login" element={<Login/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Index