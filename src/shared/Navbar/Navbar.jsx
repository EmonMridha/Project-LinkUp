import { FaCalendarAlt, FaCalendarTimes, FaHome, FaRegNewspaper, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOut } = useAuth()
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(!open)
    }

    const handleLogout = () => {
        logOut()
            .then(res => {
                Swal.fire('Logged Out succesfully')
            })
            .catch(error => {
                Swal.fire('Could not logOut')
            })
    }

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
                    <Link to='/addPost' className='text-2xl hover:text-blue-500'><FaRegNewspaper /></Link>
                </div>
            </div>
            {
                user ? (<div className="flex items-center">
                    <div onClick={toggleMenu} className="w-10 rounded-full">
                        <img
                            className='rounded-full'
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>

                    {
                        open && (

                            <button onClick={handleLogout} className="btn absolute right-0 mt-3 w-40 bg-red-900 rounded-xl shadow-md p-2 z-50">Logout</button>

                        )
                    }
                </div>) : (<div>
                    <Link className='btn mr-2' to='/login'>Login</Link>
                    <Link className='btn ' to='/register'>Register</Link>
                </div>)
            }
        </div>

    );
};

export default Navbar;