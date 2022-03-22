# server-deployment-practice

- [Heroku Dev Deploy](https://brady-server-deploy-dev.herokuapp.com/data)
- [Heroku Prod Deploy](https://brady-server-deploy-prod.herokuapp.com/data)
- [GitHub Actions](https://github.com/bradyjcamp/server-deployment-practice/actions)
- [Pull Requests](https://github.com/bradyjcamp/server-deployment-practice/pull/1)

## Node Ecosystem, TDD, CI/CD

Application development in the Node.js ecosystem, including the writing of modular code using CommonJS modules, writing tests to assert code quality, setting up and working in a "Continuous Integration"  environment (Github Actions).

## Learning Objectives

### Describe and Define

- Node is a runtime environment for JavaScript
  - Typically the runtime environment we are used to is the Browser.
  - A **runtime environment** is a place where we feed JavaScript.
    - Parse and execute our JS.
      - V8 engine - run in **Google Chrome** and **node**
    - Responsible for providing tools and global variables that code can *use*.
  - `require()` - function that node provides in our runtime environment.
- `process` is nodes object version globally defined where as `document` is the browsers or windows object globally defined.
- Allows us to export and import **modules**
  - [Repl Example](https://replit.com/@BradyCamp2/401-Node#index.js)

#### Execute

- Setup a Node.js Package using npm
- Create CommonJS modules
- Create a simple express server
- See passing tests via GitHub actions (CI)
- Deploy to Heroku using CD

## Notes

### Importing and Exporting Modules

If one module **exports** a function or an object ...

```javascript
// person.js
const person = {};

person.walk = function() {
  return 'walking';
}

module.exports = person;
```

Another module can **import** and use that function or object

```javascript
const human = require('./person.js'))
console.log( human.walk() );  // prints 'walking'
```


