import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
      const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <nav className={sidebar ? "sidebar active" : "sidebar"}>
      <button className="hamburger" type="button" onClick={showSidebar}>
        <div></div>
      </button>
      <ul onClick={showSidebar}>
        <li><Link className='link' to='/'>Home</Link></li>
        <li><Link className='link' to='/about'>About Us</Link></li>
        <li><Link className='link' to='/contact'>Contact Us</Link></li>
        <li><Link className='link' to='/course'>Course</Link></li>
        <li><Link className='link' to='/faculty'>Faculty</Link> </li>
        
      
        
        
        
        
      </ul>
    </nav>
    );
  }

  export default Sidebar;
