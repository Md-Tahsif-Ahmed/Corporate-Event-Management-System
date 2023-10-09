 import a from "../../../assets/31.jpg"
 import b from "../../../assets/32.jpg"
 import c from "../../../assets/33.jpg"
 const Stories = () => {
    return (
        <div>
            <h1 className="text-center my-10 font-bold text-2xl">Success Stories</h1>
            <div className=" flex items-center justify-center gap-4 max-w-7xl mx-auto my-10">
                <div className=""><img src={a} alt="" /></div>
                <div className=""><img src={b} alt="" /></div>
                <div className=""><img src={c} alt="" /></div>
            </div>

        </div>
    );
};

export default Stories;