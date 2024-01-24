# Grapesjs Calendar Component

[DEMO](##)

> **Provide a live demo of your plugin**
> For a better user engagement create a simple live demo by using services like [JSFiddle](https://jsfiddle.net) [CodeSandbox](https://codesandbox.io) [CodePen](https://codepen.io) and link it here in your README (attaching a screenshot/gif will also be a plus).
> To help you in this process here below you will find the necessary HTML/CSS/JS, so it just a matter of copy-pasting on some of those services. After that delete this part and update the link above

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
