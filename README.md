# Shazam Top Tracks

Aplicación web para buscar y visualizar las canciones más populares de cualquier artista usando la [Shazam API](https://rapidapi.com/apidojo/api/shazam). Desarrollada con **JavaScript**, **Bootstrap 5** y estilos personalizados.

## 🚀 Características

- Búsqueda instantánea de canciones por artista.
- Interfaz responsiva y moderna, optimizada para computadoras y móviles.
- Tarjetas dinámicas con imagen, título, artista y enlace para escuchar.
- Animaciones y efectos visuales personalizados.
- Consumo de API con manejo de errores y mensajes amigables.

## 📦 Estructura del proyecto

```
Consumo-API/
├── public/
│   ├── css/
│   │   └── bootstrap.min.css
│   ├── js/
│   │   └── bootstrap.bundle.min.js
├── index.html
├── style.css
└── script.js
```

## 🛠️ Tecnologías usadas

- [Bootstrap 5](https://getbootstrap.com/) (local)
- JavaScript (ES6)
- HTML5 semántico
- CSS3 con animaciones
- [Shazam API](https://rapidapi.com/apidojo/api/shazam) vía RapidAPI

## ⚙️ Instalación y uso

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/Aisaac2205/Consumo-API.git
   cd Consumo-API
   ```

2. **Configura tu API Key:**
   - Obtén una API Key gratuita en [RapidAPI Shazam](https://rapidapi.com/apidojo/api/shazam).
   - Reemplaza el valor de `apiKey` en [`script.js`](script.js) por tu clave personal.

3. **Abre el proyecto:**
   - Solo necesitas abrir [`index.html`](index.html) en tu navegador favorito.

## 📱 Vista previa

![Demo Shazam Top Tracks](./demo.png)

## 📝 Detalles técnicos

- Bootstrap se enlaza localmente desde la carpeta `/public`.
- El archivo [`script.js`](script.js) realiza peticiones `fetch()` a la API y renderiza las tarjetas en el DOM.
- Los estilos personalizados y animaciones están en [`style.css`](style.css).
- La estructura HTML es semántica, con `<header>`, `<main>`, y `<footer>`.

## 🧑‍💻 Autor

Isaac Flores  
Agosto 2025  
Proyecto educativo.  
[LinkedIn](https://www.linkedin.com/in/tu-usuario) | [GitHub](https://github.com/Aisaac2205)

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo [`LICENSE`](LICENSE) para más información.

---

> **Nota:** Este proyecto es solo para fines educativos y de demostración. Los datos provienen de la API pública de
