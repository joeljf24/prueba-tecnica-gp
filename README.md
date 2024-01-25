# PRUEBA TÉCNICA: DOCUMENTACIÓN.

## **📌 OBJETIVO**
1. Se necesitan 3 formularios:
- En el primero se deberá cargar datos de un usuario: nombre, apellido, teléfono y
fecha de nacimiento.
- En el segundo se necesitará cargar un archivo pdf: este recibirá un título y el archivo
PDF.
- En el tercero se cargará una imagen: este recibirá un título y la imagen.
2. Se deberá renderizar en pantalla los datos del usuario, el título y archivo PDF y el título y
la imagen. Tanto el pdf como la imagen deben tener preview y descargarse al hacer clic en
ellos.
3. Se debe realizar un carrusel de imágenes, con javascript y css. Es decir, no se pueden
usar librerías para esto. Las imágenes pueden ser las que desees, podes sacarlas de
internet, una api, lo que quieras.
Requisitos:
- El carrusel se debe mover sólo, ej: cada 2 segundos se debe pasar de la imagen
actual a la siguiente imagen.
- Si se pone el mouse encima debe frenar el movimiento.
- La imagen del medio siempre debe de ser más grande, ej: si tenemos 5 imágenes la
imagen que se encuentra en medio debería ser de 500px (por ejemplo) y las
imágenes restante deberían esta masomenos en 150px.
<br />

---

## **📌 TECNOLOGÍAS UTILIZADAS**
**Frontend**:
- React + Vite
- Javascript
- Tailwind CSS


<br />

---

## **📋 PARA COMENZAR...**
Nota: Necesitaras Node.js instalado en tu PC.

1. Clona el repositorio en tu computadora para comenzar a trabajar. Para ello abre una terminal en alguna ubicación donde desees ubicar el proyecto(puede ser el escritorio) y utiliza el siguiente comando

    ```bash
        $ git clone https://github.com/joeljf24/prueba-tecnica-gp
    ```

    Este repositorio contiene dos carpetas: **`back-pruebaFront`** y **`client`**. En estas carpetas estará el código del backend y el frontend respectivamente.

2. Para levantar el back, deberás seguir las instrucciones que indica su repositorio original. En enlace del mismo:

   ```
   https://github.com/grupopenna/back-pruebaFront
   ```


3. Una vez con el back listo, pasaremos a preparar el front. Para ello abriras una terminal ubicado en la carpeta **`/client`** e introduciremos los siguientes comandos:

    Para instalar las dependencias
    ```
        npm install
    ```
    Una vez finalizada la instalación, iniciar el servidor frontend
    ```
        npm run dev
    ```

4. Realizados los pasos anteriores, podrás acceder a http://localhost:5173/ para poder utilizar la web a gusto.

<br />

---

## **💻 ¿CÓMO UTILIZAR LA WEB?**

Utilizar la web es muy sencillo. En el inicio nos encontraremos con una navbar con un logo y dos botones: **Ver mis archivos** y **Subí tus archivos**. Luego veremos una pequeña introducción sobre qué trata la web y un carrusel.

En el caso de **Subí tu archivo**, dispondremos de 3 opciones: Contacto, Documento PDF e Imagen. En cualquiera de ellos dispondremos de un visor de los campos que llenemos. En el caso del PDF y la imagen, además de ser visualizados, pueden ser descargados. En cualquier formulario deberas rellenar todos los campos antes de enviar. Una vez apretamos el botón **Subir**, seremos notificados si la operación tuvo éxito o no.

Finalmente, tendremos la oportunidad de ver los archivos que cargamos en **"Ver mis archivos"** separado por secciones.