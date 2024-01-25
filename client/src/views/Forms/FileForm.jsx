import axios from 'axios';
import validations from "./validations";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

const FileForm = () => {
    const [pdfPreviewUrl, setPdfPreviewUrl] = useState(null);

    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        titulo: '',
        path: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'path') {
            const file = files[0];

            if (file && file.type === 'application/pdf') {
                const reader = new FileReader();
                reader.onload = (event) => {
                    const pdfUrl = event.target.result;
                    setPdfPreviewUrl(pdfUrl);
                };
                reader.readAsDataURL(file);
            }

            setData((prevData) => ({
                ...prevData,
                [name]: file,
            }));
            setErrors(
                validations({
                    ...prevData,
                    [name]: file,
                })
            );
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
            setErrors(
                validations({
                    ...prevData,
                    [name]: value,
                })
            );
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!data.path) {
            setErrors({ path: 'Seleccione un archivo PDF válido.' });
            return;
        }
        const formData = new FormData();
        formData.append('titulo', data.titulo);
        formData.append('file', data.path);

        try {
            const response = await axios.post('http://localhost:3001/api/prueba/pdf', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Response:', response.data);
            alert('PDF subido con éxito');

            setData({
                titulo: '',
                path: null,
            });
            setPdfPreviewUrl(null);
            setErrors({});

        } catch (error) {
            console.error('Error al subir el PDF:', error);
            alert('Error al subir el PDF');
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
                    <div className='flex flex-col lg:flex-row p-5'>
                        <div className='lg:pr-14 mb-5'>
                            <div className='flex mb-6'>
                                <p>SUBA UN PDF</p>
                            </div>

                            <div className='flex flex-col items-start mb-10'>
                                <label className='mb-4'>Seleccione un archivo PDF:</label>
                                <input
                                    type='file'
                                    name='path'
                                    accept='.pdf'
                                    className='w-full'
                                    onChange={handleChange}
                                />
                                {errors.path && <p className='error'>{errors.path}</p>}
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
                                <p className='mt-10 max-w-42'>Nota: Sea paciente, el PDF puede tardar en previsualizarse.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-start lg:pl-14 lg:pr-6 lg:border-l lg:border-white'>
                            <div className='flex mb-6'>
                                <p>VISTA PREVIA</p>
                            </div>
                            <div className='text-left mb-6'>
                                <h4>PDF:</h4>
                                {pdfPreviewUrl && <object data={pdfPreviewUrl} type='application/pdf' width='100%' height='300px'></object>}
                                {pdfPreviewUrl && <button
                                    type='button'
                                    onClick={() => setPdfPreviewUrl(null)}
                                    className='mt-2 bg-red-500 hover:bg-red-700 hover:transition py-2 px-4 rounded-md'
                                >
                                    Quitar PDF
                                </button>}
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

export default FileForm;