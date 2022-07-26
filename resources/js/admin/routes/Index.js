import React from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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

import Authentication from '../pages/authentication/Authentication'

import Layout from '../layouts/Layout';
import { RequireAuth } from "../components/auth/RequireAuth";

const Index = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="admin/dashboard" element={<Dashboard />} />
                    <Route path="admin/game" element={<RequireAuth><Game /></RequireAuth>} />

                    <Route path="admin/authentication" element={<RequireAuth><Authentication /></RequireAuth>} />
                    
                    <Route path="admin/topup" element={<RequireAuth><TopUp /></RequireAuth>}>
                        <Route path=":topupId" element={<TopUp />} />
                        <Route path=":topupId/edit" element={<EditTopUp />} />
                        <Route path="new" element={<NewTopUpForm />} />
                    </Route>

                    <Route path="admin/bank" element={<RequireAuth><Bank /></RequireAuth>}>
                        <Route path=":bankId" element={<Bank />} />
                        <Route path=":bankId/edit" element={<EditBank />} />
                        <Route path="new" element={<NewBankForm />} />
                    </Route>

                    <Route path="admin/user" element={<RequireAuth><User /></RequireAuth>}>
                        <Route path=":userId" element={<User />} />
                        <Route path=":userId/edit" element={<EditUser />} />
                        <Route path="new" element={<NewUserForm />} />
                    </Route>

                    <Route path="admin/withdraw" element={<RequireAuth><Withdraw /></RequireAuth>}>
                        <Route path=":withdrawId" element={<Withdraw />} />
                        <Route path=":withdrawId/edit" element={<EditWithdraw />} />
                        <Route path="new" element={<NewWithdrawForm />} />
                    </Route>

                    {/* <Route path="admin/login" element={<Login/>}/> */}
                    <Route path="admin/login" element={<Login/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Index