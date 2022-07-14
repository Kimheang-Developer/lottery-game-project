import React,{ useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Transition } from '@tailwindui/react'
import { useTranslation } from 'react-multi-lang'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const container = useRef(null)

    const t = useTranslation()

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

    // Allow to use the `esc` key
    useEffect(() => {
        function handleEscape(event) {
            if (!isOpen) return;
        
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        }
    
        document.addEventListener("keyup", handleEscape);
        return () => document.removeEventListener("keyup", handleEscape);
    }, [isOpen]);

    return (
        <> 
            {/* Desktop sidebar  */}
            <aside className='z-20 hidden w-64 overflow-y-auto bg-gray-900 md:block flex-shrink-0' ref={container}>
                <div className='pb-4 text-gray-500'>
                    <Link to='/dashboard' className='text-lg font-bold text-gray-400 flex items-center justify-center py-5'>Windmill</Link>
                    <ul>
                        <li className='relative'>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    isActive ? 'bg-gray-700 w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out' : 'w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out'
                                }
                            >
                                <svg className="w-5 h-5 mx-3 text-gray-300" aria-hidden="true" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" ></path>
                                </svg>
                                <span className="text-gray-300">{t('sidebar.dashboard')}</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className='relative'>
                            <NavLink
                                to="/game"
                                className={({ isActive }) =>
                                    isActive ? 'bg-gray-700 w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out' : 'w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out'
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                                </svg>
                                <span className="text-gray-300">{t('sidebar.livegame')}</span>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink
                                to="/withdraw"
                                className={({ isActive }) =>
                                    isActive ? 'bg-gray-700 w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out' : 'w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out'
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                <span className="text-gray-300">{t('sidebar.withdraw')}</span>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink
                                to="/topup"
                                className={({ isActive }) =>
                                    isActive ? 'bg-gray-700 w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out' : 'w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out'
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-300">{t('sidebar.topup')}</span>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink
                                to="/bank"
                                className={({ isActive }) =>
                                    isActive ? 'bg-gray-700 w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out' : 'w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out'
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                                <span className="text-gray-300">{t('sidebar.bank')}</span>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <NavLink
                                to="/user"
                                className={({ isActive }) =>
                                    isActive ? 'bg-gray-700 w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out' : 'w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out'
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                <span className="text-gray-300">{t('sidebar.user')}</span>
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className='relative'>
                            <NavLink
                                to="/authentication"
                                className={({ isActive }) =>
                                    isActive ? 'bg-gray-700 w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out' : 'w-full text-sm font-semibold text-gray-800 inline-flex items-center py-3 transition duration-150 ease-in-out'
                                }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                                <span className="text-gray-300">{t('sidebar.authentication')}</span>
                            </NavLink>
                        </li>
                        <li className='relative'>
                            <button type='button' className='w-full text-sm font-semibold inline-flex items-center py-3 hover:bg-gray-800 transition duration-150 ease-in-out'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-3 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-300">{t('sidebar.logout')}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Sidebar