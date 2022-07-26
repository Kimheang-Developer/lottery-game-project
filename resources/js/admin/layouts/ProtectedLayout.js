import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from '../layouts/Header'
import Sidebar from "./Sidebar";

export const ProtectedLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if (!user) {
        return <Navigate to="admin/login" />;
    }

    return (
        <>
            <div className='flex h-screen bg-gray-50'>
                <Sidebar/>
                <div className='flex flex-col flex-1'>
                    <Header/>
                    <main className='bg-slate-100 h-full pb-16 overflow-y-auto'>
                        <div className='container px-6 mx-auto grid'>
                            {outlet}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}