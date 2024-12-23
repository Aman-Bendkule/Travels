// // Navbar.js
// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from '../assets/arohitravels.png';
// import "../css/Navbar.css"
// import { useEffect, useState } from 'react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) { // Adjust the value to control when the navbar changes
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup function
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);



//   return (
//     <nav className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''}`} >
//       <div className="container">
//         <img className='logo' src={logo} alt="Arohi Travels Logo" />
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarNav" 
//           aria-controls="navbarNav" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" ></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="#" >Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" >Contact</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" >About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#" >Rent Car</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/arohitravels.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import "../css/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the value to control when the navbar changes
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <img className="logo" src={logo} alt="Arohi Travels Logo" />
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rent-car">Rent Car</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
