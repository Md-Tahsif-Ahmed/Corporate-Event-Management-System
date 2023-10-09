import Footer from "../HomePage/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
const About = () => {
    const styleDiv = {
        backgroundImage: "url('https://i.ibb.co/dP0PYks/123.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",  
        height: "100vh",
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        flexGrow: 1,
    };
    return (
        <div style={styleDiv}>
            
            <p className="text-center mt-16 md:mt-28 lg:mt-52 max-w-7xl mx-auto text-white lg:text-lg px-4 lg:p-0">we specialize in corporate event management, crafting exceptional experiences that leave a lasting impact. From conferences to product launches, we handle every detail, ensuring seamless execution.

                Our commitment extends beyond the event itself. We also offer website integration services, creating dedicated online spaces that reflect your brand and communicate event details effectively.

                With professionalism, creativity, and adaptability at our core, we redefine corporate events, making them not just memorable but truly exceptional. Partner with us to elevate your events and enhance your online presence.

                Discover the difference at Your success is our mission.</p>
           
        </div>
    );
};

export default About;