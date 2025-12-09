import { FaCalendarAlt, FaCalendarTimes, FaHome, FaRegNewspaper, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {

    return (
        <div className="navbar px-4 flex justify-between gap-4 bg-gray-800  shadow-sm">
            <div>
                <div className='flex gap-2'>
                    <Link to='/'><img className='w-10 rounded-full' src="https://i.ibb.co.com/WWz7GvJS/8-1sasa11.jpg" alt="" /></Link>
                    <input type="text" placeholder='Search Here' className='p-2 md:w-50 w-40 bg-gray-900  rounded-2xl' />
                </div>
            </div>

            <div>
                <div className='flex md:gap-10 gap-7 '>
                    <Link to='/' className='text-2xl hover:text-blue-500'><FaHome /></Link>
                    <Link to='/videos' className='text-2xl hover:text-blue-500'><FaVideo /></Link>
                    <Link to='/events' className='text-2xl hover:text-blue-500'><FaCalendarAlt /></Link>
                    <Link to='/myPosts' className='text-2xl hover:text-blue-500'><FaRegNewspaper /></Link>
                </div>
            </div>
            <div className="flex items-center">

                <div className="w-10 rounded-full">
                    <img
                        className='rounded-full'
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
            </div>
        </div>

    );
};

export default Navbar;