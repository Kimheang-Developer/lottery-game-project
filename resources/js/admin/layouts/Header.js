import React, { useState, useEffect, useRef } from 'react'
import { Transition } from '@tailwindui/react'
import { setLanguage } from 'react-multi-lang'
import { US, KH, TH, CN } from 'country-flag-icons/react/3x2'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [sideMenu, setSideMenu] = useState(false)

    const container = useRef(null)

    // Allow for outside click
    useEffect(() => {
        function handleOutsideClick(event) {
            if (!container.current.contains(event.target)) {
                if (!isOpen) return;
                setIsOpen(false);
            }
        }
        
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, [isOpen, container])

    return (
        <>
            <header className='z-10 py-4 bg-gray-900 shadow-md' ref={container}>
                <div className='container flex items-center justify-between md:justify-end h-full px-6 mx-auto'>
                    {/* Mobile hamburger */}
                    <button onClick={() => setSideMenu(!sideMenu)} className='p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                    <ul className='flex items-center flex-shrink-0 gap-6'>
                        <li className='relative'>
                            <button onClick={() => setIsOpen(!isOpen)} className='flex items-center justify-center align-middle'>
                                <US title="United States" className='w-5 h-5'/>
                                <span className='text-slate-300 text-sm font-medium ml-2'>English</span>
                            </button>
                            <Transition
                                show={isOpen}
                                enter="transition-opacity duration-75"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className='w-40 bg-white rounded-md mt-1 p-2 text-gray-600 absolute right-0 shadow-md'>
                                    <button type='button' onClick={() => setLanguage('en')} className='text-sm font-semibold inline-flex items-center w-full p-2 hover:bg-gray-100 hover:rounded-md transition duration-200 ease-in-out'>
                                        <US title="United States" className='w-5 h-5'/>
                                        <span className='text-slate-800 text-sm font-normal ml-4'>English</span>
                                    </button>
                                    <button type='button' onClick={() => setLanguage('kh')} className='text-sm font-semibold inline-flex items-center w-full p-2 hover:bg-gray-100 hover:rounded-md transition duration-200 ease-in-out'>
                                        <KH title="Khmer" className='w-5 h-5'/>
                                        <span className='text-slate-800 text-sm font-normal ml-4'>Khmer</span>
                                    </button>
                                    <button type='button' onClick={() => setLanguage('th')} className='text-sm font-semibold inline-flex items-center w-full p-2 hover:bg-gray-100 hover:rounded-md transition duration-200 ease-in-out'>
                                        <TH title="Thai" className='w-5 h-5'/>
                                        <span className='text-slate-800 text-sm font-normal ml-4'>Thai</span>
                                    </button>
                                    <button type='button' onClick={() => setLanguage('cn')} className='text-sm font-semibold inline-flex items-center w-full p-2 hover:bg-gray-100 hover:rounded-md transition duration-200 ease-in-out'>
                                        <CN title="China" className='w-5 h-5'/>
                                        <span className='text-slate-800 text-sm font-normal ml-4'>China</span>
                                    </button>
                                </div>
                            </Transition>
                        </li>
                        <li className='relative'>
                            <button className='align-middle after:content-[""] after:w-2 after:h-2 after:bg-red-700 after:rounded-full after:absolute after:-top-0.5 after:right-0'>
                                <svg className='w-5 h-5 fill-slate-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"/></svg>
                            </button>
                            <div className='w-56 bg-white rounded-md mt-1 p-2 text-gray-600 absolute right-0 shadow-md hidden'>
                                <h5>Notifications</h5>

                            </div>
                        </li>
                        <li className='relative'>
                            <button type='button' onClick={() => setIsOpen(!isOpen)} className='align-middle rounded-full focus:shadow-outline-purple focus:outline-none'>
                                <div className='flex items-center h-full'>
                                    <img className="object-cover w-10 h-10 rounded-full border-2 border-white border-opacity-10 shadow-lg" src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82" alt=""/>
                                    <div className='hidden md:block ml-3'>
                                        <div className='text-slate-300 text-sm truncate text-left font-medium'>John Doe</div>
                                        <div className='text-xs text-slate-400'>Software Engineer</div>
                                    </div>
                                </div>
                            </button>
                            {/* <ul className='w-56 bg-white rounded-md mt-1 p-2 text-gray-600 absolute right-0 shadow-md'>
                                    <li>
                                        <Link to="" className='text-sm font-semibold inline-flex items-center w-full p-2 hover:bg-gray-100 hover:rounded-md transition duration-200 ease-in-out'>
                                            <svg className="w-5 h-5 mr-3" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" >
                                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" ></path>
                                            </svg>
                                            <span className='text-slate-800 text-sm font-normal'>Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='text-sm font-semibold inline-flex items-center w-full p-2 hover:bg-gray-100 hover:rounded-md transition duration-200 ease-in-out'>
                                            <svg className="w-5 h-5 mr-3" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" >
                                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" ></path>
                                            </svg>
                                            <span className='text-slate-800 text-sm font-normal'>Reset Password</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="" className='text-sm font-semibold inline-flex items-center w-full p-2 hover:bg-gray-100 hover:rounded-md transition duration-200 ease-in-out'>
                                            <svg className="w-5 h-5 mr-3" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" >
                                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" ></path>
                                            </svg>
                                            <span className='text-slate-800 text-sm font-normal'>Help</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className='my-2 -mx-2 bg-gray-200'/>
                                    </li>
                                    <li>
                                        <Link to="" className='text-sm font-semibold inline-flex items-center w-full p-2 hover:bg-gray-100 hover:rounded-md transition duration-200 ease-in-out'>
                                            <svg className="w-5 h-5 mr-3" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" >
                                                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" ></path>
                                            </svg>
                                            <span className='text-slate-800 text-sm font-normal'>Logout</span>
                                        </Link>
                                    </li>
                                </ul> */}
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header