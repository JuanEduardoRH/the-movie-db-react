# The movie db - react app

Esta aplicación consume la API de [The movie DB](https://www.themoviedb.org) , la cual se encarga de proveer contenido relacionado a películas.

La aplicación cuenta con una sección encargada de mostrar las películas más actuales, este mismo modulo, cuenta con una funcionalidad lazy loading, a medida que uno baja, el contenido ira cargando
Por otra parte, existe un buscador, donde el único criterio es el texto que uno puede escribir, se desplegara un listado de resultados, en dado caso que existan coincidencias.

Por el momento el proyecto está finalizado, este puede ser retomado en dado caso que requiera poner en practica otras funcionalidades, o encuentre flujos que sean interesantes para desarrollar.

## Dependecias

- React v18
- React icons
- Tailwind CSS v3

---

## Instalacion

Lo único que necesitaremos, es tener instalado `Node JS` en nuestro equipo, desde la versión `14.18+` en adelante.

Posteriormente, procederemos a ejecutar en la raíz de nuestro proyecto, el siguiente comando:
```
npm install
```
Esto descargara e instalara todas las dependencias necesarias para levantar el proyecto.
Luego deberás crear un archivo `.env` en la raíz del proyecto, es aquí donde agregaremos ciertas variables de entorno para el correcto funcionamiento de nuestra aplicación:

```
VITE_KEY_MDB='…'
VITE_TOKEN_MDB='…'
```

Para eso deberás crear una cuenta en [The movie DB](https://www.themoviedb.org) y asignar los valores a los respectivos campos.
