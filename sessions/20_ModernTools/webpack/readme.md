## What is Webpack?
Webpack is a popular module bundler and can run many other critical tasks as well. 

**Things Babel Can do**
- Module Bundler
- Can manage Babel
- Can run a local development server


## Installing Webpack
Make sure that node is installed. 
```
  npm install webpack webpack-cli --save-dev

```

## Setting up Webpack

1. Create a webpack.config.js and set up the config settings. 

```
  module.exports = {
  };

```

This config uses JS that can only be run with node.js on a computer when we run the webpack command in our terminal. 


### Webpack config settings
Inside of the config file we need to set two main properties, the entry and output.
```
  const path = require('path');

  module.exports = {
    entry: '/relative path to entry point file',
    output:'';
    output: {
    path: path.resolve(__dirname, 'absolute/path'),
      filename: 'bundle.js'
    }
  };
```


### Running a Webpack Dev Server


```
  npm install webpack-dev-server@3.2.1

```

Configuring Dev Server

```
  devServer: {
    contentBase: path.resolve(__dirname, '<project folder>'),
    publicPath: '/assets/'
  }
```
By default webpack-dev-server creates a virtual bundle file. It does not actually bundle and create the file for you. 

### Adding Babel to webpack
  loaders are like tasks that can run with webpack when they are included in a webpack config
```
  npm install babel-loader --save-dev
```

Setting a Module property

```
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use:{
        loader:'babel-loader',
        options:{
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
```
Create a module property object and then create a 'rules' array property that declares an array of objects that act as rules.
  - test --> uses a regular expression to describe which files will be run through the loader
  - exclude --> a regex that tells the loader what to exlcude
  - use --> tells webpack which loader to use on this file