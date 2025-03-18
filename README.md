## **Simple Responsive App! 🥳🎉**

El objetivo principal es crear una aplicación web básica y responsiva utilizando React en conjunto con Tailwind CSS.

Al ser una aplicación sencilla, se construye a partir de cuatro componentes: **App.jsx**, que es el componente principal que integra los componentes **header.jsx**, **asideAndMain.jsx** y **footer.jsx**.

- **header.jsx**: Componente de encabezado reutilizable para diferentes páginas de la aplicación. Incluye la opción de agregar un submenú si es necesario. Cuando la página se visualiza en dispositivos móviles, se activa una segunda barra de navegación que contiene un botón, el cual despliega dinámicamente el menú lateral oculto. Esto optimiza la visualización en pantallas pequeñas, mejorando la experiencia del usuario.
- **asideAndMain.jsx**: Componente que organiza la disposición de un menú lateral (aside) y un contenido principal (main). Está diseñado para ser adaptable y responde al tamaño de la pantalla. En dispositivos móviles, el menú lateral se oculta de forma predeterminada y se despliega dinámicamente a través de un botón de interacción. En pantallas más grandes, el menú lateral se muestra automáticamente. Además, el componente gestiona el estado del menú lateral y ajusta su visibilidad cuando se redimensiona la ventana, mejorando la experiencia del usuario en diferentes dispositivos.
- **footer.jsx**: Componente de pie de página que muestra un texto simple y responsivo. Se adapta automáticamente al ancho del contenedor principal. El contenido está alineado horizontalmente con justificación entre los elementos, mejorando la organización y visualización tanto en dispositivos móviles como en pantallas más grandes.
- **app.jsx**: Constituye el núcleo de la aplicación al integrar de forma coherente los componentes Header, AsideAndMain y Footer. Utiliza el hook **useState** de React para gestionar dinámicamente estados clave, como la visibilidad del menú lateral, permitiendo adaptar la interfaz a las interacciones del usuario y al tamaño de la pantalla, garantizando una experiencia responsiva y óptima en todos los dispositivos.

---

## Instalación y Ejecución

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/jcamiloveru/simple-responsive-app.git
   ```

2. **Instalar dependencias**:

   ```
   npm install
   ```

3. **Ejecutar la aplicación**:
   ```
   npm run dev
   ```

La aplicación se ejecutará en http://localhost:5173/ atravez del puerto por defecto de Vite deverias ver algo como

![imagen ejemplo de como deberia verse una ejecución correcta en local](https://i.imgur.com/DEvC58D.png)

---

Esta es una aplicación base que se encuentra en construcción. Para mayor información, puedes escribir al correo: jcamiloveru@gmail.com