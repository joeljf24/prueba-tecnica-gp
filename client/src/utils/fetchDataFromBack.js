export const fetchUsers = async () => {
    try {
        const response = await fetch("http://localhost:3001/api/prueba/users");

        if (response.ok) {
            const data = await response.json();
            return data.users;
        } else {
            throw Error(`Error al obtener los contactos: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error de red al obtener los contactos:", error.message);
        throw error;
    }
}

export const fetchFiles = async () => {
    try {
        const response = await fetch("http://localhost:3001/api/prueba/pdf");

        if (response.ok) {
            const data = await response.json();
            return data.files;
        } else {
            throw Error(`Error al obtener los archivos PDF: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error de red al obtener los archivos PDF:", error.message);
        throw error;
    }
};

export const fetchImages = async () => {
    try {
        const response = await fetch("http://localhost:3001/api/prueba/image");

        if (response.ok) {
            const data = await response.json();
            return data.images;
        } else {
            throw Error(`Error al obtener las imágenes: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Error de red al obtener las imágenes:", error.message);
        throw error;
    }
}