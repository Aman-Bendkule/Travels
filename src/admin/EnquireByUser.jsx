import '../admin/css/EnquireByUser.css';
import  { useEffect, useState } from 'react';



const EnquireByUser = () => {

    const [enquiryData, setEnquiryData] = useState([]);

        useEffect(() => {
            const fetchEnquiries = async () => {
                try {
                    const response = await fetch('http://localhost:3000/inTouchData');
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const data = await response.json();
                    setEnquiryData(data);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
    
            fetchEnquiries();
        }, []);

        const handlePrint = () => {
            window.print();
          };
    

    return (
        <div className="enquire-container">
            <h2>Enquire by User</h2>
            <div className="table-wrapper">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                    {enquiryData.map((enquiry, index) => (
                            <tr key={index}>
                                <td>{enquiry.name}</td>
                                <td>{enquiry.email}</td>
                                <td>{enquiry.subject}</td>
                                <td>{enquiry.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button onClick={handlePrint} className="print-button">Print</button>
        </div>
    );
};

export default EnquireByUser;

