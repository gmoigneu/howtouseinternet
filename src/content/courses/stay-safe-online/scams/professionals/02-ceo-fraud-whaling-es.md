---
title: Fraude de CEO y ataques de whaling
duration: 10 min
learningObjectives:
  - Reconocer tácticas sofisticadas de suplantación de ejecutivos incluyendo deepfakes
  - Comprender por qué los ejecutivos de nivel C son objetivos principales
  - Implementar procedimientos de verificación para solicitudes de alto riesgo
---

# Fraude de CEO y ataques de whaling

El "whaling" se dirige a individuos de alto valor—CEOs, CFOs y ejecutivos—con ingeniería social sofisticada. Estos ataques combinan suplantación de ejecutivos con urgencia y autoridad para evadir controles normales, resultando en pérdidas financieras masivas.

## La escala del problema

**Estadísticas 2024:**
- **Aumento del 442%** en ataques de vishing (phishing de voz) a ejecutivos
- **Aumento de 42x** en phishing por código QR dirigido a nivel C
- **2.900 millones de dólares** perdidos por fraude de CEO globalmente
- **125.000 dólares** de pérdida promedio por ataque de whaling exitoso
- **Clonación de voz:** 3 segundos de audio = 85% de precisión de coincidencia
- **Llamadas de video deepfake** usadas en múltiples fraudes de más de 20 millones de dólares

## Cómo funciona el fraude de CEO

### **Fraude clásico por correo de CEO:**

1. **Fase de investigación:** Los estafadores investigan jerarquía de empresa, relaciones, patrones de comunicación
2. **Suplantación:** Correo desde cuenta de CEO falsificada o comprometida
3. **Urgencia:** "En reunión, necesito transferencia urgente"
4. **Autoridad:** Aprovecha la posición de CEO para evitar verificación
5. **Confidencialidad:** "No discutir con nadie, trato confidencial"
6. **Resultado:** El empleado envía dinero sin verificación

### **Técnicas avanzadas (2024):**

**Clonación de voz:**
- La IA clona la voz de ejecutivo desde 3 segundos de audio (llamadas de ganancias, videos, mensajes de voz)
- El estafador llama al equipo de finanzas como "CEO" solicitando transferencia urgente
- 85%+ de precisión hace la detección casi imposible

**Llamadas de video deepfake:**
- Video deepfake en tiempo real suplantando ejecutivos
- Usado en fraude de Arup de 25 millones (Hong Kong, 2024)
- El CFO pensó que estaba en llamada de video con CEO y otros ejecutivos
- Todos eran deepfakes generados por IA

**Phishing por código QR:**
- Los códigos QR evaden filtros de correo
- Aumento de 42x dirigido a ejecutivos
- Enlaces a sitios de robo de credenciales

## Casos de estudio del mundo real

### **Caso 1: Deepfake de Arup Engineering (25-39 millones, 2024)**

**Lo que sucedió:**
- Trabajador de finanzas de sucursal de Hong Kong recibió solicitud de reunión
- Llamada de video con "CFO" y otros "ejecutivos"
- Todos los participantes eran deepfakes generados por IA
- Autorizó 15 transacciones totalizando 25-39 millones
- Descubierto solo cuando contactó al CFO real después

**Señales de alerta perdidas:**
- Urgencia inusual para grandes transferencias
- Sin verificación en persona para cantidades masivas
- No verificó a través de canal separado

### **Caso 2: Ataque de clonación de voz Retool (2024)**

**Lo que sucedió:**
- Empleado de TI recibió llamada del "gerente de TI"
- La voz coincidió perfectamente con el gerente real
- Solicitó credenciales por "problema urgente del sistema"
- El empleado cumplió, comprometiendo múltiples sistemas

**Cómo se detuvo:**
- El equipo de seguridad notó actividad inusual
- El gerente real había estado viajando (no podía haber llamado)
- La respuesta rápida limitó el daño

## Señales de alerta en ataques de whaling

🚩 **Señales de alerta de comunicación:**
- Urgencia inusual ("necesito esto en 1 hora")
- Demandas de confidencialidad ("no decir a nadie")
- Solicitudes fuera del proceso normal
- Enviado fuera de horario o cuando ejecutivo está viajando
- Gramática/tono no coincide con el estilo típico del ejecutivo

🚩 **Señales de alerta de solicitud:**
- Grandes transferencias sin aprobación estándar
- Cambios en información de pago de proveedores
- Solicitudes de credenciales o acceso
- Evadiendo procedimientos normales de adquisición
- "Confía en mí" en lugar de seguir protocolo

🚩 **Señales de alerta técnicas:**
- Correo desde dominio externo (CEO@gmail.com en lugar del dominio de empresa)
- Nombre de visualización coincide pero dirección de correo no
- Dirección de respuesta diferente del remitente
- Sin hilo de correo previo (inicia nueva conversación)

## Procedimientos de verificación

### **Para todas las solicitudes de alto riesgo:**

**La regla de verificación fuera de banda:**
- **Nunca** responder a correo/mensaje sospechoso
- **Siempre** verificar a través de canal de comunicación separado
- Llamar a número de teléfono conocido (no el proporcionado en mensaje)
- Caminar a la oficina del ejecutivo si es posible
- Usar chat interno de empresa (verificar que no esté comprometido)

**Aprobación multipersona:**
- Ninguna persona sola autoriza grandes transferencias
- Implementar sistema de doble aprobación
- Requerir firmas físicas para montos sobre umbral
- Usar sistemas de aprobación digital con 2FA

**Preguntas de desafío:**
- Establecer preguntas de verificación personal que solo el ejecutivo real conoce
- "¿Qué discutimos en la reunión del lunes?"
- "¿Cuál es el nombre en código del proyecto que discutimos ayer?"
- Cambiar preguntas regularmente

### **Para llamadas de voz/video:**

**Verificación de llamada de voz:**
- Hacer preguntas personales que solo la persona real conoce
- Solicitar devolución de llamada en número conocido
- Usar palabras en código de desafío-respuesta
- Verificar a través de canal separado
- Escuchar patrones de habla no naturales o retrasos

**Verificación de llamada de video:**
- Pedir a la persona que gire la cabeza, sonría, haga gestos específicos
- Solicitar que sostenga artículo con la fecha de hoy
- Hacer preguntas inesperadas
- Cambiar a verificación en persona o por teléfono para grandes montos
- Usar verificación multipersona

### **Para transferencias bancarias:**

**Procedimientos obligatorios:**
- Verificación de devolución de llamada en número de teléfono conocido
- Doble aprobación requerida
- Período de espera (24 horas) para solicitudes inusuales
- Verificación cara a cara para montos sobre 50.000 dólares
- Nunca evadir procedimientos, incluso para CEO

## Estrategias de protección

### **Controles técnicos:**

1. **Autenticación de correo:**
   - SPF, DKIM, DMARC configurados
   - Mostrar advertencias de remitente externo
   - Marcar correos de dominios similares al dominio de empresa

2. **Monitoreo de dominios:**
   - Monitorear dominios de typosquatting (suempresaa.com)
   - Registrar errores de ortografía comunes
   - Alertar sobre nuevos dominios similares

3. **Protección de cuenta de ejecutivos:**
   - MFA resistente a phishing (llaves FIDO2, no SMS)
   - Cambios regulares de contraseña
   - Monitorear credenciales comprometidas
   - Limitar información pública sobre ejecutivos

4. **Controles de transferencia bancaria:**
   - Verificación de devolución de llamada requerida
   - Sistema de doble aprobación
   - Segregación de funciones
   - Límites diarios/por transacción

### **Política y capacitación:**

1. **Políticas claras:**
   - Procedimientos escritos para transferencias bancarias
   - Sin excepciones para nadie, incluyendo CEO
   - Verificación requerida incluso si es "confidencial"
   - Empleados empoderados para verificar

2. **Capacitación regular:**
   - Ejemplos específicos de whaling
   - Práctica de procedimientos de verificación
   - Ataques simulados
   - Actualización sobre nuevas técnicas (deepfakes, clonación de voz)

3. **Aceptación ejecutiva:**
   - Los ejecutivos deben seguir procedimientos también
   - Apoyo público para cultura de verificación
   - Elogiar empleados que verifican, nunca castigar

4. **Palabras en código:**
   - Establecer códigos de verificación estilo familiar
   - "Si no uso la palabra en código, no confíes"
   - Cambiar periódicamente

## Puntos clave

- ✅ **Aumento del 442%** en ataques de vishing dirigidos a ejecutivos
- ✅ **La clonación de voz** requiere solo 3 segundos de audio
- ✅ **Deepfakes** usados en múltiples fraudes de más de 20 millones
- ✅ **La verificación fuera de banda** es obligatoria para solicitudes de alto riesgo
- ✅ **Sin excepciones** - incluso CEO debe seguir procedimientos de verificación
- ✅ **Preguntas de desafío** ayudan a verificar identidad en llamadas
- ✅ **Controles técnicos:** Autenticación de correo, MFA, monitoreo
- ✅ **La cultura importa:** Empoderar empleados para verificar, nunca castigar la precaución

**Recuerde:** Los ejecutivos legítimos siempre comprenderán y apreciarán los procedimientos de verificación. Si alguien que dice ser ejecutivo se enoja cuando verifica, esa es una señal de alerta masiva. Construya una cultura donde la verificación se espera, no se cuestiona.
