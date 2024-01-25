import { NavLink } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const Upload = () => {
  return (
    <div className='flex items-center justify-center h-screen text-white'>
      <div className="flex flex-col bg-black/40 backdrop-blur-xl rounded-xl p-10 lg:mb-0 gap-10">
        <NavLink to='/' className={`flex justify-start items-center mb-5 pl-5`}>
          <FaChevronLeft color="white" />
          <p className="ml-2 text-white">VOLVER AL INICIO</p>
        </NavLink>

        <div>
          <NavLink to='/upload/contact'>
            <button className='w-96 x-4 py-2 mx-6 border-2 border-white rounded-full hover:bg-white hover:text-black hover:font-base hover:transition'>CONTACTO</button>
          </NavLink>
        </div>

        <hr className="" />

        <div>
          <NavLink to='/upload/pdf'>
            <button className='w-96 px-4 py-2 mx-6 border-2 border-white rounded-full hover:bg-white hover:text-black hover:font-base hover:transition'>DOCUMENTO PDF</button>
          </NavLink>
        </div>

        <hr className="" />

        <div>
          <NavLink to='/upload/image'>
            <button className='w-96 px-4 py-2 mx-6 border-2 border-white rounded-full hover:bg-white hover:text-black hover:font-base hover:transition'>IMAGEN</button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Upload;