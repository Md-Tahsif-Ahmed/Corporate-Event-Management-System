import React, { useEffect, useState } from "react";
import ShowServices from "./ShowServices";

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())  
        .then(data => setServices(data))
        .catch(error => console.error(error));  
    }, []);

    console.log(services);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                services.map((service) => <ShowServices key={service.id} service={service}></ShowServices>
                     
                )
            }
           
        </div>
    );
};

export default Services;
