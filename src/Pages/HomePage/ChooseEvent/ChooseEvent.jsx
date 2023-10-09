const ChooseEvent = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-center my-10 font-bold text-2xl">WHY CHOOSE US FOR YOUR EVENT?</h1>

           <div className="flex items-center justify-center space-x-6 mt-4">
            <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">ALL KIND OF LOGISTICS AND RESOURCES SUPPORT</h2>
                        <p>As an experienced Event Management company, we offer a comprehensive range of event equipment,
                             logistics, and resources to ensure your event's success. We provide top-notch logistical support, 
                             including cutting-edge technology, specialized equipment, and efficient transportation solutions. 
                             With our expertise, your event will run smoothly,
                             allowing you to focus on creating a memorable experience for your attendees.</p>
                    </div>
                </div>
                <div className="card w-96 bg-neutral text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">EXPERIENCED EVENT PLANNER AND MANAGER</h2>
                        <p>When it comes to orchestrating a successful event, meticulous planning,
                             expert management, and flawless execution are paramount. Our team of experienced event
                              planners and managers is dedicated to turning your vision into reality. We have the knowledge 
                              and experience to handle every aspect of your event, from crafting innovative concepts to 
                              coordinating logistics and ensuring seamless execution.
                              
                            </p>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default ChooseEvent;