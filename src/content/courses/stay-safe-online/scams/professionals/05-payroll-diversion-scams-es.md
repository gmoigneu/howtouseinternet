---
title: Estafas de desvío de nómina
duration: 10 min
learningObjectives:
  - Comprender métodos de ataque de desvío de nómina
  - Reconocer solicitudes fraudulentas de cambio de depósito directo
  - Implementar controles de seguridad de RRHH y nómina
---

# Estafas de desvío de nómina

Los ataques de desvío de nómina se dirigen a departamentos de RRHH y nómina con solicitudes fraudulentas para cambiar información de depósito directo de empleados. Con un aumento del 815% en intentos, estos ataques redirigen cheques de pago de empleados a cuentas criminales antes de la detección.

## La escala del problema

**Estadísticas 2024:**
- **Aumento del 815%** en intentos de desvío de nómina
- **Proofpoint bloqueó 35.000** intentos de estafa en 2024
- **Más de 15 millones de dólares** robados mediante desvíos exitosos
- **Departamentos de RRHH/Nómina** objetivos principales
- **Tiempo promedio de detección:** 2-3 períodos de pago
- **Suplantación de empleado** vía correo comprometido o falsificado

## Cómo funciona el desvío de nómina

**Ataque típico:**
1. El estafador investiga empleados de empresa (LinkedIn, sitio web de empresa)
2. Envía correo a RRHH/nómina suplantando empleado
3. Solicita cambio de depósito directo con nuevo enrutamiento/cuenta bancaria
4. Puede incluir documentos de autorización falsificados
5. RRHH actualiza sistema de nómina
6. El(los) siguiente(s) cheque(s) de pago van a cuenta del estafador
7. El empleado descubre cuando el cheque no llega
8. Para entonces, el estafador ha retirado fondos

**Por qué funciona:**
- RRHH procesa muchas solicitudes legítimas de cambio
- Las solicitudes parecen rutinarias, no sospechosas
- Los empleados pueden cambiar de banco legítimamente
- Los estafadores falsifican direcciones de correo de empleados
- RRHH quiere ser útil a los empleados

## Señales de alerta

🚩 Solicitud vía correo personal en lugar de correo de empresa
🚩 Solicitudes urgentes "necesito para nómina de este viernes"
🚩 Nuevo empleado solicitando cambio inmediatamente después de contratación
🚩 Tono de correo no coincide con estilo típico del empleado
🚩 Timing inusual (justo antes de vacaciones, períodos de bonos grandes)
🚩 Solicitudes de mantener cambio confidencial
🚩 Cuenta bancaria en diferente estado o país que el empleado

## Procedimientos de verificación

**Obligatorio para TODOS los cambios de nómina:**

1. **Verificación en persona:**
   - Empleado debe aparecer en persona con identificación con foto
   - O llamada de video para empleados remotos (verificar cara coincide con ID)
   - Verificación de llamada telefónica mínimo (número conocido)

2. **Confirmación por canal separado:**
   - No responder a solicitud de correo
   - Llamar a número de teléfono conocido del empleado
   - Usar chat/sistema interno de empresa
   - Verificar a través de gerente si empleado no disponible

3. **Requisitos de documentación:**
   - Cheque anulado de nueva cuenta
   - Carta bancaria confirmando propiedad de cuenta
   - Formulario de autorización firmado (en persona o notariado)
   - Copia de identificación con foto

4. **Período de espera:**
   - Implementar retraso de 1-2 períodos de pago para cambios
   - Primer pago a nueva cuenta solo monto parcial
   - Confirmar recepción antes de monto completo

5. **Sistema de notificación:**
   - Confirmación por correo/texto a contacto conocido del empleado
   - Notificar empleado cuando se procesa cambio
   - Alertar si se rechaza solicitud de cambio

## Estrategias de protección

**Procedimientos de RRHH/Nómina:**
- Nunca aceptar solicitudes solo por correo
- Requerir verificación en persona o por video
- Implementar períodos de espera
- Usar portales seguros para envíos
- Capacitar personal sobre ingeniería social

**Controles técnicos:**
- Advertencias de autenticación de correo
- Portales seguros de autoservicio de empleados
- MFA para acceso a sistema de nómina
- Registros de auditoría de todos los cambios
- Alertas para cambios antes de ejecución de nómina

**Educación de empleados:**
- Cómo solicitar cambios correctamente
- Reportar notificaciones de cambio sospechosas
- Verificar que cheques de pago lleguen a tiempo
- Monitorear cuentas bancarias regularmente

**Transacciones de prueba:**
- Enviar pago de prueba de 1-10 dólares primero
- Confirmar que empleado lo recibió
- Luego procesar cheque de pago completo

## Respuesta a fraude sospechado

**Si se detecta solicitud fraudulenta:**
1. No procesar el cambio
2. Contactar empleado inmediatamente vía número conocido
3. Documentar el intento
4. Reportar a equipo de TI/seguridad
5. Advertir a otro personal de RRHH
6. Presentar reporte con FBI IC3

**Si se hizo pago fraudulento:**
1. Contactar banco inmediatamente (dentro de 24 horas crítico)
2. Solicitar reversión de ACH si es posible
3. Contactar empleado para explicar situación
4. Emitir pago de emergencia a cuenta correcta
5. Presentar reporte policial
6. Reportar a FBI IC3
7. Revisar y fortalecer procedimientos

## Puntos clave

- ✅ **Aumento del 815%** en intentos de desvío de nómina
- ✅ **Verificación en persona o por video** requerida para todos los cambios
- ✅ **Nunca aceptar solo por correo** solicitudes de depósito directo
- ✅ **Períodos de espera** permiten detección antes de pago
- ✅ **Pagos de prueba** verifican cuenta antes de monto completo
- ✅ **Educación de empleados** ayuda a detectar cambios no autorizados
- ✅ **Reportar inmediatamente** si se sospecha o confirma fraude
