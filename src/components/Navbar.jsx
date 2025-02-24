import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
      {/* Logo link to the home page */}
      <NavLink
        to='/'
        className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'
      >
        <p className='blue-gradient_text'>EC</p>
      </NavLink>
      {/* Navigation links */}
      <nav className='flex text-lg gap-7 font-medium'>
        {/* About link */}
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-blue-600' : 'text-black'
          }
        >
          About
        </NavLink>
        {/* Projects link */}
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? 'text-blue-600' : 'text-black'
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
