# Pausas Activas

Proyecto en **Flask** para mostrar pausas activas, anuncios y cumpleaños en pantallas digitales de la empresa.

## Estructura del Proyecto

| **Elemento**      | **Tipo de Archivo / Lenguaje**  | **Propósito y Función**                                                                                                                                                                                               |
| ----------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `servidor1.0.py`  | Python (Backend / Lógica)       | Es el núcleo del proyecto. Se encarga de:<br>• Leer los horarios y cumpleaños.<br>• Determinar la hora y día actual.<br>• Decidir qué evento mostrar.<br>• Renderizar la página web adecuada y enviarla al navegador. |
| `horarios.json`   | JSON (Datos de Programación)    | Contiene la programación 24/7 de lunes a domingo.<br>Define cuándo mostrar Pausas Activas, Anuncios o Cumpleaños.                                                                                                     |
| `cumpleanos.json` | JSON (Datos)                    | Lista de empleados con sus fechas de nacimiento.<br>El servidor revisa si alguien cumple años hoy.                                                                                                                    |
| `templates/`      | Carpeta HTML / Jinja (Frontend) | Contiene las plantillas visuales del proyecto.                                                                                                                                                                        |
| ├── `base.html`   | HTML (Plantilla Base)           | Plantilla principal que sirve como estructura común (cabecera, menús, estilos). El resto de páginas heredan de esta.                                                                                                  |
| └── `index.html`  | HTML                            | Página inicial que renderiza la información dinámica del servidor.                                                                                                                                                    |
| `static/`         | Carpeta de Recursos Estáticos   | Contiene archivos CSS, imágenes y scripts JS usados en las páginas.                                                                                                                                                   |
| ├── `style.css`   | CSS                             | Define los estilos visuales generales del proyecto.                                                                                                                                                                   |
| └── `script.js`   | JavaScript                      | Añade interactividad al frontend (animaciones, actualizaciones en vivo, etc.).                                                                                                                                        |



---

## 🚀 Cómo Ejecutar

1. Clonar repositorio:
   ```bash
   git clone https://github.com/Neider435/Pausas-Activas.git
   cd Pausas-Activas
