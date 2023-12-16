import React from "react";

export default function Header(props) {
  return (
    <>
      
      <div className="header">

        <div className="hero-txtcontent">
        <h1>Hello There!!</h1>
        <p className="hero md:container md:mx-auto">
          {props.content}
         
        </p>
        </div>
        
        <button className="secondary">
            <a href="#">Read more </a>
        </button>
      </div>
    </>
  );
}
