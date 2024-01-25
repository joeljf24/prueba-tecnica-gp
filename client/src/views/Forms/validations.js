const validations = (data) => {
    const errors = {};

    // Validar el nombre y apellido
    if (fieldName === 'nombre' || fieldName === 'apellido') {
        if (!data[fieldName]) {
            errors[fieldName] = `Debes ingresar un ${fieldName === 'nombre' ? 'nombre' : 'apellido'}.`;
        } else if (!/^[A-Z][a-z]{2,19}$/.test(data[fieldName])) {
            errors[fieldName] = `El ${fieldName === 'nombre' ? 'nombre' : 'apellido'} debe comenzar con mayúscula, sin números y tener entre 3 y 20 caracteres.`;
        }
    }

    // Validar el número
    if (fieldName === 'numero') {
        if (!data.numero) {
            errors.numero = 'Debes ingresar un número.';
        } else if (!/^\d+$/.test(data.numero)) {
            errors.numero = 'El número solo puede contener dígitos.';
        }
    }

    // Validar la fecha
    if (fieldName === 'fecha') {
        if (!data.fecha) {
            errors.fecha = 'Debes introducir una fecha.';
        }
    }

    // Validar el título
    if (fieldName === 'titulo') {
        if (!data.titulo) {
            errors.titulo = 'Debes ingresar un título.';
        } else if (data.titulo.length < 3 || data.titulo.length > 25) {
            errors.titulo = 'El título debe tener entre 3 y 25 caracteres.';
        }
    }

    // Validar el path (PDF)
    if (fieldName === 'path') {
        if (!data.path) {
            errors.path = 'Debes seleccionar un PDF.';
        } else if (!data.path.name.endsWith('.pdf')) {
            errors.path = 'El archivo debe ser un PDF.';
        }
    }

    // Validar el imagePath (imagen)
    if (fieldName === 'imagePath') {
        if (!data.imagePath) {
            errors.imagePath = 'Debes seleccionar una imagen.';
        } else if (!/\.(jpg|jpeg|png|gif)$/i.test(data.imagePath.name)) {
            errors.imagePath = 'El archivo debe ser una imagen.';
        }
    }
    return errors;
};

export default validations;