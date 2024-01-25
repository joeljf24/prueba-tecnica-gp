import { useState } from "react";

const UserForm = () => {
    const [errors, setErrors] = useState({});
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        number: '',
        birthday: '',
    })

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
            <div className="flex flex-col justify-center text-white h-screen">
                <div className="w-96 px-10">
                    <div className="flex items-center mb-6">
                        <p>REGISTRE UN CONTACTO</p>
                    </div>
                    <div className="flex flex-col items-start mb-5">
                        <label className="mb-4">Introduzca el nombre:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={data.firstName}
                            className="w-full p-2 rounded bg-transparent"
                            placeholder="Nombre..."
                            onChange={handleChange}
                        />
                        {errors.file && <p className="text-red">{errors.file}</p>}
                    </div>
                    <div className="flex flex-col items-start mb-5">
                        <label className="mb-4">Introduzca el apellido:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={data.lastName}
                            className="w-full p-2 rounded bg-transparent"
                            placeholder="Apellido..."
                            onChange={handleChange}
                        />
                        {errors.file && <p className="text-red">{errors.file}</p>}
                    </div>
                    <div className="flex flex-col items-start mb-5">
                        <label className="mb-4">Introduzca el número:</label>
                        <input
                            type="text"
                            name="number"
                            value={data.number}
                            className="w-full p-2 rounded bg-transparent"
                            placeholder="Número..."
                            onChange={handleChange}
                        />
                        {errors.file && <p className="text-red">{errors.file}</p>}
                    </div>
                    <div className="flex flex-col items-start mb-5">
                        <label className="mb-4">Introduzca el cumpleaños:</label>
                        <input
                            type="date"
                            name="birthday"
                            value={data.birthday}
                            className="w-full p-2 rounded bg-transparent"
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
            </div>
        </form>
    )
}

export default UserForm;