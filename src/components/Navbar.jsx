// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// import './navbar.css'

// const Navbar = () => {
//   const [showNavbar, setShowNavbar] = useState(false)

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar)
//   }

//   return (
//     <nav className="navbar">
//       <div className="container">
        
//         <div className="menu-icon" onClick={handleShowNavbar}>
//           <Hamburger />
//         </div>
//         <div className={`nav-elements  ${showNavbar && 'active'}`}>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/study-materials">Study Materials</NavLink>
//             </li>
//             <li>
//               <NavLink to="/gallery">Gallery</NavLink>
//             </li>
//             <li>
//               <NavLink to="/map">Maps</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar