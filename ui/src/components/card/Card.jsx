import React from "react";

export default function Card({img, title, id}) {
  return (
    
    <div className="container" style={{paddingTop: "2.5rem"}}>
      <div className="card" style={{width: "18rem",}}>
        <img src={img} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{id}</h5>
          <p className="card-text">
         <h4>{title}</h4> 
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
