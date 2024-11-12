## Juego de Adivinanza de Números
    Este proyecto es un juego en el cual el usuario tiene que adivinar un número secreto entre 1 y 10. El jugador tiene 5 intentos para adivinar el número correctamente. Si se quedan sin intentos o adivinan el número, el juego se detiene.
## Funcionalidades principales:
    Generación aleatoria de un número secreto entre 1 y 10.
    5 intentos para adivinar el número.
## Tecnologías utilizadas
    Node.js: Entorno de ejecución 
    JavaScript: Lenguaje de programación 
    HTML: Para la interfaz de usuario.
    CSS: Para el diseño visual de la aplicación.
## Estructura del proyecto
La estructura básica del proyecto es la siguiente:

    /mi-juego-adivinanza
    │
    ├── /public
    │   ├── index.html       # Archivo HTML que contiene la vista del juego.
    │   └── script.js        # Lógica del servidor y configuración de Express.
    |   └── styles.css        # estilos de la pagina.
    │
    ├── Dockerfile           # Configuración para crear la imagen Docker.
    ├── package.json         # Dependencias del proyecto y scripts de NPM.
    └── README.md            # Este archivo README.
## Requisitos previos
Asegúrate de tener las siguientes herramientas instaladas en tu máquina:

    Node.js: Descargar e instalar Node.js

## Instalación
1. Clonar el repositorio

    git clone https://github.com/Cristina-Colcha/Adivinanza.git
2. Instalar dependencias
Accede a la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias de Node.js:

    cd mi-juego-adivinanza
    npm install
3. Ejecutar la aplicación en desarrollo
Para ejecutar la aplicación localmente:

    npm start
Esto iniciará un servidor en http://localhost:3000 y podrás acceder al juego desde tu navegador.

## Uso
Abre tu navegador y ve a http://localhost:3000.
    El juego mostrará un campo para introducir un número entre 1 y 10.
    Introduce un número y haz clic en "Adivinar".
    El juego te dará pistas sobre si el número es muy bajo o muy alto.
    Si adivinas el número o te quedas sin intentos, el juego se detendrá.

## Autor
Autor: Cristina Colcha
Este README está organizado en un solo bloque con toda la información detallada, y cada sección se describe claramente para una comprensión rápida.
