---
title: "Aprender con ejemplos (few-shot prompting)"
duration: 5 min
learningObjectives:
  - Comprender la diferencia entre prompting zero-shot y few-shot
  - Aprender por qué mostrar ejemplos es más poderoso que describir
  - Aplicar técnicas few-shot para obtener salidas formateadas con precisión
---

## Aprender con ejemplos (few-shot prompting)

Hasta ahora, hemos estado diciéndole a la IA lo que queremos mediante descripciones e instrucciones. Ahora exploremos una técnica aún más poderosa: mostrarle a la IA lo que queremos mediante ejemplos.

Este enfoque se llama "few-shot prompting" porque proporcionas algunos ejemplos (shots) que demuestran el patrón que quieres que la IA siga.

### Zero-shot vs few-shot

Todo lo que hemos hecho hasta ahora ha sido prompting "zero-shot", donde proporcionamos instrucciones sin ejemplos. Esto funciona bien para solicitudes sencillas, especialmente cuando se combinan con buenas personalidades, contexto e instrucciones de formato.

Pero a veces, mostrar es más poderoso que decir.

Cuando proporcionas ejemplos de la salida que quieres, la IA no necesita interpretar tus instrucciones. Puede ver exactamente lo que quieres decir. El patrón está demostrado, no solo descrito.

### Por qué mostrar es más poderoso que decir

Considera intentar explicar un estilo de escritura particular:

```
Escribe en un tono casual pero informativo, usando humor ocasional y dirección directa, con párrafos cortos y oraciones contundentes.
```

Esto le da a la IA algo con qué trabajar, pero todavía hay espacio para la interpretación. ¿Qué significa exactamente "humor ocasional"? ¿Qué tan cortos son los párrafos? ¿Qué hace que una oración sea "contundente"?

Ahora considera mostrar un ejemplo:

```
Escribe en este estilo:

"Aquí está el problema con las contraseñas: todos sabemos que deben ser fuertes, únicas e imposibles de recordar. Genial. Gracias. Súper útil.

Pero en realidad hay una salida de este lío. Se llama gestor de contraseñas, y una vez que comienzas a usar uno, te preguntarás por qué alguna vez intentaste recordar 47 variaciones del nombre de tu perro."

Ahora escribe sobre la autenticación de dos factores en el mismo estilo.
```

La IA ahora puede coincidir con el tono, estructura, longitud de oración y estilo de humor exactamente porque tiene un ejemplo concreto que seguir.

### Qué mostrar en tus ejemplos

Tus ejemplos pueden demostrar cualquier aspecto de la respuesta que te importe:

**Tono:** Qué tan formal, casual o entusiasta debe ser la escritura

**Estructura:** Cómo debe organizarse y presentarse la información

**Nivel de detalle:** Cuánta explicación incluir para cada punto

**Vocabulario:** Qué tipo de palabras y terminología usar

**Longitud:** Cuánto tiempo debe ser cada sección o elemento

**Perspectiva:** Desde qué punto de vista escribir

### Evolucionando nuestro ejemplo continuo

Agreguemos un ejemplo few-shot a nuestro prompt de Japón. Le mostraremos a la IA exactamente cómo queremos que se vea un día del itinerario:

```
Eres un consultor de viajes experimentado en Japón que ha ayudado a cientos de visitantes primerizos a planificar sus viajes durante los últimos 15 años.

Estoy planeando mi primer viaje a Japón con los siguientes detalles:
[Todo nuestro contexto del capítulo 4]

Aquí hay un ejemplo de exactamente cómo quiero que cada día esté formateado:

| Fecha | Ubicación | Mañana | Tarde | Noche | Costo est. |
|-------|-----------|--------|-------|-------|------------|
| 5 abril | Tokio (Asakusa) | Llegar a Narita, tren a Asakusa. Registro en ryokan. | Explorar templo Senso-ji. | Cena en Sometaro (okonomiyaki, reservar con anticipación). Caminar por Nakamise de noche. | $45 |

Para alojamientos, formatea así:
- Tokio (5-8 abril): Sadachiyo Sukeroku no Yado - Ryokan tradicional en Asakusa, $150/noche. Perfecto para primeras noches en Japón, incluye desayuno.

Por favor completa los días restantes siguiendo este formato y estilo exacto. Nota el nivel de especificidad: nombres de restaurantes reales cuando sea posible, notas de reserva, atracciones específicas en lugar de vagas sugerencias de "explorar la ciudad".
```

Ahora la IA tiene una plantilla cristalina que seguir. Cada día coincidirá con el formato de tu ejemplo. El nivel de detalle, la estructura, incluso las notas entre paréntesis serán consistentes.

### Cuándo few-shot es esencial

Algunas situaciones casi requieren prompting few-shot:

**Coincidir con una voz de marca:** Si necesitas contenido que suene como los materiales existentes de tu empresa, muestra ejemplos de esa voz.

**Formatos inusuales:** Si necesitas una estructura no convencional, muestra cómo se ve.

**Formatos técnicos específicos:** Si necesitas código, datos o salida estructurada en un estilo particular, muestra ese estilo.

**Estándares de calidad subjetivos:** Si "bueno" es difícil de definir en tu contexto, muestra ejemplos de cómo se ve "bueno" para ti.

### Construir tu propia biblioteca de prompts

A medida que desarrollas prompts que funcionan bien, guárdalos. Construye una biblioteca personal de prompts y ejemplos efectivos que puedas reutilizar y adaptar.

Incluye:
- El texto completo del prompt
- Por qué funciona bien
- Para qué contexto fue diseñado
- Ejemplos de buenas salidas que produjo

Esta biblioteca se vuelve cada vez más valiosa con el tiempo. En lugar de elaborar cada prompt desde cero, adaptas plantillas probadas.

### Ejercicio: Crea un ejemplo de salida

Para tu prompt en evolución, crea un ejemplo de exactamente cómo quieres que se vea la salida.

Escribe una instancia completa: si quieres una lista, escribe un elemento ideal. Si quieres análisis, escribe un párrafo exactamente como lo querrías. Si quieres código, escribe una muestra en el estilo exacto que prefieres.

Agrega este ejemplo a tu prompt con una nota como "Sigue este estilo exacto y nivel de detalle."

Compara los resultados con tus intentos anteriores. Nota con qué precisión la IA coincide con tu patrón demostrado.
