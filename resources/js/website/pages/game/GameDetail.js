/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Header from '../../components/Header'
import { currentDate } from '../../configs/helper'
import Countdown, { zeroPad } from 'react-countdown';

const GameDetail = () => {
    const [openTab, setOpenTab] = React.useState(1);

    const timer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            console.log('completed')
        } else {
            return (
                <span>
                  {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
                </span>
            );
        }
    }

    return (
        <>
            <Header title="60 Second" redirect="/game"/>
            <div className="bg-white py-3 px-3 drop-shadow-md border-b border-b-gray-100 flex items-center justify-between">
                <h4 className="text-slate-800 font-bold text-sm">{currentDate()}</h4>
                <h4 className="text-red-500 text-base font-bold text-right">
                    <Countdown date={Date.now() + 60000} renderer={timer} autoStart={true} zeroPadTime={2} intervalDelay={0}/>     
                </h4>
            </div>
            <div className="bg-white py-3 px-3 drop-shadow-md flex items-center justify-between">
                <div className='flex items-center justify-between gap-3'>
                    <span className='bg-red-500 w-7 h-7 rounded-full text-white text-sm font-bold flex items-center justify-center'>6</span>
                    <span>6</span>
                    <span className='text-sm'>Even</span>
                    <span className='text-sm'>Odd</span>
                </div>
            </div>
            <div className='flex items-start flex-row flex-nowrap bg-gray-50'>
                <div className="bg-white h-[calc(100vh-231px)] flex items-stretch flex-col flex-wrap list-none border-b-0 pl-0">
                    <a href='#' onClick={e => {e.preventDefault(); setOpenTab(1)}} className={"text-sm uppercase text-center leading-tight block px-6 py-8 hover:bg-gray-100 cursor-pointer " + (openTab === 1 ? "font-bold bg-gray-100" : "font-medium bg-white")}>សេសឬគូ</a>
                    <a href='#' onClick={e => {e.preventDefault(); setOpenTab(2)}} className={"text-sm uppercase text-center leading-tight block px-6 py-8 hover:bg-gray-100 cursor-pointer " + (openTab === 2 ? "font-bold bg-gray-100" : "font-medium bg-white")}>Number</a>
                    <a href='#' onClick={e => {e.preventDefault(); setOpenTab(3)}} className={"text-sm uppercase text-center leading-tight block px-6 py-8 hover:bg-gray-100 cursor-pointer " + (openTab === 3 ? "font-bold bg-gray-100" : "font-medium bg-white")}>Color</a>
                </div>
                <div>
                    <div className={openTab === 1 ? "block p-3" : "hidden p-3"}>
                        <div className="flex items-center justify-between flex-row flex-wrap gap-2">
                            <div className="text-center bg-white flex-auto rounded-md p-4 cursor-pointer" onClick={e => {e.preventDefault(); }}>
                                <h5 className="text-gray-700 font-semibold text-sm">Even</h5>
                                <span className="text-xs text-red-500 font-semibold">Received (1.96)</span>
                            </div>
                            <div className="text-center bg-white flex-auto rounded-md p-4 cursor-pointer" onClick={e => {e.preventDefault(); }}>
                                <h5 className="text-gray-700 font-semibold text-sm">Odd</h5>
                                <span className="text-xs text-red-500 font-semibold">Received (1.96)</span>
                            </div>
                            <div className="text-center bg-white flex-auto rounded-md p-4 cursor-pointer" onClick={e => {e.preventDefault(); }}>
                                <h5 className="text-gray-700 font-semibold text-sm">Blue</h5>
                                <span className="text-xs text-red-500 font-semibold">Received (1.96)</span>
                            </div>
                            <div className="text-center bg-white flex-auto rounded-md p-4 cursor-pointer" onClick={e => {e.preventDefault(); }}>
                                <h5 className="text-gray-700 font-semibold text-sm">Red</h5>
                                <span className="text-xs text-red-500 font-semibold">Received (1.96)</span>
                            </div>
                        </div>
                    </div>
                    <div className={openTab === 2 ? "block p-3" : "hidden p-3"}>
                    <div className="result hidden">1</div>
                        <div className="hidden"></div>
                        <div className="grid grid-cols-3 gap-2">
                            <button type="button" className="bg-white w-16 h-16 rounded-full text-gray-800 text-xl font-bold drop-shadow-md">1</button>
                            <button type="button" className="bg-white w-16 h-16 rounded-full text-gray-800 text-xl font-bold drop-shadow-md">2</button>
                            <button type="button" className="bg-white w-16 h-16 rounded-full text-gray-800 text-xl font-bold drop-shadow-md">3</button>
                            <button type="button" className="bg-white w-16 h-16 rounded-full text-gray-800 text-xl font-bold drop-shadow-md">4</button>
                            <button type="button" className="bg-white w-16 h-16 rounded-full text-gray-800 text-xl font-bold drop-shadow-md">5</button>
                            <button type="button" className="bg-white w-16 h-16 rounded-full text-gray-800 text-xl font-bold drop-shadow-md">6</button>
                            <button type="button" className="bg-white w-16 h-16 rounded-full text-gray-800 text-xl font-bold drop-shadow-md">7</button>
                            <button type="button" className="bg-white w-16 h-16 rounded-full text-gray-800 text-xl font-bold drop-shadow-md">8</button>
                            <button type="button" className="bg-white w-16 h-16 rounded-full text-gray-800 text-xl font-bold drop-shadow-md">9</button>
                        </div>
                    </div>
                    <div className={openTab === 3 ? "block p-3" : "hidden p-3"}>
                        Tab 3 content vertical
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameDetail