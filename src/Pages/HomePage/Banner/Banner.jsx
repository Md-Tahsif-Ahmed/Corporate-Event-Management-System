import PropTypes from 'prop-types';
const Banner = () => {
    const bgStyle = {
        backgroundImage: "url('https://i.ibb.co/Y7r4yNP/cover.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",  
        height: "100vh",
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",  
    };

    return (
        <div style={bgStyle} className="mb-16 relative">     
            <div className="absolute">
                <h1 className="text-center font-bold text-black text-xl md:text-2xl lg:text-5xl italic">Welcome to Our Corporate Event</h1>
                <div className="text-center my-8">
                     
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {

    handleSubmit: PropTypes.any
};

export default Banner;
