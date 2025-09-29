# Pausas Activas

Proyecto en **Flask** para mostrar pausas activas, anuncios y cumpleaños en pantallas digitales de la empresa.

## Estructura del Proyecto

Elemento	Tipo de Archivo/Lenguaje	Propósito y Función
servidor1.0.py	Python (Backend/Lógica)	Es el cerebro del proyecto. Se encarga de: • Leer los horarios y cumpleaños. • Determinar la hora y día actual. • Decidir qué evento mostrar. • Renderizar la página web adecuada y enviarla al navegador.
horarios	JSON (Datos de Programación)	Contiene la programación 24/7 de lunes a domingo. Define cuándo mostrar Pausas Activas, Anuncios o Cumpleaños.
cumpleanos	JSON (Datos)	Lista de empleados con sus fechas de nacimiento. El servidor revisa si alguien cumple años hoy.
templates/	HTML/Jinja (Frontend/Visual)	Contiene las plantillas HTML para la salida visual: cumpleaños, videos, etc.
base.html	HTML/Jinja (Plantilla Maestra)	Es el esqueleto base de todas las páginas. Define la estructura HTML principal (<head>, <body>), carga los estilos CSS y los scripts esenciales. Las otras plantillas se insertan en su contenido.
static/	CSS/Imágenes/JS (Assets)	Recursos estáticos: imágenes, estilos CSS y scripts.
base.js	JavaScript (Comportamiento)	Es la lógica del lado del navegador. Se encarga de: • Control de Videos: Inicializa el reproductor de YouTube y maneja eventos como el fin de la reproducción (para recargar la página). • Manejo de Sonido: Intenta iniciar la reproducción y gestiona el clic del usuario en el botón "Activar Sonido" (para cumplir con las restricciones de Autoplay del navegador).

---

## 🚀 Cómo Ejecutar

1. Clonar repositorio:
   ```bash
   git clone https://github.com/Neider435/Pausas-Activas.git
   cd Pausas-Activas
