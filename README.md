# LunarCRUSHed
Generate API keys for LunarCRUSH.

## Disclaimer

### I take no responsibility if you get IP banned for the LunarCRUSH API for using this. Use at your own risk.

--- 

## Python

View on [PyPI](https://pypi.org/project/lunarcrushed/) or on the [`python`](./tree/python) branch.

### Install

```sh
pip install lunarcrushed
```

### Example

```py
from lunarcrushed import getKey

print(getKey())
```

## NodeJS

View on [npm](https://www.npmjs.com/package/lunarcrushed) or on the [`node`](./tree/node) branch.

### Install

```sh
npm install lunarcrushed
```

### Example

```js
import { getKey } from "lunarcrushed";

(async () => console.log(getKey()))();
```
