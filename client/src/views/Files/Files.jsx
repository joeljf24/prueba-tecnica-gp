import { fetchUsers, fetchFiles, fetchImages } from '../../utils/fetchDataFromBack';

const Files = () => {
  return (
    <div className='flex flex-col items-start justify-center h-screen p-10'>
      <div>
        <div>
          <h3 className='text-4xl text-white'>CONTACTOS</h3>
        </div>
        <hr className='w-full' />
      </div>

      <div>
        <div>
          <h3 className='text-4xl text-white'>DOCUMENTOS PDF</h3>
        </div>
        <hr className='w-full' />
      </div>

      <div>
        <div>
          <h3 className='text-4xl text-white'>IMÁGENES</h3>
        </div>
        <hr className='w-full' />
      </div>
    </div>
  )
}

export default Files;