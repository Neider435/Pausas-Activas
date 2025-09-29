# Pausas Activas

Proyecto en **Flask** para mostrar pausas activas, anuncios y cumpleaños en pantallas digitales de la empresa.

## Estructura del Proyecto

| **Elemento**        | **Tipo de Archivo / Lenguaje**   | **Propósito y Función**                                                                                                                                                              |
| ------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `servidor1.0.py`    | Python (Backend / Lógica)        | Núcleo del proyecto.<br>• Lee los horarios y cumpleaños.<br>• Determina la hora y fecha actual.<br>• Decide qué evento mostrar.<br>• Renderiza la plantilla y la envía al navegador. |
| `horarios.json`     | JSON (Datos de Programación)     | Contiene la programación 24/7 de lunes a domingo.<br>Define cuándo mostrar **Pausas Activas**, **Anuncios** o **Cumpleaños**.                                                        |
| `cumpleanos.json`   | JSON (Datos)                     | Lista de empleados con fechas de nacimiento.<br>El servidor valida si alguien cumple años hoy.                                                                                       |
| `templates/`        | HTML / Jinja (Frontend / Visual) | Carpeta que almacena las plantillas HTML del sistema.<br>Ejemplo: `base.html` como estructura común de la aplicación.                                                                |
| `static/`           | CSS / Imágenes / JS (Assets)     | Carpeta de recursos estáticos.<br>Contiene imágenes, estilos CSS, scripts JS y videos.                                                                                               |
| `static/avisos/`    | Imágenes (PNG, JPG, etc.)        | Recursos gráficos.<br>Ejemplo: `cumpleanos.png` para mostrar en la pantalla de cumpleaños.                                                                                           |
| `static/js/base.js` | JavaScript                       | Script principal para el frontend.<br>Maneja la interactividad y comportamiento dinámico de las páginas.                                                                             |
| `static/videos/`    | Multimedia (MP4, AVI, etc.)      | Carpeta destinada a almacenar videos que serán mostrados en la aplicación.                                                                                                           |
---

## 🚀 Cómo Ejecutar

1. Clonar repositorio:
   ```bash
   git clone https://github.com/Neider435/Pausas-Activas.git
   cd Pausas-Activas
