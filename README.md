# vue-offcanvas

> A simple offcanvas sidebar for Vue.js (compatible with Vue 2.x)

## Links
- [Demo](https://jsbin.com/lihagap/edit?html,output)

It's built as UMD module, so you can use it in any way you want.

Directly in an HTML page (it will be available as global variables VueOffcanvas):

``` html
<script type="text/javascript" src="http://cdn.rawgit.com/sunabozu/vue-offcanvas/master/index.js"></script>
```

Or by installing...

```
npm i vue-offcanvas --save
```

...and then importing it:

``` javascript
import VueOffcanvas from 'vue-offcanvas'

// or

const VueOffcanvas = require('vue-offcanvas')
```

## Usage

In your component:
``` javascript
export default {
  data() {
    return {
      show: false
    }
  },

  components: {
    VueOffcanvas,
  },

  ...
}
```

In your template:
``` html
<button @click="show = true">Toggle</button>

<vue-offcanvas v-model="show" :width="300" :duration=".3" effect="ease-in-out">
  the content of your sidebar goes here
</vue-offcanvas>
```

**WARNING**: do not use the `style` attribute on the root element (`vue-offcanvas` in this case). Use css classes instead.

## Properties

Property | Default | Description
-------- | ------ | -----------
width | 270 | Width of the sidebar
duration | 0.2 | Duration of the slide-in/slide-out animation
effect | linear| A timing function for the `transition-timing-function` css property; you can also use the custom `bounce` value
close-on-external-click | true | Should the sidebar be closed on a click outside it?
close-on-esc | true | Should the sidebar be closed on an Esc key?


