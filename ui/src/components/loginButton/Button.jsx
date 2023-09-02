import React, { useState } from "react";
import "./Button.css";

export default function Button() {

const [click, setClick] = useState(false)


  return (
    <>
      <div className="icon-box" onClick={()=>setClick(!click)}>
        <i class="bi bi-person-circle"></i>
      </div>
     { click && <div className="content" >
        <div className="content-1">
          <button >Login</button>
        </div>
        <div className="content-1">
          <button >SignUp</button>
        </div>
      </div>}
    </>
  );
}
