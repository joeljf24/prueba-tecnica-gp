import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { fetchUsers, fetchFiles, fetchImages } from '../../utils/fetchDataFromBack';

const Files = () => {
  const [contacts, setContacts] = useState([])
  const [files, setFiles] = useState([])
  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactData = await fetchUsers();
        setContacts(contactData);
      } catch (error) {
        console.error("Error al obtener la lista de contactos:", error.message);
      }
    };

    fetchContacts();
  }, []);

  useEffect(() => {
    const fetchPDF = async () => {
      try {
        const filesData = await fetchFiles();
        setFiles(filesData);
      } catch (error) {
        console.error("Error al obtener la lista de archivos PDF:", error.message);
      }
    };

    fetchPDF();
  }, []);

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const imgData = await fetchImages();
        setImages(imgData);
      } catch (error) {
        console.error("Error al obtener la lista de imágenes:", error.message);
      }
    };

    fetchImg();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center lg:p-24 text-white'>
      <div className='w-[1200px]'>
        <NavLink to='/' className={`flex justify-start items-center mb-5 pt-3`}>
          <FaChevronLeft color='white' />
          <p className='ml-2 text-white'>VOLVER AL INICIO</p>
        </NavLink>
        <div className='mb-10'>
          <h3 className='text-4xl text-left text-white mb-3'>CONTACTOS</h3>
          <hr className='w-full mb-5' />
          <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
            {contacts && contacts.map(({ id, nombre, apellido, numero, fecha }) => (
              <div key={id} className='bg-black/40 backdrop-blur-xl p-3 rounded-md text-left'>
                <h4>Nombre completo:</h4>
                <p>{nombre} {apellido}</p>
                <h4>Número:</h4>
                <p>{numero}</p>
                <h4>Cumpleaños:</h4>
                <p>{fecha}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-[1200px]'>
        <div className='mb-10'>
          <h3 className='text-4xl text-left text-white mb-3'>DOCUMENTOS PDF</h3>
          <hr className='w-full mb-5' />
          <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
            {files && files.map(({ id, titulo, path }) => (
              <div key={id} className='bg-black/40 backdrop-blur-xl p-5 rounded-md'>
                <p className='mb-5'>{titulo}</p>
                <iframe src={path} title={titulo} className='w-full mb-5'></iframe>
                <a href={path} target='_blank' download={`${titulo}.pdf`} className='text-blue-500 hover:underline'>Descargar PDF</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-[1200px]'>
        <div className='mb-10'>
          <h3 className='text-4xl text-left text-white mb-3'>IMÁGENES</h3>
          <hr className='w-full mb-5' />
          <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
            {images && images.map(({ id, titulo, imagePath }) => (
              <div key={id} className='bg-black/40 backdrop-blur-xl p-3 rounded-md'>
              <p className='mb-5'>{titulo}</p>
              <img src={imagePath} alt={titulo} className='w-full mb-5' />
              <a href={imagePath} target='_blank' download={`${titulo}.jpg`} className='text-blue-500 hover:underline'>Descargar Imagen</a>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Files;