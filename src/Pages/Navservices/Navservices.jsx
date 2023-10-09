import { useLoaderData } from "react-router-dom";
import NserviceShow from "./NserviceShow";

const Navservices = () => {
  const service = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-7xl mx-auto my-10">
      {service.map((s) => (
        <NserviceShow key={s.id} s={s} />
      ))}
    </div>
  );
};

export default Navservices;
