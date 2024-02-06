# Grapesjs Calendar Component

[JSFIDDLE DEMO](https://jsfiddle.net/redoC_A2k/1Lzp2xuy/6/)
[CODEPEN DEMO](https://codepen.io/afshan-ahmed-khan/pen/BabPByb)

### HTML

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="https://unpkg.com/grapesjs-calendar-component"></script>

<div id="gjs"></div>
```

### JS

```js
const editor = grapesjs.init({
  container: "#gjs",
  height: "100%",
  fromElement: true,
  storageManager: false,
  plugins: ["grapesjs-calendar-component"],
  // very important to add below script to canvas
  canvas: {
    scripts: [
      "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js",
    ],
  },
});
```

### CSS

```css
body,
html {
  margin: 0;
  height: 100%;
}
```

## Summary

- Plugin name: `grapesjs-calendar-component`
- Components
  - `component-id-1`
  - `component-id-2`
  - ...
- Blocks
  - `block-id-1`
  - `block-id-2`
  - ...

## Options

| Option    | Description        | Default         |
| --------- | ------------------ | --------------- |
| `option1` | Description option | `default value` |

## Download

- CDN
  - `https://unpkg.com/grapesjs-calendar-component`
- NPM
  - `npm i grapesjs-calendar-component`
- GIT
  - `git clone https://github.com/redoC-A2k/grapesjs-calendar-component.git`

## Usage

Directly in the browser

```html
<link
  href="https://unpkg.com/grapesjs/dist/css/grapes.min.css"
  rel="stylesheet"
/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-calendar-component.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    container: "#gjs",
    // ...
    plugins: ["grapesjs-calendar-component"],
    pluginsOpts: {
      "grapesjs-calendar-component": {
        /* options */
      },
    },
    // very important to add below script to canvas
    canvas: {
      scripts: [
        "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js",
      ],
    },
  });
</script>
```

Modern javascript

```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-calendar-component';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
    // very important to add below script to canvas
  canvas: {
    scripts: [
      "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.9/index.global.min.js",
    ],
  },
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/redoC-A2k/grapesjs-calendar-component.git
$ cd grapesjs-calendar-component
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```

## License

MIT
