# Attendance Manager

Sistema de asistencia inteligente desarrollado con **Vue 3**, **Vue Router**, **Vuex** y **Tailwind CSS**.

## Descripción

**Attendance Manager** es una aplicación frontend para la gestión y visualización de asistencia. Está pensada para facilitar el registro, seguimiento y consulta de datos relacionados con el control de asistencia mediante una interfaz moderna, responsive y fácil de usar.

## Características

- Interfaz moderna y responsive
- Gestión y visualización de asistencia
- Consumo de API con Axios
- Gráficas e indicadores con Chart.js
- Navegación con Vue Router
- Estado global administrado con Vuex
- Estilos personalizados con Tailwind CSS
- Integración con Socket.IO para actualizaciones en vivo
- Manejo de fechas con Day.js
- Formateo numérico con Numeral.js

## Tecnologías utilizadas

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Chart.js](https://www.chartjs.org/)
- [Socket.IO Client](https://socket.io/docs/v4/client-api/)
- [Day.js](https://day.js.org/)
- [Numeral.js](http://numeraljs.com/)

## Requisitos

- Node.js `>=10.16.0 <=16.20.2`
- Yarn o npm

## Instalación

```bash
git clone https://github.com/SManriqueDev/attendance-manager.git
cd attendance-manager
yarn install
```

## Desarrollo local

```bash
yarn serve
```

La aplicación estará disponible normalmente en:

```bash
http://localhost:8080
```

## Compilación para producción

```bash
yarn build
```

## Compilación local

```bash
yarn build:local
```

## Compilación para GitHub Pages

```bash
yarn build:gh-pages
```

## Despliegue

```bash
yarn deploy
```

## Lint y formato

```bash
yarn lint
yarn format
```

## Estructura del proyecto

```bash
src/
├── assets/
├── components/
├── router/
├── store/
├── views/
└── ...
public/
```

## Estado del proyecto

Proyecto en desarrollo orientado a la gestión de asistencia con enfoque en una interfaz intuitiva y buen rendimiento.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).
