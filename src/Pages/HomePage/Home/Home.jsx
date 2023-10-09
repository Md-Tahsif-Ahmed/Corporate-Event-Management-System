import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
         
            <Navbar></Navbar>
            <Banner></Banner>
             
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;