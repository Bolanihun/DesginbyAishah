import React from "react";
import ProjectDropdown from "./ProjectDropdown";

export default function Nav() {
  return (
    <>
      {/* <div className='nav' id='nav-wrapper'></div> */}
      <nav>
        <ul>
          <div className="nav-left">
            <h3>DesignbyAishah</h3>
          </div>
          <div className="mid-nav">
            <li>
              {" "}
              <a href="#"> Home </a>
            </li>
            <li>
              {" "}
              <a href="#"> About </a>
            </li>
            <li>
              {" "}
              <a href="#">
                {" "}
                Projects{" "}
                <div className="icon">
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
                </div>{" "}
              </a>
              <ProjectDropdown/>
            </li>
          </div>

          <button className="primary-btn">Resume</button>
        </ul>
      </nav>
    </>
  );
}
