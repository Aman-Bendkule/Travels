import '../admin/css/ContactByUser.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


const ContactByUser = () => {

  const [customerData, setCustomerData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/submitData')
      .then(response => {
        setCustomerData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="contact-container">
      <h2>Contact by User</h2>
      <div className="contact-table-wrapper">
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact No</th>
              <th>Trip Type</th>
              <th>Car Type</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {customerData.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.contactNo}</td>
              <td>{customer.tripType}</td>
              <td>{customer.carType}</td>
              <td>{customer.date}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <button onClick={handlePrint} className="print-button">Print</button>
    </div>
  );
};

export default ContactByUser;





