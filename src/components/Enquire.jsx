// import React, { useState } from "react";
// import '../css/Enquire.css';
// import { v4 as uuidv4 } from 'uuid';

// const Enquire = () => {
//   const [enquiryData, setEnquiryData] = useState({
//     tripType: '',
//     carType: '',
//     date: '',
//     name: '',
//     contactNo: ''
//   });

//   const [errors, setErrors] = useState({});

//   // WhatsApp phone number
//   const phoneNumber = "919028874741"; 

//   const handleChange = (e) => {
//     setEnquiryData({ ...enquiryData, [e.target.name]: e.target.value });
//   };

//   // Validation function
//   const validateForm = () => {
//     const newErrors = {};

//     if (!enquiryData.tripType.trim()) {
//       newErrors.tripType = 'Trip Type is required';
//     }

//     if (!enquiryData.carType.trim()) {
//       newErrors.carType = 'Car Type is required';
//     }

//     if (!enquiryData.date) {
//       newErrors.date = 'Date is required';
//     }

//     if (!enquiryData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }

//     if (!enquiryData.contactNo.trim()) {
//       newErrors.contactNo = 'Contact Number is required';
//     } else if (!/^\d{10}$/.test(enquiryData.contactNo)) {
//       newErrors.contactNo = 'Contact Number must be a valid 10-digit number';
//     }

//     setErrors(newErrors);

//     // Return true if no errors
//     return Object.keys(newErrors).length === 0;
//   };

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       alert('Please fix the errors in the form.');
//       return;
//     }

//     try {
//       let response = await fetch('http://travels-dusky.vercel.app
/submitData', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...enquiryData, id: uuidv4() })
//       });

//       if (response.ok) {
//         const responseData = await response.json();
//         console.log(responseData);
//         alert(responseData.message);
//       }
//     } catch (error) {
//       console.error('Error Submitting data:', error);
//     }

    
//     // const message = `
//     //   Hello! I want to make an enquiry for a trip.\n\n
//     //   Trip Type: ${enquiryData.tripType}\n
//     //   Car Type: ${enquiryData.carType}\n
//     //   Date: ${enquiryData.date}\n
//     //   Name: ${enquiryData.name}\n
//     //   Contact No.: ${enquiryData.contactNo}\n
//     //   Please assist me with the details.
//     // `;

    
//     // const encodedMessage = encodeURIComponent(message);

    
//     // const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     // window.open(whatsappUrl, "_blank");
//   };

//   return (
//     <div className="enquire-form">
//       <h2>Book Taxi / Make Enquiry</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="tripType">Trip Type *</label>
//           <input
//             type="text"
//             id="tripType"
//             name="tripType"
//             value={enquiryData.tripType}
//             onChange={handleChange}
//             placeholder="Enter Trip Type"
//             required
//           />
//           {errors.tripType && <p className="error">{errors.tripType}</p>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="carType">Car Type *</label>
//           <input
//             type="text"
//             id="carType"
//             name="carType"
//             value={enquiryData.carType}
//             onChange={handleChange}
//             placeholder="Enter Car Type"
//             required
//           />
//           {errors.carType && <p className="error">{errors.carType}</p>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="date">Date *</label>
//           <input
//             type="date"
//             id="date"
//             name="date"
//             value={enquiryData.date}
//             onChange={handleChange}
//             required
//           />
//           {errors.date && <p className="error">{errors.date}</p>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="name">Name *</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={enquiryData.name}
//             onChange={handleChange}
//             placeholder="Enter Your Name"
//             required
//           />
//           {errors.name && <p className="error">{errors.name}</p>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="contactNo">Contact No. *</label>
//           <input
//             type="text"
//             id="contactNo"
//             name="contactNo"
//             value={enquiryData.contactNo}
//             onChange={handleChange}
//             placeholder="Enter Contact Number"
//             required
//           />
//           {errors.contactNo && <p className="error">{errors.contactNo}</p>}
//         </div>
//         <button type="submit" className="submit-btn" onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Enquire;


import React, { useState } from "react";
import '../css/Enquire.css';
import { v4 as uuidv4 } from 'uuid';

const tripTypes = [
  "One Way", 
  "Car Rent", 
  "Tour Packages", 
  "Airport Transfer", 
  "Local City Taxi", 
  "Lonavala Sightseeing"
];

const carTypes = [
  "Ertiga", 
  "Swift Desire", 
  "Innova Crysta", 
  "Mahindra Xylo", 
  "Tavera", 
  "Scorpio", 
  "Tempo Traveller", 
  "Seventeen Seater", 
  "Twenty Seater", 
  "Thirty Two Seater", 
  "Fifty Seater Bus"
];

const Enquire = () => {
  const [enquiryData, setEnquiryData] = useState({
    tripType: '',
    carType: '',
    date: '',
    name: '',
    contactNo: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEnquiryData({ ...enquiryData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!enquiryData.tripType) newErrors.tripType = 'Trip Type is required';
    if (!enquiryData.carType) newErrors.carType = 'Car Type is required';
    if (!enquiryData.date) newErrors.date = 'Date is required';
    if (!enquiryData.name.trim()) newErrors.name = 'Name is required';
    if (!/^\d{10}$/.test(enquiryData.contactNo)) {
      newErrors.contactNo = 'Contact Number must be a valid 10-digit number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert('Please fix the errors in the form.');
      return;
    }

    try {
      let response = await fetch('https://backend-testing-gray.vercel.app/submitData', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...enquiryData, id: uuidv4() })
      });

      if (response.ok) {
        const responseData = await response.json();
        alert(responseData.message);
      }
    } catch (error) {
      console.error('Error Submitting data:', error);
    }
  };

  return (
    <div className="enquire-form">
      <h2>Book Taxi / Make Enquiry</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Trip Type Dropdown */}
        <div className="form-group">
          <label htmlFor="tripType">Trip Type *</label>
          <select
            id="tripType"
            name="tripType"
            value={enquiryData.tripType}
            onChange={handleChange}
            required
          >
            <option value="">Select Trip Type</option>
            {tripTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
          {errors.tripType && <p className="error">{errors.tripType}</p>}
        </div>

        {/* Car Type Dropdown */}
        <div className="form-group">
          <label htmlFor="carType">Car Type *</label>
          <select
            id="carType"
            name="carType"
            value={enquiryData.carType}
            onChange={handleChange}
            required
          >
            <option value="">Select Car Type</option>
            {carTypes.map((car, index) => (
              <option key={index} value={car}>{car}</option>
            ))}
          </select>
          {errors.carType && <p className="error">{errors.carType}</p>}
        </div>

        {/* Date Input */}
        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input
            type="date"
            id="date"
            name="date"
            value={enquiryData.date}
            onChange={handleChange}
            required
          />
          {errors.date && <p className="error">{errors.date}</p>}
        </div>

        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={enquiryData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        {/* Contact Number Input */}
        <div className="form-group">
          <label htmlFor="contactNo">Contact No. *</label>
          <input
            type="text"
            id="contactNo"
            name="contactNo"
            value={enquiryData.contactNo}
            onChange={handleChange}
            placeholder="Enter Contact Number"
            required
          />
          {errors.contactNo && <p className="error">{errors.contactNo}</p>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Enquire;
