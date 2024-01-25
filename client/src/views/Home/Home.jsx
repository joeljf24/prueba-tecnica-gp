import Carousel from '../../components/Carousel/Carousel';
import { IoIosContacts } from 'react-icons/io';
import { FaRegFilePdf } from 'react-icons/fa';
import { IoImagesOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-center lg:justify-around h-screen md:pt-24 lg:px-10'>
      <div className='bg-white/10 rounded-3xl mb-10 lg:mb-0'>
        <div className='flex flex-col text-white lg:text-left p-4 rounded-full backdrop-blur-xl'>
          <h1 className='text-6xl font-extrabold pb-3'>
            PENNACloud
          </h1>
          <p className='pb-3'>Tu gestor de archivos de confianza</p>

          <div className='flex justify-center gap-8'>
            <NavLink to='/'>
              <IoIosContacts size={32} />
            </NavLink>
            <NavLink to='/'>
              <FaRegFilePdf size={32} />
            </NavLink>
            <NavLink to='/'>
              <IoImagesOutline size={32} />
            </NavLink>
          </div>
        </div>
      </div>

      <div>
        <Carousel />
      </div>
    </div>
  )
}

export default Home;