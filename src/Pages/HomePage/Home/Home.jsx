// Import necessary libraries and styles
import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS
// import './Home.css'; // Import your custom CSS file if needed

// Import your custom components
import Banner from "../Banner/Banner";
import ChooseEvent from "../ChooseEvent/ChooseEvent";
import Services from "../Services/Services";
import Stories from "../Stories/Stories";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in milliseconds)
    });
  }, []);

  return (
    <div>
      {/* Components with data-aos attributes */}
      <Banner data-aos="fade"></Banner>
      <Services data-aos="slide-up"></Services>
      <ChooseEvent data-aos="fade"></ChooseEvent>
      <Stories data-aos="slide-up"></Stories>
    </div>
  );
}

export default Home;
