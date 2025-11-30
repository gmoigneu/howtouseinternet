---
title: Amenazas persistentes avanzadas (APT)
duration: 10 min
learningObjectives:
  - Comprender tácticas y motivaciones de APT
  - Reconocer señales de actividad APT
  - Implementar capacidades de detección y respuesta
---

# Amenazas persistentes avanzadas (APT)

Las amenazas persistentes avanzadas son atacantes sofisticados y bien financiados—a menudo patrocinados por estados-nación—que obtienen acceso a redes y permanecen sin detectar durante períodos prolongados. Con 1 de cada 4 empresas afectadas y tiempo mediano de exfiltración de 2 días, las APT representan la categoría de amenaza más sofisticada.

## La escala del problema

**Estadísticas 2024:**
- **1 de cada 4 empresas** afectadas por actividad APT
- **43% de incidentes de alta gravedad** atribuidos a APT
- **Mediana de 2 días** desde acceso hasta exfiltración de datos
- **Promedio de más de 200 días** sin detectar (mejorando debido a mejor detección)
- **Salt Typhoon, Lazarus, APT41, APT29/28** grupos más activos

## Características de APT

**Lo que los hace diferentes:**
- Bien financiados y pacientes
- Malware y herramientas personalizados
- Técnicas de vivir de la tierra
- Enfoque en sigilo sobre velocidad
- Objetivos de acceso a largo plazo
- A menudo patrocinados por estados

**Objetivos comunes:**
- Agencias gubernamentales
- Contratistas de defensa
- Infraestructura crítica
- Empresas tecnológicas
- Servicios financieros
- Organizaciones de salud

## Ciclo de vida del ataque

**1. Reconocimiento:** Investigar objetivo extensamente
**2. Compromiso inicial:** Spearphishing, zero-days, cadena de suministro
**3. Establecer punto de apoyo:** Instalación de malware, mecanismos de persistencia
**4. Escalación de privilegios:** Obtener derechos de admin/admin de dominio
**5. Reconocimiento interno:** Mapear red, identificar datos valiosos
**6. Movimiento lateral:** Propagarse a sistemas adicionales
**7. Recolección de datos:** Reunir información objetivo
**8. Exfiltración:** Eliminar datos (a menudo lentamente para evitar detección)
**9. Mantener acceso:** Dejar puertas traseras para acceso futuro

## Estrategias de detección

**Indicadores de comportamiento:**
- Patrones de tráfico de red inusuales
- Acceso fuera de horario por cuentas privilegiadas
- Grandes transferencias de datos a destinos inusuales
- Uso de protocolos o puertos poco comunes
- Múltiples intentos de inicio de sesión fallidos seguidos de éxito
- Acceso a sistemas fuera del rol normal

**Indicadores técnicos:**
- Uso sospechoso de PowerShell
- Abuso de WMI/tareas programadas
- Herramientas Mimikatz o de volcado de credenciales
- Movimiento lateral vía RDP/SSH
- Actividad de admin de dominio desde estaciones de trabajo
- Modificaciones a herramientas de seguridad

**Capacidades de detección:**
- EDR (Endpoint Detection and Response)
- SIEM con análisis avanzados
- Análisis de tráfico de red
- Equipos de búsqueda de amenazas
- Detección de anomalías de comportamiento
- Integración de inteligencia de amenazas

## Respuesta y mitigación

**Estrategias defensivas:**
- Mentalidad de asumir violación
- Segmentación de red
- Acceso de mínimo privilegio
- MFA en todas partes
- Búsqueda regular de amenazas
- Plan de respuesta a incidentes

**Si se sospecha APT:**
- No alertar al atacante (destruirá evidencia)
- Contratar firma IR y aplicación de ley
- Investigación forense
- Coordinar erradicación en todos los sistemas
- Reconstruir sistemas comprometidos
- Restablecer todas las credenciales

## Puntos clave

- ✅ **1 de cada 4 empresas** afectadas por actividad APT
- ✅ **Atacantes pacientes y sofisticados**
- ✅ **La detección requiere** análisis de comportamiento y búsqueda de amenazas
- ✅ **Mentalidad de asumir violación** esencial
- ✅ **Respuesta coordinada** previene escape del atacante
- ✅ **Segmentación y mínimo privilegio** limitan impacto
