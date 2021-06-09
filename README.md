# ProyectoFinal_TecEmer
Proyecto de la materia Tecnologias Emergentes (Proyecto en Laravel como Backend y como FrontEnd ReactJS)

Requisitos para correr el proyecto:


* Frontend

npm install axios| yarn add axios
npm i bootstrap | yarn add bootstrap
yarn add react-router-dom
yarn add reactstrap
yarn add styled-components
npm i universal-cookie


* Backend

composer install
Luego crear el archivo .env y para para ahorrarnos tiempo, también abriremos 
el archivo .env.example que contiene un ejemplo de las variables y lo editamos agregando la conexion de mongodb.
Luego hay que generar una llave: php artisan key:generate
php artisan migrate
php artisan storage:link
