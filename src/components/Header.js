import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = ()=>{
    const [btnName,setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return(
        <div className='flex justify-between bg-pink-300 shadow-md'>
            <div className='logo-container'>
                <img className='h-24' src={LOGO_URL}/>
            </div>
            <div className='flex items-center'>
                <ul className="flex ">
                <li className="px-2">Online Status : {onlineStatus ? '🟢': '🔴'}</li>
                    <li className="px-2"><Link to='/'>Home</Link></li>
                    <li className="px-2"><Link to='/about'>About Us</Link></li>
                    <li className="px-2"><Link to='/contact'>Contact Us</Link></li>
                    <li className="px-2"><Link to='/grosary'>Grosary</Link></li>
                    <li className="px-2">Cart</li>
                    <button className="px-2" onClick={()=>{btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')}}>{btnName}</button>
                    <li className="px-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;