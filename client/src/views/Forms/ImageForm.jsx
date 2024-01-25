import axios from 'axios';
import validations from "./validations";
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
        if (name === 'titulo') {
            setData((prevData) => ({
                ...prevData,
                titulo: value,
            }));
            setErrors(
                validations({
                    ...prevData,
                    titulo: value,
                })
            );
        } else if (name === 'imagePath') {
            setData((prevData) => ({
                ...prevData,
                imagePath: files[0],
            }));
            setErrors(
                validations({
                    ...prevData,
                    imagePath: files[0],
                })
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titulo', data.titulo);
        formData.append('image', data.imagePath);

        try {
            const response = await axios.post('http://localhost:3001/api/prueba/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Response:', response.data);
            alert('Imagen subida con éxito');

            setData({
                titulo: '',
                imagePath: null,
            });

        } catch (error) {
            console.error('Error al enviar los datos:', error);
            alert('Error al subir la imagen');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex flex-col items-center justify-center lg:h-screen text-white'>
                <div className='bg-black/40 backdrop-blur-xl rounded-xl p-5 mt-5 lg:mt-0'>
                    <NavLink to='/upload' className={`flex justify-start items-center mb-5 pl-5 pt-3`}>
                        <FaChevronLeft color='white' />
                        <p className='ml-2 text-white'>VOLVER</p>
                    </NavLink>
                    {alert.message && (
                        <div className={`bg-${alert.type === 'success' ? 'green' : 'red'}-500 text-white p-3 rounded-md mb-3`}>
                            <p>{alert.message}</p>
                            <button onClick={closeAlert} className="ml-auto">
                                Cerrar
                            </button>
                        </div>
                    )}
                    <div className='flex flex-col lg:flex-row p-5'>
                        <div className='lg:pr-14 mb-5'>
                            <div className='flex mb-6'>
                                <p>SUBA UNA IMAGEN</p>
                            </div>

                            <div className='flex flex-col items-start mb-10'>
                                <label className='mb-4'>Seleccione una imagen:</label>
                                <input
                                    type='file'
                                    name='imagePath'
                                    accept='image/png, image/jpeg, image/jpg'
                                    className='w-full'
                                    onChange={handleChange}
                                />
                                {errors.title && <p className={style.error}>{errors.title}</p>}
                            </div>
                            <div className='flex flex-col items-start mb-5'>
                                <label className='mb-4'>Introduzca un título:</label>
                                <input
                                    type='text'
                                    name='titulo'
                                    value={data.titulo}
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
                                {data.imagePath && (
                                    <>
                                        <p>Toca la imagen para descargarla</p>
                                        <a href={URL.createObjectURL(data.imagePath)} download='imagen.jpg'>
                                            <img src={URL.createObjectURL(data.imagePath)} alt='Preview' className='mt-2 max-w-xs' />
                                        </a>
                                        <button
                                            type='button'
                                            onClick={() => setData({ ...data, imagePath: null })}
                                            className='mt-2 bg-red-500 hover:bg-red-700 hover:transition py-2 px-4 rounded-md'
                                        >
                                            Quitar Imagen
                                        </button>
                                    </>
                                )}
                            </div>
                            <div className='text-left'>
                                <h4>Título:</h4>
                                <p>{data.titulo}</p>
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