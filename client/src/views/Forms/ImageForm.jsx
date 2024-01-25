import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const ImageForm = () => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        titulo: "",
        imagePath: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // Si es un campo de archivo, actualiza 'file' con el primer archivo seleccionado
        if (name === "file") {
            setData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-center justify-center lg:h-screen text-white'>
                <div className='bg-black/40 backdrop-blur-xl rounded-xl p-5 mt-5 lg:mt-0'>
                    <NavLink to='/upload' className={`flex justify-start items-center mb-5 pl-5 pt-3`}>
                        <FaChevronLeft color='white' />
                        <p className='ml-2 text-white'>VOLVER</p>
                    </NavLink>
                    <div className='flex flex-col lg:flex-row p-5'>
                        <div className='lg:pr-14 mb-5'>
                            <div className='flex mb-6'>
                                <p>SUBA UN PDF</p>
                            </div>

                            <div className='flex flex-col items-start mb-10'>
                                <label className='mb-4'>Seleccione una imagen:</label>
                                <input
                                    type='file'
                                    name='file'
                                    accept='.png'
                                    className='w-full'
                                    onChange={handleChange}
                                />
                                {errors.title && <p className={style.error}>{errors.title}</p>}
                            </div>
                            <div className='flex flex-col items-start mb-5'>
                                <label className='mb-4'>Introduzca un título:</label>
                                <input
                                    type='text'
                                    name='title'
                                    value={data.title}
                                    className='w-full p-2 rounded-md bg-transparent border-white border'
                                    placeholder='Título...'
                                    onChange={handleChange}
                                />
                                {errors.file && <p className={style.error}>{errors.file}</p>}
                            </div>
                        </div>
                        <div className='flex flex-col items-start lg:pl-14 lg:pr-6 lg:border-l lg:border-white'>
                            <div className='flex mb-6'>
                                <p>VISTA PREVIA</p>
                            </div>
                            <div className='text-left mb-6'>
                                <h4>Imagen:</h4>
                            </div>
                            <div className='text-left'>
                                <h4>Título:</h4>
                                <p>{data.title}</p>
                            </div>
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='mt-4 bg-indigo-500 hover:bg-indigo-700 hover:transition w-full py-2 rounded-md'
                        disabled={Object.keys(errors).length > 0}
                    >
                        Subir
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ImageForm;