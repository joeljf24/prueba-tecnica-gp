import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const ImageForm = () => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        imgName: "",
        image: null,
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
            <div className="flex flex-col justify-center text-white">
                <div className="flex items-center mb-6">
                    <p>SUBA UNA IMAGEN</p>
                </div>

                <div className="flex flex-col items-start mb-10">
                    <label className="mb-4">Seleccione una imágen:</label>
                    <input
                        type="file"
                        name="file"
                        accept=".jpg .png .jpeg"
                        className="w-full"
                        onChange={handleChange}
                    />
                    {errors.title && <p className="text-red">{errors.title}</p>}
                </div>
                <div className="flex flex-col items-start mb-5">
                    <label className="mb-4">Introduzca un nombre:</label>
                    <input
                        type="text"
                        name="title"
                        value={data.title}
                        className="w-full p-2 rounded bg-transparent"
                        placeholder="Nombre..."
                        onChange={handleChange}
                    />
                    {errors.file && <p className="text-red">{errors.file}</p>}
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-indigo-500 hover:bg-indigo-700 hover:transition px-4 py-2 rounded-md"
                    disabled={Object.keys(errors).length > 0}
                >
                    Subir
                </button>
            </div>
        </form>
    )
}

export default ImageForm;