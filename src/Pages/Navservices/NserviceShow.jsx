import { Link } from "react-router-dom";

 const NserviceShow = ({s}) => {
    const {id, title, image} = s;
    return (
        <div>
            <Link to='/services'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src= {image} alt={title} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default NserviceShow;