import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='fixed flex justify-between items-center text-white lg:py-5 w-full'>
      <NavLink to='/'>
        <div className='flex items-center gap-3 pt-3 lg:pt-0'>
          <img src='/nube.png' alt="" className='w-16 h-auto ml-6 lg:ml-24' />
          <p className='hidden lg:flex text-2xl font-semibold'>Cloud</p>
        </div>
      </NavLink>
      <div className='hidden lg:flex'>
        <NavLink to={'/files'} className={`lg:ml-24`}>
          <button className='px-4 py-2 mx-6 border-2 border-white rounded-full hover:bg-white hover:text-black hover:font-base hover:transition'>Ver mis archivos</button>
        </NavLink>
        <NavLink to={'/upload'} className={`lg:mr-24`}>
          <button className='bg-indigo-500  px-4 py-2 mx-6 border-white rounded-full hover:bg-indigo-700 hover:transition'>Subí tus archivos</button>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;