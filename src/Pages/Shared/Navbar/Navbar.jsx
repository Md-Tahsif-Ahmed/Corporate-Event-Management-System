import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import icon from "../../../assets/icon.png"

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('hi',user);
    const handleLogOut = ()=>{
        logOut()
        .then(() => {
            console.log('Logged out Successfully')
            
        })
        .catch(error=> {console.log(error)})
    }
   const Navlinks = <>
       <NavLink to='/' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "red" : "",
    };
  }}>Home</NavLink>
       <NavLink to='/about' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "red" : "",
    };
  }}>About Us</NavLink>
       <NavLink to='/services' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "red" : "",
    };
  }}>Services</NavLink>
       {
            user && <>
                <NavLink to='/blog' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "red" : "",
    };
  }}>Blog</NavLink>
                <NavLink to='/clients' style={({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "",
      color: isActive ? "red" : "",
    };
  }}>Clients</NavLink>
            </>
        }
   </>
   return (
       <div>
           <div className="navbar bg-pink-500">
            <div className="navbar-start">
               
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {Navlinks}
                </ul>
            </div>
            <img className="w-8 h-8 rounded-full" src={icon} alt="" />
            <a className="btn btn-ghost normal-case text-xl">Corporate Events</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-4">
                {Navlinks}
            </ul>
            </div>
            <div className="">
            
            </div>
            <div className="navbar-end gap-4">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                    {/* <img src={userDefaultProfile} /> */}
                </div>
                </label>
                {
                    user? <>
                    <img className='w-8 h-8 rounded-full' src={user.photoURL} alt={user.displayName} />
                    <span>{user.displayName}</span>
                    <a  onClick={handleLogOut} className="btn btn-sm normal-case">SignOut</a>
                    </>:
                    <Link to ='/login'><button className="btn btn-sm normal-case">SignIn</button></Link>
                }
                 
    
            </div>
            </div>
       </div>
   );
};

export default Navbar;