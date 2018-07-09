# axios-timing
Axios plugin to measure the actual time it takes for a request to complete

## Installation
You can install this plugin using **Yarn** or **NPM**
```bash
yarn add axios-timing
# - or - 
npm install axios-timing
```

## Basic Usage
The example below will log all request times out to the console...
```js
import axios
import axiosTiming from './axios-timing'

axiosTiming(axios, console.log)
```

### Axios Instance
If you are using an axios instance, you should pass this through as the first argument
```js
import axios
import axiosTiming from './axios-timing'

const instance = axios.create()
axiosTiming(instance, console.log)
```

### Custom Callback
You can pass through a custom callback as your second arguement
```js
import axios
import axiosTiming from './axios-timing'

axiosTiming(axios, timeInMs => console.log(`${timeInMs.toFixed()}ms`))
```
