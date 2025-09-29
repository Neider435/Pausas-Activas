# Pausas Activas

Proyecto en **Flask** para mostrar pausas activas, anuncios y cumpleaños en pantallas digitales de la empresa.

## Estructura del Proyecto

| **Elemento**      | **Tipo de Archivo / Lenguaje**   | **Propósito y Función**                                                                                                                                                                                               |
| ----------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `servidor1.0.py`  | Python (Backend / Lógica)        | Es el núcleo del proyecto. Se encarga de:<br>• Leer los horarios y cumpleaños.<br>• Determinar la hora y día actual.<br>• Decidir qué evento mostrar.<br>• Renderizar la página web adecuada y enviarla al navegador. |
| `horarios.json`   | JSON (Datos de Programación)     | Contiene la programación 24/7 de lunes a domingo.<br>Define cuándo mostrar Pausas Activas, Anuncios o Cumpleaños.                                                                                                     |
| `cumpleanos.json` | JSON (Datos)                     | Lista de empleados con sus fechas de nacimiento.<br>El servidor revisa si alguien cumple años hoy.                                                                                                                    |
| `templates/`      | HTML / Jinja (Frontend / Visual) | Plantillas HTML que definen la salida visual: cumpleaños, videos, etc.                                                                                                                                                |
| `static/`         | CSS / Imágenes / JS (Assets)     | Recursos estáticos del proyecto: imágenes, estilos CSS y scripts de soporte.                                                                                                                                          |

---

## 🚀 Cómo Ejecutar

1. Clonar repositorio:
   ```bash
   git clone https://github.com/Neider435/Pausas-Activas.git
   cd Pausas-Activas
