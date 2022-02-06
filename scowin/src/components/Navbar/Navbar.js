import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import { Link,  useLocation } from 'react-router-dom';
import './Navbar.css';
import logo_image from '../../images/scowin_logo_2.png';
import Nav from 'react-bootstrap/Nav'

function Navbar() {
  const location = useLocation(); 
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <>
      <div className='d-flex flex-direction-row bg-light justify-content-between align-items-center'>
        {/* Header navigation menu items */}
        <img src={logo_image} alt='logo_image' className='logo-image'></img>
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link as={Link} className={"underline" + (url === "/" ?" active-link" : "")} to="/"><span><AiIcons.AiFillHome /> Home  </span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className={"underline" + (url === "/manageStudent" ?" active-link" : "")}  to="/manageStudent"><span> <FaIcons.FaUserFriends /> Manage Student Details </span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className={"underline" + (url === "/vaccination" ?" active-link" : "")} to="/vaccination"><span><FaIcons.FaUserMd /> Update Vaccination status </span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className={"underline" + (url === "/generateReport" ?" active-link" : "")} to="/generateReport"><span><FaIcons.FaWpforms /> Generate Vaccination Reports </span></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} className={"underline" + (url === "/vaccinationDrive" ?" active-link" : "")} to="/vaccinationDrive">
              <span><FaIcons.FaSyringe /> Manage Vaccination drive </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="disabled" disabled>
              <span><FiIcons.FiLogOut /> Logout </span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
}

export default Navbar;
