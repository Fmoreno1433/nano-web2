# Paddock · Tienda de réplicas de Fórmula 1

**Integrantes:** _Nombre Apellido (A)_ y _Nombre Apellido (B)_

## Descripción
Tienda web de varias páginas (inicio, catálogo, ficha de producto y contacto) con réplicas 1:18 de seis monoplazas de F1. Estilos escritos en SCSS modular con metodología BEM.

## Cómo compilar el SCSS
```bash
npm install -g sass
sass scss/main.scss css/main.css --style=compressed --no-source-map
# modo vigilancia
sass --watch scss/main.scss:css/main.css
```

## Estructura
`scss/main.scss` solo contiene `@use`. Parciales en `abstracts/` (variables, funciones, mixins), `base/`, `layout/` y `components/`.

## Dónde está cada requisito
- Mixins (5): `abstracts/_mixins.scss` (`respond` con `@content`, `container`, `button-variant`, `grid-auto`, `kerb-bar`)
- Función: `rem()` en `abstracts/_functions.scss`
- Mapa + `@each`: `$teams` en `_variables.scss` y modificadores `.card--ferrari`, etc. en `components/_card.scss`
- Módulos integrados: `sass:math` y `sass:map`

## Reparto de tareas
_Completad: quién hizo cada parte (variables, mixins, cabecera, pie, tarjeta, catálogo, ficha, botones, responsive)._

## Conflicto de fusión resuelto
_Contad aquí el conflicto, si lo ha habido._
