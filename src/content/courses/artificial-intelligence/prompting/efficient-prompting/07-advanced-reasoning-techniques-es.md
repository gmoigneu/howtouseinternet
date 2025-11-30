---
title: "Técnicas de razonamiento avanzadas"
duration: 6 min
learningObjectives:
  - Comprender el prompting Chain of Thought para problemas complejos
  - Aprender Tree of Thought para explorar múltiples enfoques
  - Aplicar validación adversarial para detectar errores y puntos ciegos
---

## Técnicas de razonamiento avanzadas

Todo lo que hemos cubierto hasta ahora funciona bien para solicitudes sencillas. ¿Pero qué pasa con problemas complejos que requieren análisis genuino? ¿Qué pasa con situaciones donde hay compensaciones, múltiples enfoques válidos o decisiones que dependen de sopesar varios factores?

Aquí es donde las técnicas de razonamiento avanzadas se vuelven esenciales.

### Cuando los prompts simples no son suficientes

Algunas solicitudes requieren que la IA realmente piense a través de un problema en lugar de solo recuperar y formatear información:

- Decisiones con compensaciones (elegir entre opciones con diferentes pros y contras)
- Problemas que requieren múltiples pasos (donde pasos posteriores dependen de conclusiones anteriores)
- Situaciones con restricciones que interactúan (donde optimizar una cosa afecta otra)
- Análisis que requiere considerar múltiples perspectivas

Para estas situaciones, necesitamos técnicas que fomenten un razonamiento más profundo.

### Chain of thought: Paso a paso

El prompting Chain of Thought (CoT) es una de las técnicas más poderosas para razonamiento complejo. La idea central es simple: pedir a la IA que piense a través del problema paso a paso antes de dar su respuesta final.

¿Por qué funciona esto? Cuando pides respuestas inmediatas, la IA salta directamente a conclusiones. Cuando le pides que razone paso a paso, genera pensamientos intermedios que la guían hacia mejores conclusiones. Cada paso se construye sobre el anterior, y los errores son más propensos a ser detectados en el camino.

La forma más simple de Chain of Thought:

```
Piensa en esto paso a paso antes de dar tu respuesta.
```

O más específicamente:

```
Antes de responder, trabaja a través de los siguientes pasos:
1. Primero, considera X
2. Luego, analiza Y
3. Finalmente, evalúa Z
4. Ahora proporciona tu recomendación basada en este análisis.
```

### Aplicando chain of thought a nuestro ejemplo continuo

Evolucionemos nuestro prompt de Japón para una optimización compleja:

```
Eres un consultor de viajes experimentado en Japón que ha ayudado a cientos de visitantes primerizos a planificar sus viajes durante los últimos 15 años.

Estoy planeando mi primer viaje a Japón con los siguientes detalles:
[Todo nuestro contexto del capítulo 4]

Antes de crear el itinerario, quiero que pienses en lo siguiente:

1. Optimización de ruta: ¿Cuál es el flujo geográfico más lógico? Considera tiempos de viaje entre ciudades y evita retrocesos.

2. Factores estacionales: El 5-19 de abril cubre la temporada de cerezos en flor. ¿Cuándo y dónde es probable que las flores estén en su pico? ¿Cómo debería esto afectar nuestra ruta?

3. Consideraciones de ritmo: Dada mi preferencia por ritmo moderado y las limitaciones físicas que mencioné, ¿cuál es el número correcto de ciudades/regiones? ¿Cuál es un ritmo diario realista?

4. Balance de experiencias: ¿Cómo equilibramos templos/santuarios, experiencias culinarias y oportunidades fotográficas a través del viaje?

Primero, comparte tu razonamiento sobre cada uno de estos puntos. Luego, crea el itinerario día a día basado en este análisis.
```

Ahora la IA debe trabajar a través de la complejidad antes de proponer una solución. El itinerario final reflejará una consideración cuidadosa de múltiples factores en lugar de solo listar destinos populares.

### Pensamiento extendido y modelos de razonamiento

Algunos sistemas de IA, incluido Claude, ofrecen modos de "pensamiento extendido" o "razonamiento" que aplican Chain of Thought automáticamente. Estos modos permiten que la IA pase más tiempo razonando antes de responder.

Cuando estén disponibles, estas características valen la pena usar para problemas complejos. Incorporan el pensamiento paso a paso sin requerir que lo solicites explícitamente.

Pero incluso sin modos de razonamiento dedicados, puedes lograr efectos similares pidiendo explícitamente razonamiento paso a paso en tus prompts.

### Tree of thought: Explorando múltiples caminos

A veces el problema no es que necesites razonamiento paso a paso, sino que hay múltiples enfoques válidos y quieres explorarlos antes de comprometerte.

El prompting Tree of Thought pide a la IA que genere varios enfoques diferentes, evalúe cada uno y luego recomiende o sintetice la mejor opción.

```
Me gustaría que generaras 3 enfoques diferentes para este itinerario:

Enfoque A - Máximo enfoque en cerezos en flor: Optimizar completamente alrededor de ver flores en su pico

Enfoque B - Viaje culinario: Optimizar para experiencias gastronómicas, con flores como bono

Enfoque C - Experiencia balanceada: Peso igual a cultura, comida y belleza estacional

Para cada enfoque, describe la estructura básica y explica las compensaciones.

Luego, recomienda qué enfoque se ajusta mejor a mis preferencias declaradas y explica por qué.
```

Esta técnica te previene de quedar encerrado en el primer enfoque que la IA piensa. Ves el panorama de posibilidades antes de tomar una decisión.

### Validación adversarial: Batalla de bots

Aquí hay una técnica poderosa para detectar problemas y puntos ciegos: hacer que la IA argumente consigo misma.

Después de obtener una recomendación, pide a la IA que adopte una personalidad escéptica y critique su propio trabajo:

```
Ahora quiero que adoptes un rol diferente.

Eres un viajero escéptico que ha visitado Japón tres veces y ha visto muchos itinerarios turísticos salir mal.

Revisa el itinerario que acabas de crear. Identifica:
- Problemas potenciales u omisiones
- Asignaciones de tiempo poco realistas
- Errores comunes a los que este plan podría llevar
- Consideraciones faltantes

Sé genuinamente crítico. No te contengas.
```

Luego, después de recibir la crítica:

```
Ahora, vuelve a tu rol de consultor y revisa el itinerario basándote en las críticas válidas planteadas.
```

Esta técnica detecta problemas que de otro modo podrían pasar desapercibidos. La personalidad "escéptica" de la IA no está invertida en defender el plan original y puede detectar debilidades más objetivamente.

### Cuándo usar cada técnica

**Chain of Thought:** Usa cuando el problema requiere razonamiento secuencial, cuando los pasos dependen de pasos anteriores, o cuando quieres ver la lógica de la IA.

**Tree of Thought:** Usa cuando hay múltiples enfoques válidos, cuando quieres explorar opciones antes de comprometerte, o cuando la "mejor" respuesta depende de prioridades que podrían ponderarse de manera diferente.

**Validación adversarial:** Usa cuando las apuestas son altas, cuando quieres probar bajo estrés una recomendación, o cuando sospechas que la primera respuesta podría tener puntos ciegos.

También puedes combinar estas técnicas. Comienza con Chain of Thought para desarrollar una solución, usa validación adversarial para criticarla, luego refina basándote en la crítica.

### Ejercicio: Aplica chain of thought

Toma una versión compleja de tu prompt, una con compensaciones, múltiples consideraciones o decisiones que requieren sopesar diferentes factores.

Antes de pedir la respuesta, especifica los pasos de razonamiento que quieres que la IA trabaje. Sé explícito sobre qué factores considerar y en qué orden.

Nota cómo la respuesta final difiere cuando la IA ha razonado a través del problema sistemáticamente versus saltar directamente a conclusiones.
