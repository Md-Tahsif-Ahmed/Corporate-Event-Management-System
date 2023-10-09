import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const ShowServices = ({ service }) => {
  const { id, title, image, price, description, button_color, text_color } = service;

  // Use AuthContext to check the user's authentication status
  const { user } = useContext(AuthContext);

  return (
    <div className="full-screen-container">
      <div className="card lg:card-side bg-base-100 shadow-xl w-full">
        
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-ghost">{price}</button>
            
            {/* Use conditional rendering based on authentication */}
            {
            user ? (
              <Link to={`/details/${id}`}>
                <button className="btn btn-secondary text-white font-bold py-1 normal-case">View Details</button>
              </Link>
            ) : (
              <Link to="/login"> {/* Redirect to the login page if not authenticated */}
                <button className="btn btn-secondary text-white font-bold py-1 normal-case">Login to View Details</button>
              </Link>
            )
            }
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
