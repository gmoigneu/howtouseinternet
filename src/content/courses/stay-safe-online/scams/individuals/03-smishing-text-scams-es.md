---
title: Smishing - estafas por mensajes de texto
duration: 10 min
learningObjectives:
  - Comprender la creciente amenaza del phishing por SMS (smishing)
  - Reconocer tácticas comunes de smishing y patrones de mensajes
  - Aprender por qué el smishing tiene tasas de éxito más altas que el correo electrónico
  - Implementar prácticas seguras de mensajería móvil
---

# Smishing - estafas por mensajes de texto

El smishing (SMS + phishing) ha explotado en los últimos años, con tasas de éxito que superan con creces el phishing por correo electrónico. En este capítulo, aprenderás por qué las estafas por mensajes de texto son tan efectivas y cómo protegerte.

## El panorama de amenazas del smishing

Las estadísticas son alarmantes:

- **Aumento del 22%** en ataques de smishing solo en el tercer trimestre de 2024
- **Aumento global del 18%** en incidentes de smishing en 2024
- **Tasa de clics del 19-36%** para smishing (vs. 2-4% para correo electrónico)
- **27.6% de usuarios móviles** tocaron 6+ enlaces de smishing
- **76% de empresas** afectadas por ataques de smishing
- **Aumento del 174%** en estafas de smishing relacionadas con servicios de entrega
- Pérdida promedio: **$8,199 por persona** para smishing relacionado con impuestos

## Por qué el smishing es más efectivo que el correo electrónico

### Mayor factor de confianza
- Los mensajes de texto se sienten más personales
- Menos spam que el correo electrónico (históricamente)
- Las notificaciones móviles crean urgencia
- El formato corto parece menos sospechoso

### Patrones de comportamiento móvil
- Las personas revisan sus teléfonos 96+ veces al día
- Responden rápidamente a los mensajes de texto
- Más difícil de verificar en pantallas pequeñas
- Más probabilidad de hacer clic en móvil

### Visibilidad reducida
- No se puede pasar el cursor sobre enlaces en móvil (fácilmente)
- La suplantación de remitente es común
- Las URL acortadas ocultan el destino
- Contexto/información visible limitada

### Evolución de plataforma
El smishing se ha desplazado del SMS tradicional:
- **T2 2024**: 39.6% vía KakaoTalk, solo 1.5% vía SMS tradicional
- WhatsApp, Telegram, Signal cada vez más objetivo
- Más difícil de filtrar en aplicaciones de mensajería
- Percibidas como plataformas más seguras

## Tácticas comunes de smishing

### 1. Notificaciones de entrega falsas

La **táctica de smishing #1** - aumento del 174% en 2024.

**Ejemplos de mensajes:**
> "Correos: Tu paquete está esperando entrega. Confirma dirección: [enlace]"

> "SEUR: Paquete retenido debido a dirección incompleta. Actualiza aquí: [enlace]"

> "Amazon: Tu pedido #12345 no pudo ser entregado. Reprograma: [enlace]"

**Por qué funciona:**
- Todo el mundo espera paquetes
- Crea urgencia (paquete esperando)
- Sincronizado con vacaciones/temporadas de compras
- Enlaces a sitios web falsos realistas

**Señales de alerta:**
- Notificaciones de entrega inesperadas
- Solicitudes de hacer clic en enlaces
- Reclamos de tarifas (1,99 € de reentrega)
- Acción urgente requerida
- URL acortadas (bit.ly, tinyurl)

**Verificación:**
- Verifica la aplicación oficial para rastreo
- Escribe el sitio web del transportista manualmente
- Verifica con el minorista directamente
- No hagas clic en enlaces de mensaje

### 2. Alertas de seguridad bancaria

**Ejemplos de mensajes:**
> "Alerta bancaria: Actividad inusual detectada en cuenta terminada en 4567. Verifica ahora: [enlace]"

> "Tu tarjeta ha sido bloqueada debido a actividad sospechosa. Llama al 900-123-456 para desbloquear."

> "Alerta de fraude: Transacción de 500 € rechazada. Confirma que fuiste tú: [enlace]"

**Por qué funciona:**
- La seguridad bancaria es crítica
- Crea preocupación inmediata
- Parece oficial con detalles de cuenta
- Naturaleza urgente

**Señales de alerta:**
- Enlaces para "verificar" cuenta
- Números de teléfono para llamar (no de tu tarjeta)
- Solicitudes de PIN o contraseña
- Información de cuenta genérica (los últimos 4 dígitos podrían adivinarse)

**Lo que hacen los bancos reales:**
- Usan notificaciones de aplicación oficial
- Llaman desde números de banco conocidos
- Nunca piden PIN/contraseña por mensaje
- Proporcionan formas de verificar en la app

### 3. Mensajes "Verifica tu cuenta"

**Ejemplos de mensajes:**
> "PayPal: Tu cuenta ha sido limitada. Verifica identidad: [enlace]"

> "Apple: Tu cuenta de iCloud requiere verificación dentro de 24 horas."

> "Netflix: Falló el método de pago. Actualiza información de facturación: [enlace]"

**Por qué funciona:**
- La suspensión de cuenta es preocupante
- Plazos urgentes
- Servicios familiares que todos usan

**Señales de alerta:**
- Servicios de cuenta que usas enviando mensajes inesperadamente
- Enlaces para "verificar" o "actualizar"
- Amenazas de suspensión
- Plazos de 24-48 horas

**Verificación:**
- Inicia sesión en la cuenta directamente (app o navegador)
- Verifica notificaciones reales allí
- Contacta a la empresa vía canales oficiales
- Nunca hagas clic en enlaces de mensaje

### 4. Estafas de peajes y tráfico

**Ejemplos de mensajes:**
> "Autopista: Tienes un peaje impago de 12,51 €. Paga ahora para evitar multa de 50 €: [enlace]"

> "Aviso de peaje: Saldo pendiente de 3,75 €. Paga dentro de 72 horas: [enlace]"

**Por qué funciona:**
- Específico de tu región geográfica
- Cantidades realistas (3-15 €)
- Amenaza de multas crecientes
- Mucha gente usa carreteras de peaje

**Señales de alerta:**
- Mensajes sobre peajes (la mayoría usa correo postal)
- Demandas de pago inmediato
- Enlaces para pagar
- "Multas" por cantidades pequeñas

**Verificación:**
- Inicia sesión en cuenta oficial de peaje
- Verifica estados de cuenta allí
- Las agencias de peaje envían correo primero
- Nunca pagues vía enlace de mensaje

### 5. Estafas de autenticación de dos factores

**Ejemplos de mensajes:**
> "Tu código de verificación es 123456. Nunca compartas este código."

Seguido de llamada de phishing:
> "Esto es seguridad de [Banco]. Necesitamos ese código que acabas de recibir para verificar que eres tú."

**Por qué funciona:**
- Los códigos legítimos se ven iguales
- Crea confusión
- La llamada urgente agrega presión
- Explota funciones de seguridad

**Señales de alerta:**
- Códigos 2FA no solicitados (no solicitaste)
- Alguien pidiendo tu código 2FA
- Llamadas telefónicas sobre códigos
- Múltiples códigos en poco tiempo

**Qué hacer:**
- Nunca compartas códigos 2FA
- Ignora códigos no solicitados
- Cuelga si te piden códigos
- Cambia contraseñas si recibes códigos inesperados

### 6. Estafas relacionadas con COVID y salud

Aunque en declive, todavía prevalentes:

**Ejemplos de mensajes:**
> "Has estado expuesto al COVID-19. Programa prueba gratuita: [enlace]"

> "Cita de vacuna disponible. Confirma dentro de 2 horas: [enlace]"

**Por qué funciona:**
- Las preocupaciones de salud anulan la precaución
- Suplantación de autoridad gubernamental/sanitaria
- Naturaleza médica urgente

**Señales de alerta:**
- Notificaciones de salud inesperadas vía mensaje
- Enlaces para programar citas
- Solicitudes de información de seguro
- Pago por servicios "gratuitos"

### 7. Estafas de premios y tarjetas de regalo

**Ejemplos de mensajes:**
> "¡Felicidades! Has ganado una tarjeta de regalo de El Corte Inglés de 500 €. Reclama aquí: [enlace]"

> "Has sido seleccionado para el programa de recompensas de Amazon. Haz clic para canjear: [enlace]"

**Por qué funciona:**
- A todos les gusta el dinero gratis
- Parece selección aleatoria
- Proceso de reclamo rápido
- No hay daño obvio en verificar

**Señales de alerta:**
- Ganar concursos en los que nunca participaste
- Ofertas de dinero gratis
- Enlaces para "reclamar"
- Ofertas por tiempo limitado

## URL acortadas: El arma del smishing

### Por qué los estafadores las usan
- Ocultan el destino real
- Parecen menos sospechosas
- Eluden algunos filtros
- Pueden rastrear clics

### Acortadores de URL comunes:
- bit.ly
- tinyurl.com
- goo.gl
- t.co
- ow.ly

### Cómo verificar URL acortadas:
1. Usa servicios de expansión de URL (getlinkinfo.com, urlex.org)
2. Nunca hagas clic primero - expande primero
3. Busca el dominio de destino real
4. Si es sospechoso, no hagas clic en absoluto

## Segmentación geográfica

Las campañas de smishing a menudo se dirigen a regiones específicas:

**Estafas regionales de peajes:**
- Autopistas de España (diversas concesionarias)
- Peajes catalanes
- Autopistas del norte

**Suplantación de gobierno local:**
- Mensajes de DGT
- Empresas de servicios públicos locales
- Servicios de entrega regionales

**Por qué funciona la segmentación geográfica:**
- Más creíble (servicios que realmente usas)
- Contexto realista
- Más difícil de verificar rápidamente

## Smishing específico de plataforma

### SMS tradicional
- Mensajes directos del operador
- Puede suplantar nombres de remitente
- Más difícil de bloquear a escala

### WhatsApp/Telegram/Signal
- Parecen más confiables
- Estafas de mensajes grupales
- Cadenas de mensajes reenviados
- Cuentas comerciales falsas

### iMessage
- Difícil de suplantar desde usuarios de iPhone
- Confusión de burbuja verde (SMS) vs. azul (iMessage)
- Intentos de phishing por FaceTime

## Vulnerabilidades específicas de móvil

### Por qué el móvil te hace vulnerable

**Espacio de pantalla limitado:**
- No se pueden ver URL completas
- Menos contexto visible
- Más difícil detectar detalles

**Mentalidad de toque para acción:**
- Diseñado para interacciones rápidas
- Toma de decisiones menos deliberada
- Clic por memoria muscular

**Urgencia de notificaciones:**
- Las alertas push crean presión
- Miedo a perderse algo
- Reaccionar antes de pensar

**Verificación más difícil:**
- Cambiar apps es engorroso
- No se puede pasar cursor sobre enlaces
- Copiar y pegar URL es difícil

## Procedimientos de verificación para mensajes de texto

### Regla de oro: Nunca hagas clic en enlaces en mensajes

**En su lugar:**

1. **Abre la aplicación oficial** - Para el servicio mencionado
2. **Escribe la URL manualmente** - En tu navegador
3. **Llama al número oficial** - Del sitio web/tarjeta de la empresa
4. **Visita en persona** - Para servicios locales

### Antes de cualquier acción:

**Pregúntate:**
- ¿Estaba esperando este mensaje?
- ¿Esta empresa normalmente me envía mensajes?
- ¿Hay lenguaje de urgencia/amenaza?
- ¿Me piden hacer clic en un enlace?
- ¿El número parece oficial?

**Si alguna respuesta es "sí" a preguntas de señal de alerta:**
No hagas clic. Verifica a través de canales oficiales.

## Prácticas seguras para seguridad móvil

### Activar funciones de seguridad

**iOS:**
- Activa "Filtrar remitentes desconocidos"
- Activa "Silenciar llamadas desconocidas"
- Reporta mensajes basura

**Android:**
- Activa protección contra spam
- Bloquea números desconocidos
- Usa filtrado de Google Messages

### Protección a nivel de operador
- Activa bloqueo de spam a través del operador
- Servicios anti-spam de operadores españoles
- Opciones de filtrado disponibles

### Ten cuidado con tu número
- No lo compartas innecesariamente
- Usa números alternativos para registros
- Regístrate en Lista Robinson
- Darse de baja del marketing

### Activar autenticación de dos factores
- Pero nunca compartas códigos 2FA
- Usa 2FA basada en app cuando sea posible
- Autenticación biométrica preferida

## Lista de verificación de señales de alerta para mensajes de texto

❌ **Señales de alerta inmediatas:**
- Mensajes inesperados con enlaces
- Solicitudes de verificar cuentas
- Demandas de pago vía mensaje
- Notificaciones de premio/tarjeta de regalo
- Códigos 2FA no solicitados
- Paquetes que no pediste
- Amenazas de suspensión de cuenta

❌ **Patrones sospechosos:**
- URL acortadas (bit.ly, etc.)
- Nombres de empresa mal escritos
- Saludos genéricos
- Mala gramática
- Plazos urgentes (horas/días)
- Solicitudes de información personal
- Lenguaje "Haz clic aquí"

✓ **Indicadores más seguros (pero aún verifica):**
- Mensajes esperados (que iniciaste)
- Sin enlaces, solo información
- Coincide con estilo de comunicación oficial
- Puede verificarse en aplicación oficial

## Ejemplos reales de smishing

### Ejemplo 1: Entrega de Correos

**Mensaje recibido:**
```
Correos: Falló entrega de paquete.
Paga 1,99 € de tarifa de reentrega:
bit.ly/correos-1234
```

**Análisis:**
- Correos no envía mensajes para tarifas de reentrega
- La URL acortada oculta el destino
- La tarifa pequeña lo hace parecer legítimo
- Crea urgencia (paquete esperando)

**Acción correcta:**
- Verifica Correos.es con número de rastreo
- O verifica información de envío del minorista
- No hagas clic en el enlace
- Reporta a Correos

### Ejemplo 2: Alerta bancaria

**Mensaje recibido:**
```
Alerta bancaria: Transacción sospechosa de 500 €
en tarjeta terminada en 4567.
Responde S para confirmar o N para bloquear.
www.secure-bankverify.com
```

**Análisis:**
- Los bancos no verifican por respuesta de mensaje
- Dominio incorrecto (no el banco real)
- Los últimos 4 dígitos podrían adivinarse
- Diseñado para obtener respuesta rápida

**Acción correcta:**
- Llama al banco usando número en tu tarjeta
- Verifica cuenta vía aplicación oficial
- No respondas ni hagas clic
- Reporta al departamento de fraude del banco

### Ejemplo 3: Estafa de impuestos/Hacienda

**Mensaje recibido:**
```
HACIENDA: Tienes un reembolso
no reclamado de 1.247 €. Reclama dentro de
48 horas: [enlace]
Ref #HACIENDA-2024-78945
```

**Análisis:**
- Hacienda nunca inicia contacto por mensaje
- Las cantidades de reembolso varían para parecer personales
- Urgencia de 48 horas
- El número de referencia agrega falsa legitimidad

**Acción correcta:**
- Hacienda solo contacta por correo postal
- Verifica agenciatributaria.es para estado real del reembolso
- Nunca hagas clic en mensajes relacionados con Hacienda
- Reporta a las autoridades

## Si has hecho clic en un enlace de smishing

**Acciones inmediatas:**

1. **No ingreses información** - Cierra el navegador
2. **Desconecta internet** - Desactiva WiFi/datos
3. **No descargues nada** - Si se solicita
4. **Captura el mensaje** - Para reporte
5. **Ejecuta escaneo de seguridad** - Antivirus móvil

**Dentro de horas:**

6. **Cambia contraseñas** - Para cuentas en ese dispositivo
7. **Activa 2FA** - Si no está ya activa
8. **Monitorea cuentas** - Verifica actividad no autorizada
9. **Contacta al banco** - Si ingresaste información financiera
10. **Repórtalo** - Operador, autoridades, empresa afectada

**Seguimiento:**

11. **Observa estados de cuenta** - Durante varios meses
12. **Monitorea crédito** - Considera congelamiento
13. **Actualiza seguridad** - En todos los dispositivos
14. **Aprende la lección** - Para detectar futuros intentos

## Puntos clave para recordar

- **El smishing tiene tasa de clics del 19-36%** (vs. 2-4% para correo electrónico)
- **Aumento del 174% en estafas de entrega** en 2024
- **Nunca hagas clic en enlaces en mensajes inesperados**
- **Verifica a través de aplicaciones oficiales** en su lugar
- **Activa filtrado de spam** en teléfono y operador
- **Las URL acortadas ocultan el destino** - expande antes de hacer clic
- **Los bancos nunca verifican por respuesta de mensaje**
- **Hacienda nunca inicia contacto por mensaje**
- **Los códigos 2FA nunca deben compartirse**
- **En caso de duda, no hagas clic** - verifica de forma independiente

---

**Recuerda:** Tu teléfono se siente personal y confiable, que es exactamente por qué el smishing es tan efectivo. Siempre haz una pausa antes de hacer clic y verifica a través de canales oficiales. Unos pocos segundos adicionales pueden ahorrarte miles de euros.

**Próximo capítulo:** Exploraremos las estafas en redes sociales - cómo los atacantes explotan Facebook, Instagram, LinkedIn y otras plataformas para dirigirse a las víctimas.
