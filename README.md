# HTTPStatus

HTTPStatus is a lean lookup table to match a given status code to its status text.

What make it different than others is that it uses string as a lookup key.

### Installation
```shell
npm install -g httpstatus-str
```

```shell
npm install httpstatus-str
```

### Node.js
```javascript
const HTTPStatus = require('httpstatus-str');

console.log(HTTPStatus["200"]);
```

### Command Line
```shell
> httpstatus 200
OK
```

### Reference
[Wikipedia: List of HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
