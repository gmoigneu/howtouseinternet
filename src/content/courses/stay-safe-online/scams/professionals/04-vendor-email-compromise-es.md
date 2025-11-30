---
title: Compromiso de proveedor (VEC)
duration: 10 min
learningObjectives:
  - Comprender vectores de ataque VEC y vulnerabilidades de cadena de suministro
  - Reconocer comunicaciones de proveedores comprometidas
  - Implementar procedimientos de verificación de seguridad de proveedores
---

# Compromiso de proveedor (VEC)

Los ataques de compromiso de proveedor se dirigen a la cadena de suministro comprometiendo cuentas de correo de proveedores para interceptar pagos, robar datos o acceder a sistemas de clientes. Con el 69% de empresas como objetivo y un aumento del 137% en servicios financieros, VEC representa un vector de amenaza creciente.

## La escala del problema

**Estadísticas 2024:**
- **69% de empresas** objetivo de VEC
- **Aumento del 137%** en sector de servicios financieros
- **Aumento del 78%** en ataques a cadena de suministro en general
- **Aumento del 66%** solo en H1 2024
- **2.400 millones de dólares** perdidos por ataques VEC
- **Promedio de 3 meses** antes de detección

## Cómo funciona VEC

Los atacantes comprometen el correo del proveedor mediante phishing, credenciales robadas o malware. Luego monitorean comunicaciones para entender relaciones, calendarios de pago y procedimientos antes de atacar.

**Progresión del ataque:**
1. Comprometer cuenta de correo del proveedor
2. Monitorear comunicaciones con clientes (semanas/meses)
3. Aprender procesos y timing de pago
4. Interceptar factura o enviar una falsa
5. Cliente paga al estafador en lugar del proveedor
6. Mover dinero rápidamente antes del descubrimiento

## Escenarios VEC comunes

**Interceptación de factura:** Estafador modifica factura real en tránsito
**Desvío de pago:** "Nuestra cuenta bancaria cambió" desde proveedor comprometido
**Robo de datos:** Acceso a contratos de clientes, precios, estrategias
**Movimiento lateral:** Usar confianza de proveedor para atacar clientes
**Envenenamiento de cadena de suministro:** Inyectar malware en actualizaciones de software

## Señales de alerta

🚩 Cambios inesperados de método de pago
🚩 Solicitudes urgentes del proveedor
🚩 Estilo o tono de correo diferente
🚩 Solicitudes evadiendo proceso normal
🚩 Nueva persona de contacto sin introducción
🚩 Presión para actuar rápidamente

## Procedimientos de verificación

**Para cambios de pago de proveedores:**
- Llamar a contacto conocido (no número en correo)
- Requerir documentación formal
- Probar pequeño pago primero
- Verificar con múltiples contactos del proveedor

**Para correos sospechosos de proveedores:**
- Verificar encabezados de correo
- Verificar a través de canal alternativo
- Revisar comunicaciones recientes del proveedor
- Confirmar con su gerente de cuenta

## Estrategias de protección

**Requisitos de seguridad de proveedores:**
- MFA requerido para todos los proveedores
- Evaluaciones de seguridad anuales
- Cláusulas de notificación de incidentes
- Revisiones de acceso regulares

**Controles técnicos:**
- Autenticación de correo (SPF/DKIM/DMARC)
- Advertencias de remitente externo
- Sistemas de verificación de pagos
- Portal de proveedor para envío de facturas

**Gestión de proveedores:**
- Base de datos centralizada de proveedores
- Verificación regular de información
- Procedimientos formales de cambio
- Segmentación de proveedores basada en riesgo

## Puntos clave

- ✅ **69% de empresas** objetivo de ataques VEC
- ✅ **Verificar todos los cambios de pago de proveedores** a través de contactos conocidos
- ✅ **Monitorear relaciones con proveedores** para comunicaciones sospechosas
- ✅ **Requerir estándares de seguridad de proveedores** en contratos
- ✅ **Usar portales seguros** para comunicaciones sensibles
- ✅ **Auditorías regulares de proveedores** previenen compromiso
