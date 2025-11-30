---
title: "Tipos de certificados y qué buscar"
duration: 4 min
learningObjectives:
  - Conocer la diferencia entre certificados DV, OV y EV
  - Comprender qué nivel de verificación proporciona cada tipo
  - Reconocer señales de advertencia de certificados inválidos
  - Saber qué verificar antes de confiar en un sitio web
---

## Tipos de certificados y qué buscar

No todos los certificados TLS son iguales. Vienen en tres tipos principales, cada uno requiriendo diferentes niveles de verificación antes de ser emitidos.

### Certificados de validación de dominio (DV)

Los certificados de validación de dominio son el tipo más simple y común. La CA solo verifica que controlas el nombre de dominio. Sin verificaciones de identidad, sin verificación de negocio.

**Cómo funciona la verificación:**
La CA envía un desafío (como un correo electrónico a admin@tudominio.com o un archivo especial para colocar en tu sitio web). Si lo completas, obtienes el certificado.

**Lo que prueba:**
Alguien que controla este dominio solicitó un certificado. Eso es todo.

**Usos comunes:**
- Sitios web personales y blogs
- Sitios de pequeñas empresas
- Cualquier sitio que necesite cifrado básico

**Costo:**
A menudo gratuito (Let's Encrypt) o muy económico.

Los certificados DV son perfectamente adecuados para la mayoría de los sitios web. Cifran tu conexión tan fuertemente como cualquier otro certificado. La diferencia está solo en cuánto verificó la CA sobre el solicitante del certificado.

### Certificados de validación de organización (OV)

Los certificados de validación de organización requieren más verificación. La CA verifica que tu organización realmente existe antes de emitir el certificado.

**Cómo funciona la verificación:**
La CA verifica:
- Propiedad del dominio
- Nombre de la organización y existencia legal
- Dirección física
- Número de teléfono

Esto típicamente implica verificar bases de datos gubernamentales y hacer llamadas telefónicas.

**Lo que prueba:**
Una organización verificada controla este sitio web.

**Usos comunes:**
- Sitios web de empresas
- Sitios gubernamentales
- Organizaciones que desean mostrar identidad verificada

**Costo:**
Moderado (típicamente $50-200 por año).

Cuando ves un certificado OV, puedes ver el nombre de la organización en los detalles del certificado.

### Certificados de validación extendida (EV)

Los certificados de validación extendida requieren el proceso de verificación más riguroso.

**Cómo funciona la verificación:**
La CA realiza verificaciones exhaustivas que incluyen:
- Todos los requisitos OV
- Existencia legal, operativa y física de la organización
- Identidad de individuos específicos que solicitan el certificado
- Verificación de que el solicitante está autorizado por la organización
- Verificación cara a cara o por video en algunos casos

Este proceso puede tomar días o semanas.

**Lo que prueba:**
Una organización minuciosamente verificada controla este sitio web, y personas autorizadas específicas solicitaron el certificado.

**Usos comunes:**
- Bancos e instituciones financieras
- Grandes sitios de comercio electrónico
- Organizaciones de salud
- Cualquier sitio que maneje datos altamente sensibles

**Costo:**
Más alto (típicamente $100-500+ por año).

Los navegadores solían mostrar los certificados EV con una barra de direcciones verde y el nombre de la empresa. La mayoría de los navegadores ya no hacen esto, pero aún puedes ver el nombre de la organización viendo los detalles del certificado.

### Comparación de tipos de certificados

| Característica | DV | OV | EV |
|---------|-----|-----|-----|
| Cifra datos | Sí | Sí | Sí |
| Verifica control de dominio | Sí | Sí | Sí |
| Verifica que la organización existe | No | Sí | Sí |
| Verificación legal extensa | No | No | Sí |
| Tiempo de emisión | Minutos | Días | Días a semanas |
| Costo típico | Gratis-$50 | $50-200 | $100-500+ |

### Qué buscar como usuario

Aquí está la guía práctica para mantenerte seguro:

**Siempre verifica HTTPS**

Antes de introducir cualquier información sensible, confirma que ves "https://" al inicio de la dirección. Busca el icono de candado.

**Verifica que estás en el dominio correcto**

El ataque más común no es romper el cifrado. Es engañarte para que visites el sitio web equivocado. Siempre verifica el nombre de dominio cuidadosamente:
- yourbank.com (correcto)
- your-bank.com (sospechoso)
- yourbank.secure-login.com (incorrecto: estás en secure-login.com)

**Presta atención a las advertencias de certificado**

Si tu navegador muestra alguna advertencia de certificado, detente. No procedas a menos que comprendas completamente por qué apareció la advertencia. Las advertencias comunes incluyen:

- "Tu conexión no es privada"
- "El certificado de seguridad de este sitio no es confiable"
- "El certificado de seguridad ha expirado"

**Conoce la diferencia entre candado y confianza**

Un candado significa que tu conexión está cifrada. No significa que el sitio web sea legítimo. Los sitios fraudulentos también pueden tener certificados válidos. Siempre verifica que estás en el sitio web que pretendías visitar.

### Resumen: tu lista de verificación HTTPS

Antes de introducir contraseñas, información de pago o datos personales:

1. Confirma que la dirección comienza con https://
2. Busca el icono de candado
3. Verifica dos veces que estás en el dominio correcto
4. Nunca ignores las advertencias de certificado
5. Recuerda: HTTPS significa conexión segura, no sitio web confiable

Comprender HTTPS y los certificados te da una habilidad crucial para navegar internet de manera segura. Ahora sabes qué sucede detrás de escena cuando ves ese icono de candado, y más importante aún, sabes qué buscar antes de confiar tus información a un sitio web.
