# Nexo CRM — Frontend

Interfaz de un CRM comercial multiempresa para organizar contactos,
oportunidades y actividades. La primera versión presenta un dashboard completo
con datos ficticios tipados, preparado para conectarse a la API independiente.

## Stack

- Next.js 16 con App Router
- React 19
- TypeScript estricto
- Tailwind CSS 4

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Arquitectura inicial

- La página y sus componentes de presentación son Server Components.
- `src/data/demo-crm.ts` concentra los contratos y datos ficticios.
- La interfaz evita acciones simuladas: los flujos editables se incorporarán al
  conectarse con la API.
- El dashboard es responsive, navegable con teclado y respeta movimiento
  reducido.

## Próximas etapas

1. Navegación por módulos y detalle de contacto.
2. Formularios reales para contactos, oportunidades y actividades.
3. Autenticación y consumo de la API de Nexo CRM.
4. Pipeline interactivo con validación del backend.
5. Pruebas de navegador, datos de demo y despliegue público.
