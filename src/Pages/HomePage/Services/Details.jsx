import { useLoaderData, useParams } from "react-router-dom";
import { FaDollarSign } from 'react-icons/fa';

 const Details = () => {
    const services = useLoaderData();
        const { id } = useParams()
        const idInt = parseInt(id);
        const service = services.find((s) => s.id === idInt);

        const { image, title, description, price } = service;
        
 

    return (
        <div className="max-w-7xl mx-auto my-8 ">
        <div className="">
            <img className="w-full h-96 rounded-lg" src={image} alt={title} />
        </div>
       <div className="flex items-center justify-between">
       <h1 className=" px-6 lg:px-0 text-2xl lg:text-4xl font-bold text-black my-8">{title}</h1>
        <button className="btn w-36 bg-pink-500 normal-case text-center flex items-center justify-center text-white font-semibold rounded border-0" >Price<span className="flex"><FaDollarSign />{price}</span></button>
       </div>
        <p className="px-6 lg:px-0 text-gray-500">{description}</p>
        
        
          
    </div>
    );
};

export default Details;