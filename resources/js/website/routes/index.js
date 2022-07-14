import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Game from '../pages/game/Game'
import Gift from '../pages/gift/Gift'
import MyInfo from '../pages/user/MyInfo'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Announcement from '../pages/announcement/Announcement'
import GameDetail from '../pages/game/GameDetail'
import SetUp from '../pages/setting/Setting'
import Comment from '../pages/setting/Comment'
import About from '../pages/setting/About'
import ChangePassword from '../pages/user/ChangePassword'
import BasicInfo from '../pages/user/UserDetail'
import Withdraw from '../pages/user/Withdraw'
import TopUp from '../pages/user/TopUp'
import NotFound from '../pages/NotFound'


const Index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/mine" element={<MyInfo />} />
                <Route path="/set-up" element={<SetUp />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/comment" element={<Comment />} />
                <Route path="/withdraw" element={<Withdraw />} />
                <Route path="/top-up" element={<TopUp />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/basic-info" element={<BasicInfo />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/announcement" element={<Announcement />} />
                <Route path="/game-detail" element={<GameDetail />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Index