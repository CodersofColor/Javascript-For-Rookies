## What is Babel

Babel is a JS compiler that converts modern JS into browser compatible JS code. 

Checkout [Babel](https://babeljs.io/repl)


## Install Babel
```
  npm install --save-dev @babel/core @babel/cli
```
Install Presets
```
  npm install @babel/preset-env --save-dev
```

## Run a manual Babel Command
### Mac

```
  node_modules/.bin/babel test.js -o after.js
```

### Windows
```
  D:\dir\dir\ node_modules/.bin/babel test.js -o after.js
```
On windows you have to use the entire path