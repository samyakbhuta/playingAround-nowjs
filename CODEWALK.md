
To let you walk through the code and understand it line by line.
----------------------------------------------------------------

We are first take [app.js](https://github.com/samyakbhuta/playingAround-nowjs)

```js
var express = require("express");
```
Loads the express module. [See] (https://github.com/samyakbhuta/playingAround-nowjs#L1)


```js
var httpServer = express.createServer();
```
Create a server instance using ```createServer``` method provided by ```express``` module. It is named/refered as ```httpServer``` henceforth. 

