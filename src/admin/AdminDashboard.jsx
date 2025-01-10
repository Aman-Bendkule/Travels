import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import ContactByUser from './ContactByUser';
import EnquireByUser from './EnquireByUser';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const isAdmin = localStorage.getItem('isAdmin');

    if (!isAdmin) {
        return <Navigate to="/" />;
    }

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div>
                <Routes>
                    <Route path="contact" element={<ContactByUser />} />
                    <Route path="enquire" element={<EnquireByUser />} />
                </Routes> 
            </div>
        </div>
    );
};

export default AdminDashboard;


