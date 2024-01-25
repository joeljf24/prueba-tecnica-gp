import axios from 'axios';
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const UserForm = () => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        numero: '',
        fecha: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/api/prueba/users", data);

            console.log("Response:", response.data);
            alert('Contacto guardado con éxito');

            setData({
                nombre: '',
                apellido: '',
                numero: '',
                fecha: '',
            });
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center lg:h-screen text-white">
                <div className='flex flex-col items-center justify-center lg:h-screen text-white'>
                    <div className='bg-black/40 backdrop-blur-xl rounded-xl p-5 mt-5 lg:mt-0'>
                        <NavLink to='/upload' className={`flex justify-start items-center mb-5 pl-5 pt-3`}>
                            <FaChevronLeft color='white' />
                            <p className='ml-2 text-white'>VOLVER</p>
                        </NavLink>
                        <div className='flex flex-col lg:flex-row p-5'>
                            <div className='lg:pr-14 mb-5'>
                                <div className='flex mb-6'>
                                    <p>REGISTRE UN CONTACTO</p>
                                </div>

                                <div className='flex flex-col w-72 items-start mb-5'>
                                    <label className="mb-4">Introduzca el nombre:</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={data.nombre}
                                        className="w-full p-2 rounded-md bg-transparent border-white border"
                                        placeholder="Nombre..."
                                        onChange={handleChange}
                                    />
                                    {errors.file && <p className="text-red">{errors.file}</p>}
                                </div>
                                <div className='flex flex-col items-start mb-5'>
                                    <label className="mb-4">Introduzca el apellido:</label>
                                    <input
                                        type="text"
                                        name="apellido"
                                        value={data.apellido}
                                        className="w-full p-2 rounded-md bg-transparent border-white border"
                                        placeholder="Apellido..."
                                        onChange={handleChange}
                                    />
                                    {errors.file && <p className="text-red">{errors.file}</p>}
                                </div>
                                <div className="flex flex-col items-start mb-5">
                                    <label className="mb-4">Introduzca el número:</label>
                                    <input
                                        type="text"
                                        name="numero"
                                        value={data.numero}
                                        className="w-full p-2 rounded-md bg-transparent border-white border"
                                        placeholder="Número..."
                                        onChange={handleChange}
                                    />
                                    {errors.file && <p className="text-red">{errors.file}</p>}
                                </div>
                                <div className="flex flex-col items-start mb-5">
                                    <label className="mb-4">Introduzca el cumpleaños:</label>
                                    <input
                                        type="date"
                                        name="fecha"
                                        value={data.fecha}
                                        className="w-full p-2 rounded-md bg-transparent border-white border"
                                        onChange={handleChange}
                                    />
                                    {errors.file && <p className="text-red">{errors.file}</p>}
                                </div>
                            </div>
                            <div className='flex flex-col items-start lg:pl-14 lg:pr-6 lg:border-l lg:border-white'>
                                <div className='flex mb-6'>
                                    <p>VISTA PREVIA</p>
                                </div>
                                <div className='text-left mb-6'>
                                    <h4>Nombre:</h4>
                                    <p>{data.nombre}</p>
                                </div>
                                <div className='text-left mb-6'>
                                    <h4>Apellido:</h4>
                                    <p>{data.apellido}</p>
                                </div>
                                <div className='text-left mb-6'>
                                    <h4>Número:</h4>
                                    <p>{data.numero}</p>
                                </div>
                                <div className='text-left mb-6'>
                                    <h4>Cumpleaños:</h4>
                                    <p>{data.fecha}</p>
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
            </div>
        </form>
    )
}

export default UserForm;