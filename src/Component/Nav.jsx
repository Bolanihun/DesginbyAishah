import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import ProjectDropdown from "./ProjectDropdown";

export default function Nav() {
  const [openProjectMenu, setopenProjectMenu] = useState(false);
  return (
    <>
      {/* <div className='nav' id='nav-wrapper'></div> */}
      <div class="bgblur"></div>
      <nav>
        <ul>
          <div className="nav-left">
            <h3>DesignbyAishah</h3>
          </div>
          <div className="mid-nav">
            <li>
               <Link to="/"> Home </Link>
            </li>
            <li>
            <Link to="/About"> About </Link>
              
            </li>
            <li>
            <Link to="/Project">Projects
                <div className="icon" onClick={()=> setopenProjectMenu((prev)=>!prev)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                  >
                    <path
                      d="M1 1.75L11.1976 10.1741C11.9497 10.7954 13.0403 10.7834 13.7786 10.1458L23.5 1.75"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                </Link>
                {
                  openProjectMenu &&  <ProjectDropdown/>
                }
             
            </li>
          </div>

          <button className="primary-btn">Resume</button>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
