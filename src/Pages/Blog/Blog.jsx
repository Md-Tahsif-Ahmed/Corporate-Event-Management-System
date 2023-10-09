import a from '../../assets/a.jpg'
import b from '../../assets/b.jpg'
 

const Blog = () => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative"><img src={a} alt="" />
                <h1 className='absolute bottom-28 left-16 text-white  lg:text-2xl '>MOST EFFECTIVE AV EQUIPMENT ON A BUDGE</h1></div>
                <div className="relative"><img src={b} alt="" />
                <h1 className='absolute bottom-28 left-16 text-white lg:text-2xl '>MOST EFFECTIVE AV EQUIPMENT ON A BUDGE</h1></div>
                <div className="relative"><img src={a} alt="" />
                <h1 className='absolute bottom-28 left-16 text-white lg:text-2xl '>MOST EFFECTIVE AV EQUIPMENT ON A BUDGE</h1></div>
                <div className="relative"><img src={b} alt="" />
                <h1 className='absolute bottom-28 left-16 text-white lg:text-2xl '>MOST EFFECTIVE AV EQUIPMENT ON A BUDGE</h1></div>
            </div>
        </div>
    );
};

export default Blog;