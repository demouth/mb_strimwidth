# mb_strimwidth


## Installation

Using npm:
```sh
npm install @demouth/mb_strimwidth
```

Using unpkg CDN:
```html
<script src="https://unpkg.com/@demouth/mb_strimwidth@1.0.0/dist/mb_strimwidth.min.js"></script>
```


## Examples

This package has the same result as `mb_strimwidth()` in PHP.

ES Module:
```js
import { mb_strimwidth } from "@demouth/mb_strimwidth";
console.log(mb_strimwidth('𩸽定食が食べたい😆', 0, 14, '...')); // 𩸽定食が食...
```

CommonJS:
```js
const { mb_strimwidth } = require("@demouth/mb_strimwidth");
console.log(mb_strimwidth('𩸽定食が食べたい😆', 0, 14, '...')); // 𩸽定食が食...
```

Browser:
```html
<script src="https://unpkg.com/@demouth/mb_strimwidth@1.0.0/dist/mb_strimwidth.min.js"></script>
<script>
  console.log(mb_strimwidth('𩸽定食が食べたい😆', 0, 14, '...')); // 𩸽定食が食...
</script>
```

Reference(PHP 7.3.28):
```php
var_dump(mb_strimwidth('𩸽定食が食べたい😆', 0, 14, '...')); // string(19) "𩸽定食が食..."
```

https://www.php.net/manual/en/function.mb-strimwidth.php
