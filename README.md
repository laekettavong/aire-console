# aire-console

Light-weight native `console` object wrapper module for grouping and enumerating outputs.

## Installation

Using npm:
```
$ npm install --save aire-console
```

Using yarn:
```
$ yarn add aire-console
```

## Usage

Javascript
``` js
const Console = require('aire-console').Console;
```

Typescript
``` ts
import { Console } from './aire-console';
```

Red
``` js
Console.red().log('This is the red ouput', 'One', 'Two', 'Three');
Console.red().bold('This is the red ouput', 'One', 'Two', 'Three');
Console.red().setDateFormat('MMMM Do YYYY - h:mm:ss a'); // output grouping date format - https://momentjs.com
Console.red().italic('This is the red ouput', 'One', 'Two', 'Three');
Console.red().underline('This is the red ouput', 'One', 'Two', 'Three');
Console.red().fill(null, 'One', 'Two', 'Three');
```
<img src="images/red.png" width="90">
![](images/red.png)


Magenta
``` js
Console.magenta().log('This is the red ouput', 'One', 'Two', 'Three');
Console.magenta().bold('This is the red ouput', 'One', 'Two', 'Three');
Console.magenta().setDateFormat('llll'); // output grouping date format - https://momentjs.com
Console.magenta().italic('This is the red ouput', 'One', 'Two', 'Three');
Console.magenta().underline('This is the red ouput', 'One', 'Two', 'Three');
Console.magenta().fill(null, 'One', 'Two', 'Three');

```
<img src="images/magenta.png" width="80">
![](images/magenta.png)

Yellow
``` js
Console.yellow().log('This is the red ouput', 'One', 'Two', 'Three');
Console.yellow().bold('This is the red ouput', 'One', 'Two', 'Three');
Console.yellow().setDateFormat('MMM Do YY'); // output grouping date format - https://momentjs.com
Console.yellow().italic('This is the red ouput', 'One', 'Two', 'Three');
Console.yellow().underline('This is the red ouput', 'One', 'Two', 'Three');
Console.yellow().fill(null, 'One', 'Two', 'Three');

```
<img src="images/yellow.png" width="90">
![](images/yellow.png)