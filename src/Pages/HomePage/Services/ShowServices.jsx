import React from 'react';

const ShowServices = ({ service }) => {
  const { id, title, image, price, description, button_color, text_color } = service;

  return (
    <div className="full-screen-container">
      <div className="card lg:card-side bg-base-100 shadow-xl w-full">
        
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">{price}</button>
          </div>

        </div>
        <figure>
          <img className="w-full  h-40" src={image} alt={title} />  
        </figure>
      </div>
    </div>
  );
};

export default ShowServices;
