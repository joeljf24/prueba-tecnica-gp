import Carousel from '../../components/Carousel/Carousel';
import { IoIosContacts } from 'react-icons/io';
import { FaRegFilePdf } from 'react-icons/fa';
import { IoImagesOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col lg:flex-row lg:items-center justify-center lg:justify-around h-screen md:pt-24 lg:px-10'>
      <div className='lg:bg-white/10 rounded-3xl mt-3 mb-10 lg:mt-0 lg:mb-0'>
        <div className='flex flex-col text-white lg:text-left p-4 rounded-full backdrop-blur-xl max-w-[420px]'>
          <h1 className='text-6xl font-extrabold pb-3'>
            PENNACloud
          </h1>
          <p className='pb-5 text-justify'>Mantén todo lo importante para ti a salvo en un solo lugar, con la posibilidad de compartirlo. Crea copias de seguridad de tus archivos en la nube, comparte contactos, pdf e imágenes. <br /> Comienza subiendo tus archivos:</p>

          <div className='flex justify-center gap-8'>
            <NavLink to='/upload/contact'>
              <IoIosContacts size={32} />
            </NavLink>
            <NavLink to='/upload/pdf'>
              <FaRegFilePdf size={32} />
            </NavLink>
            <NavLink to='/upload/image'>
              <IoImagesOutline size={32} />
            </NavLink>
          </div>
        </div>
      </div>

      <div className='mb-10'>
        <Carousel />
      </div>

      <div className='flex gap-3 text-white lg:hidden'>
        <NavLink to={'/files'} className={`lg:ml-24`}>
          <button className='backdrop-blur-xl px-4 py-2 mx-6 border-2 border-white rounded-full hover:bg-white hover:text-black hover:font-base hover:transition'>Ver mis archivos</button>
        </NavLink>
        <NavLink to={'/upload'} className={`lg:mr-24`}>
          <button className='bg-indigo-500  px-4 py-2 mx-6 border-white rounded-full hover:bg-indigo-700 hover:transition'>Subí tus archivos</button>
        </NavLink>
      </div>
    </div>
  )
}

export default Home;