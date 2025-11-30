---
title: "El contexto es el rey"
duration: 5 min
learningObjectives:
  - Comprender por qué el contexto es la técnica de prompting más importante
  - Aprender la regla ABC: Always Be Contexting (siempre dar contexto)
  - Saber cómo prevenir alucinaciones de IA mediante mejor contexto
---

## El contexto es el rey

Si hay una técnica en todo este curso que mejorará tus resultados más que cualquier otra, es esta: **proporcionar contexto**.

El contexto no es solo útil. Lo es todo.

### ABC: Always be contexting

Aquí hay una regla simple para recordar: **ABC - Always Be Contexting (siempre dar contexto).**

Cada pieza de información relevante que incluyas en tu prompt hace que la respuesta sea mejor. Cada pieza que omites crea una brecha que la IA debe llenar con suposiciones, y esas suposiciones a menudo estarán equivocadas.

Cuando la IA te da respuestas que no dan en el blanco, casi siempre es porque la IA carecía de contexto que tú tienes pero no compartiste.

### Por qué la IA alucina

Probablemente hayas escuchado que la IA "alucina", generando información falsa que suena confiada y correcta. Aunque esto puede suceder por varias razones técnicas, hay una causa principal que puedes controlar: contexto insuficiente.

Cuando haces una pregunta sin suficiente contexto, la IA debe llenar los espacios en blanco. Hace suposiciones sobre lo que quieres decir, en qué situación estás y qué tipo de respuesta necesitas. A veces estas suposiciones son razonables. A menudo, no lo son.

**Más contexto equivale a menos alucinación equivale a mejores resultados.**

Cuando proporcionas contexto detallado, reduces el espacio donde la IA necesita adivinar. Restringes la respuesta a áreas donde la IA realmente tiene datos de entrenamiento relevantes, y la guías hacia el tipo específico de información que realmente necesitas.

### Qué incluir en el contexto

Aquí están los tipos de contexto que más comúnmente mejoran las respuestas:

**Hechos sobre tu situación:** ¿Qué es realmente cierto? ¿Cuáles son las circunstancias dadas? ¿Qué ya ha sucedido o ha sido decidido?

**Restricciones dentro de las que estás trabajando:** ¿Cuáles son tus límites? Esto podría ser presupuesto, tiempo, restricciones físicas, reglas que debes seguir o recursos disponibles para ti.

**Tus preferencias:** ¿Qué te gusta y qué no te gusta? ¿Qué es lo más importante para ti? ¿Qué estás tratando de optimizar?

**Tu trasfondo:** ¿Qué sabes ya? ¿Cuál es tu nivel de experiencia? ¿Cuál es tu rol o posición?

**Tu propósito:** ¿Por qué necesitas esto? ¿Qué harás con la información? ¿Quién más está involucrado?

### Evolucionando nuestro ejemplo continuo

Transformemos nuestro prompt de Japón con contexto rico:

```
Eres un consultor de viajes experimentado en Japón que ha ayudado a cientos de visitantes primerizos a planificar sus viajes durante los últimos 15 años.

Estoy planeando mi primer viaje a Japón con los siguientes detalles:

Presupuesto: $3000 para todo excepto vuelos (que ya están reservados)

Duración: 2 semanas, llegando el 5 de abril y partiendo el 19 de abril

Intereses: Me encanta la comida (especialmente probar especialidades locales y regionales), la cultura tradicional (templos, santuarios, jardines) y la fotografía. No estoy interesado en senderismo, vida nocturna o cultura de anime/videojuegos.

Estilo de viaje: Ritmo moderado. Prefiero ver menos lugares en profundidad que apresurarme por muchos. Disfruto de algo de estructura pero quiero flexibilidad para descubrimientos espontáneos.

Consideraciones físicas: Puedo caminar cómodamente de 8 a 10 km por día pero tengo problemas menores de rodilla con escaleras empinadas.

Preferencia de alojamiento: Hoteles de rango medio o ryokans tradicionales. Quiero al menos una experiencia de ryokan.

Ayúdame a planificar este viaje.
```

Mira cuánto hemos reducido las posibilidades. La IA ya no puede sugerir albergues económicos o resorts de lujo. No puede recomendar escalar montañas o el distrito de juegos de Akihabara. No puede empacar veinte ciudades o sugerir una estadía perezosa en una sola ciudad.

La IA ahora tiene restricciones específicas dentro de las cuales trabajar, y el resultado reflejará TU viaje, no el viaje de un turista genérico.

### El permiso para fallar

Aquí hay una técnica que muchas personas pasan por alto: dile explícitamente a la IA qué hacer cuando no sabe algo.

```
Si no estás seguro sobre precios actuales, horarios de apertura o cambios recientes en cualquier ubicación, por favor di "No estoy seguro sobre [X] actual" en lugar de proporcionar información potencialmente desactualizada.
```

Esta simple adición reduce dramáticamente la alucinación. Estás dando a la IA permiso para admitir incertidumbre en lugar de forzarla a llenar cada vacío con conjeturas que suenan confiadas.

### Cuándo usar búsqueda web

Muchas herramientas de IA ahora ofrecen capacidades de búsqueda web que pueden acceder a información actual. Usa estas características cuando:

- Necesites precios actuales, horarios o disponibilidad
- Quieras reseñas recientes o noticias sobre una ubicación
- Necesites información sobre eventos que ocurren después de la fecha límite de entrenamiento de la IA
- Quieras verificar que las recomendaciones siguen siendo precisas

Si tu herramienta de IA ofrece búsqueda web, pídele explícitamente que busque información actual cuando sea necesario. Si no lo hace, sé escéptico sobre detalles sensibles al tiempo y verifícalos tú mismo.

### Advertencia: la IA no recuerda

Un error común: asumir que la IA recuerda conversaciones anteriores.

A menos que estés en un hilo de conversación continuo, la IA no tiene memoria de lo que discutiste ayer o la semana pasada. Cada nueva conversación comienza fresca. Si el contexto de una conversación anterior es relevante, necesitas incluirlo nuevamente.

Incluso dentro de una conversación, ten cuidado de asumir que la IA está rastreando todo. Para proyectos complejos, resume periódicamente el estado actual y las decisiones clave para mantener la IA alineada con tus necesidades.

### Ejercicio: Lista y agrega tu contexto

Regresa a tu prompt en evolución. Haz una lista de 5-10 piezas de contexto que sean relevantes para tu solicitud:

- ¿Cuáles son los hechos de tu situación?
- ¿Dentro de qué restricciones estás trabajando?
- ¿Cuáles son tus preferencias?
- ¿Cuál es tu trasfondo?
- ¿Cuál es tu propósito?

Agrégalas a tu prompt. Compara esta respuesta con tus versiones anteriores. Nota cuánto más específica y útil se vuelve la respuesta cuando la IA entiende tu situación específica.
