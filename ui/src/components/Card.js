import React from "react";

export default function Card() {
  return (
    
    <div className="container" style={{paddingTop: "2.5rem"}}>
      <div className="card" style={{width: "18rem",}}>
        <img src="https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg?w=2000" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
