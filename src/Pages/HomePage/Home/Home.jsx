import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import ChooseEvent from "../ChooseEvent/ChooseEvent";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
         
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <ChooseEvent></ChooseEvent>
            <Footer></Footer>
        </div>
    );
};

export default Home;