# DeepSeek Chat Application 🌐💬

¡Bienvenido a **DeepSeek Chat**! Esta es una aplicación de chat interactiva que utiliza la **API de DeepSeek** para proporcionar respuestas inteligentes y útiles a los usuarios. 

---

## ✨ Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación y Configuración](#instalación-y-configuración)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Despliegue](#despliegue)
  - [Backend en Render](#backend-en-render)
  - [Frontend en Vercel](#frontend-en-vercel)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## 📃 Descripción del Proyecto

DeepSeek es una aplicación de chat que permite a los usuarios interactuar con un modelo de inteligencia artificial para obtener respuestas a sus preguntas. La aplicación está diseñada para ser **rápida, intuitiva y fácil de usar**.

---

## 🔧 Tecnologías Utilizadas

### **Frontend:**
- HTML5
- CSS3
- JavaScript (ES6+)

### **Backend:**
- Node.js
- Express.js
- OpenAI API (DeepSeek)
- CORS
- Dotenv
- Body-parser

### **Despliegue:**
- **Backend:** Render.com
- **Frontend:** Vercel

---

## ⚡ Instalación y Configuración

### **1. Clona el repositorio:**
```sh
 git clone https://github.com/JuanBuitrago04/DeepSeekApi.git
 cd DeepSeekApi
```

---

## 💻 Backend

### **2. Instala las dependencias:**
```sh
 cd backend
 npm install
```

### **3. Configura las variables de entorno:**
Crea un archivo `.env` dentro de la carpeta `backend` y agrega:
```properties
 DEEPSEEK_API_KEY=tu_api_key_aqui
 PORT=10000
```

### **4. Inicia el servidor:**
```sh
 npm start
```
El servidor se iniciará en: `http://localhost:10000`

---

## 🎨 Frontend

### **5. Instala las dependencias (si es necesario):**
```sh
 cd ../frontend
 npm install
```

### **6. Modifica la URL de la API en `script.js`:**
Abre `script.js` y asegúrate de que la URL apunte al backend correcto:
```js
 const API_URL = "https://deepseek-backend.onrender.com/chat";
```

### **7. Abre `index.html` en tu navegador.**

---

## 📁 Estructura del Proyecto
```
DeepSeekApi/
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── styles.css
├── README.md
```

---

## 🚀 Uso

1. **Ingresa a la aplicación**.
2. **Escribe tu mensaje en la caja de texto** y presiona el botón de enviar.
3. **El chatbot responderá usando la API de DeepSeek**.
4. **Puedes limpiar la conversación presionando el botón de reinicio**.

---

## 🌍 Despliegue

### **Backend en Render**
Para desplegar el backend en Render, sigue estos pasos:
1. Sube el código a **GitHub**.
2. Ve a [Render.com](https://dashboard.render.com/) y crea un nuevo servicio web.
3. Conéctalo con tu repositorio.
4. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Agrega la variable de entorno `DEEPSEEK_API_KEY` en Render.
6. Despliega el servicio.

---

### **Frontend en Vercel**
Para desplegar el frontend en Vercel:
1. Ve a [Vercel.com](https://vercel.com/) e inicia sesión.
2. Crea un nuevo proyecto y conecta tu repositorio de GitHub.
3. Configura los archivos públicos.
4. Despliega y prueba la URL del frontend.

---

## 🤝 Contribuciones

Si deseas contribuir:
1. **Haz un fork del repositorio.**
2. **Crea una rama nueva:**
   ```sh
   git checkout -b mi-nueva-rama
   ```
3. **Realiza los cambios y haz commit:**
   ```sh
   git commit -m "Descripción de los cambios"
   ```
4. **Envía los cambios:**
   ```sh
   git push origin mi-nueva-rama
   ```
5. **Abre un Pull Request en GitHub.**

---

## 📜 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**.

---

## 📧 Contacto

Si tienes preguntas o sugerencias, contáctame:

- **Correo Electrónico:** [juanbuitrago04@gmail.com](mailto:juanbuitrago04@gmail.com)
- **GitHub:** [JuanBuitrago04](https://github.com/JuanBuitrago04)

---

🚀 **¡Gracias por visitar DeepSeek! Esperamos que disfrutes usando nuestra aplicación de chat.** ❤️
