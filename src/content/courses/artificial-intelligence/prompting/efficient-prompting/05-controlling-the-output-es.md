---
title: "Controlar la salida"
duration: 4 min
learningObjectives:
  - Aprender a especificar formato, estructura y longitud de salida
  - Comprender cómo el control del tono afecta las respuestas
  - Aplicar requisitos de formato para obtener exactamente lo que necesitas
---

## Controlar la salida

Has aprendido a asignar una personalidad y proporcionar contexto. Ahora agreguemos otra técnica poderosa: decirle a la IA exactamente cómo formatear y presentar su respuesta.

Muchas personas olvidan que pueden controlar no solo lo que la IA les dice, sino cómo se lo dice. Esta es una de las técnicas que tiene el mayor impacto con el menor esfuerzo.

### Puedes (y debes) decirle a la IA exactamente lo que quieres

La IA no está comprometida con ningún formato de respuesta particular. Puede darte viñetas, listas numeradas, tablas, prosa detallada, resúmenes breves, código, JSON, markdown, o casi cualquier estructura que puedas describir.

Si no especificas, obtienes lo que sea predeterminado para la IA, que suele ser una mezcla de párrafos y viñetas que puede o no adaptarse a tus necesidades.

Cuando especificas exactamente lo que quieres, obtienes exactamente lo que quieres.

### Opciones de formato

**Listas con viñetas:** Mejores para escaneo rápido y comparación de opciones

**Pasos numerados:** Mejores para procesos, instrucciones o elementos clasificados

**Tablas:** Mejores para comparar múltiples elementos en múltiples dimensiones

**Encabezados y secciones:** Mejores para organizar contenido largo en partes navegables

**Párrafos en prosa:** Mejores para explicaciones, historias o cuando quieres un flujo de lectura natural

**JSON o datos estructurados:** Mejores cuando necesitas procesar la salida programáticamente

**Markdown:** Mejor cuando quieres texto formateado que puedas usar en documentos o sitios web

### Control de tono

También puedes especificar el tono de la respuesta:

**Formal:** Profesional, adecuado para contextos empresariales

**Casual:** Amigable y conversacional

**Entusiasta:** Enérgico y alentador

**Objetivo:** Solo los hechos, sin adornos

**Empático:** Cálido y comprensivo

**Directo:** Franco y al grano, sin rodeos

### Restricciones de longitud

Sé explícito sobre cuánto contenido quieres:

**Límites de palabras o frases:** "Mantén cada descripción bajo 50 palabras"

**Solicitudes de brevedad:** "Sé conciso" o "Dame la versión corta"

**Solicitudes de exhaustividad:** "Sé exhaustivo" o "Incluye todos los detalles relevantes"

**Orientación proporcional:** "Dedica más tiempo a X y menos a Y"

### Requisitos de estructura

Puedes especificar exactamente cómo debe organizarse el contenido:

**Secciones específicas:** "Incluye secciones sobre costo, tiempo requerido y dificultad"

**Elementos ordenados:** "Comienza con el punto más importante"

**Coincidencia de plantilla:** "Sigue esta estructura exacta: [proporcionar plantilla]"

**Detalle progresivo:** "Comienza con un resumen, luego entra en detalle"

### Evolucionando nuestro ejemplo continuo

Agreguemos formato de salida a nuestro prompt de Japón:

```
Eres un consultor de viajes experimentado en Japón que ha ayudado a cientos de visitantes primerizos a planificar sus viajes durante los últimos 15 años.

Estoy planeando mi primer viaje a Japón con los siguientes detalles:
[Todo nuestro contexto del capítulo 4]

Por favor proporciona un itinerario día a día en formato de tabla con estas columnas:
- Fecha (5-19 de abril)
- Ubicación (en qué ciudad/área estaré)
- Actividad matutina (descripción breve, 10-15 palabras)
- Actividad vespertina (descripción breve, 10-15 palabras)
- Actividad nocturna (descripción breve, 10-15 palabras)
- Costo diario estimado (en USD, excluyendo alojamiento)

Después de la tabla, incluye:
1. Una sección breve sobre alojamientos recomendados para cada ubicación
2. Consejos imprescindibles específicos para viajar en abril en Japón
3. Una lista de equipaje adaptada a este itinerario

Mantén todas las descripciones concisas y prácticas. Enfócate en detalles específicos en lugar de generalidades.
```

Ahora la IA sabe exactamente qué producir. Obtendrás una tabla estructurada que realmente puedes usar para planificar, seguida de información suplementaria organizada en las secciones exactas que solicitaste.

Compara esto con el vago prompt "Planifícame un viaje a Japón". En lugar de párrafos de consejos genéricos, obtienes un documento de planificación práctico.

### El formato que la mayoría olvida

Una de las técnicas de formato más poderosas también es la más pasada por alto: pedir compensaciones, pros y contras, o información relevante para decisiones.

En lugar de preguntar "¿Qué debería hacer?", pregunta "¿Cuáles son las opciones y cuáles son las compensaciones para cada una?"

```
Dame 3 opciones para cómo pasar el Día 3, con pros y contras para cada una basadas en mis preferencias declaradas.
```

Esto transforma la IA de alguien que toma decisiones por ti en un asesor que te ayuda a tomar decisiones informadas tú mismo.

### Ejercicio: Especifica tu formato de salida

Toma tu prompt en evolución y agrega instrucciones específicas de formato de salida.

Considera:
- ¿Qué formato sería más útil para tus necesidades? (¿Lista? ¿Tabla? ¿Secciones?)
- ¿Qué tono es apropiado?
- ¿Cuánto detalle quieres?
- ¿Debería haber secciones o categorías específicas?
- ¿Serían útiles las comparaciones o compensaciones?

Agrega estas instrucciones de formato y compara los resultados con tus intentos anteriores.
