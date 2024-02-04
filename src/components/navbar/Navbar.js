// import "./Navbar.css";


// export default function Navbar() {
//     return (
//         <>
    
//     <div class="shadow-lg p-3 mb-5  rounded">
//     <nav class="navbar navbar-expand-lg navbar-light bg-* ">
//             <div class="container">
//                     <a class="navbar-brand" href="#">  <h4> &lt; ROSHAN&#47;&gt;</h4> </a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                 <span class="navbar-toggler-icon"></span>
//                     </button>
//                 <div class="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
//                    <ul class="navbar-nav mb-2 mb-lg-0 ">
//                       <li class="nav-item mr-10">
//                         <a class="nav-link active" aria-current="page" href="#">HOME</a>
                    
//                      </li>
//                      <li class="nav-item">
//                        <a class="nav-link" href="#about-me">ABOUT ME</a>
//                      </li>
        
//                      <li class="nav-item">
//                          <a class="nav-link">PORTFOLIO</a>
//                      </li>
//                      <li class="nav-item ">
//                          <a class="nav-link">EXPERIENCE</a>
//                      </li>
//                      <li class="nav-item ">
//                          <a class="nav-link">SERVICES</a>
//                      </li>
//                    </ul>
     
//                </div>
            
//            </div>
        
//         </nav>
//     </div>  
         

//         </>
//     ) ;
// }



// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './Navbar.css';

// export default function Navbar() {
//     const location = useLocation();

//     return (
//         <>
//             <div className="shadow-lg p-3 mb-5  rounded">
//                 <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                     <div className="container">
//                         <Link className="navbar-brand" to="/">
//                             <h4>&lt; ROSHAN&#47;&gt;</h4>
//                         </Link>
//                         <button
//                             className="navbar-toggler"
//                             type="button"
//                             data-bs-toggle="collapse"
//                             data-bs-target="#navbarSupportedContent"
//                             aria-controls="navbarSupportedContent"
//                             aria-expanded="false"
//                             aria-label="Toggle navigation"
//                         >
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
//                             <ul className="navbar-nav mb-2 mb-lg-0">
//                                 <li className={`nav-item ${location.pathname === '/' ? 'mr-10' : ''}`}>
//                                     <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
//                                         HOME
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className={`nav-link ${location.pathname === '/about-me' ? 'active' : ''}`} to="/about-me">
//                                         ABOUT ME
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`} to="/portfolio">
//                                         PORTFOLIO
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className={`nav-link ${location.pathname === '/experience' ? 'active' : ''}`} to="/experience">
//                                         EXPERIENCE
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services">
//                                         SERVICES
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
//         </>
//     );
// }


import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [activeItem, setActiveItem] = useState('HOME');

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <>
            <div className="shadow-lg p-3 mb-5 rounded">
                <nav className="navbar navbar-expand-lg navbar-light bg-*">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <h4>&lt; ROSHAN&#47;&gt;</h4>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className={`nav-item ${activeItem === 'HOME' ? 'mr-10' : ''}`}>
                                    <a
                                        className={`nav-link ${activeItem === 'HOME' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('HOME')}
                                        href="/"
                                    >
                                        HOME
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeItem === 'ABOUT ME' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('ABOUT ME')}
                                        href="#about-me"
                                    >
                                        ABOUT ME
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeItem === 'PORTFOLIO' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('PORTFOLIO')}
                                        href="#portfolio"
                                    >
                                        PORTFOLIO
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeItem === 'EXPERIENCE' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('EXPERIENCE')}
                                        href="#toolsandtech"
                                    >
                                        TECH&TOOLS
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeItem === 'SERVICES' ? 'active' : ''}`}
                                        onClick={() => handleItemClick('SERVICES')}
                                        href="#services"
                                    >
                                        SERVICES
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
