#  POKEAPP - ANGULAR

Proyecto desarrollado con ANGULAR 16.

Puede acceder al proyecto desde el siguiente [link](https://angular-pokeapp-challenge.web.app/).

Puede acceder al proyecto como aplicación desarrollada con Ionic desde el siguiente [link](https://github.com/chrisdresba/Pokeapp-Ionic.git).

Puede acceder al APK Installer desde [aquí](https://github.com/chrisdresba/Pokeapp-Ionic/tree/main/APK%20-%20Installer).

**PASOS PARA CLONAR REPOSITORIO**
- git clone https://github.com/chrisdresba/examen-pokeapp.git
- cd examen-pokeapp
- npm i
- ng serve -o

**Enunciado:**

Se desea armar un equipo de 4 pokemons con distintos tipos. Uno tipo fuego, uno tipo agua, uno tipo electrico y uno tipo roca.
Crear un componente pokemon-card que contenga el nombre y el sprite del pokemon. Utilizar el service pokeapiservice que consume la api https://pokeapi.co/
Generar equipos aleatorios al refrescar la pagina.


# Funcionamiento

**Home - Pantalla de Inicio**  

*Al ingresar a la página nos encontraremos con un spinner que sera visible mientras se realiza la carga de los datos de los pokemones.*    

*Al realizar la carga, podremos ver un grupo de 4 pokemones, de diferentes tipos*

![](https://github.com/chrisdresba/examen-pokeapp/blob/main/images/spinner.png?raw=true)

![](https://github.com/chrisdresba/examen-pokeapp/blob/main/images/home.png?raw=true)

*Cada vez que realizamos una recarga de la página, el grupo se vuelve a cargar de manera random*

*La aplicación es responsive*

![](https://github.com/chrisdresba/examen-pokeapp/blob/main/images/home-tablet.png?raw=true)

![](https://github.com/chrisdresba/examen-pokeapp/blob/main/images/home-mobile.png?raw=true)


**DESARROLLO APLICADO**
- Interface -> Utilizado con las solicitudes Http, activando y desactivando el Spinner.
- Services -> Se utiliza un servicio para el Spinner y un servicio para todas las peticiones a la API.
- Directive -> Se crea directiva para detectar problema de carga en imagen, y aplicar imagen por Default.
    




To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
