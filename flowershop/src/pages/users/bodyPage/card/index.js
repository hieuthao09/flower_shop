import React, { useState, useRef } from "react";
import "./style.scss";

export default function Card({ data }) {
  


  return (
    <div className="container">
    <div className="container-card">
    {data.map((item, id) => (
        <div
          key={id}
          className="card"
        >
          <img src={item.url}
            alt={item.name}
            className="sneaker-img"/>
          <h1 className="title" >
            {item.title}
          </h1>
          <p >{item.description}</p>

          <div className="button-box" >
            <button className="purchase">View</button>
          </div>
        </div>
      ))}
    </div>
      
    </div>
  );
}
