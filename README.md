# generator-runner
Run promises in a synchronous manner utilizing generators.
If you are tired of callback hell and want to focus more on your app logic then on braces pyramid, you are welcome use this tiny lib. The lib is utilizing JavaScript ES6 generator function

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

Here is a very good description of promises+generators https://www.promisejs.org/generators/
#Installation
```
npm install run-generator
```

#API
```
generatorRunner = require('generator-runner')
```

#Example
``` javascript
function querySomethingPromise(id) {
    return generatorRunner.run(function *() {
    
        var something = yield activeRecord.findSomethingById(id);
        if (!something)
            throw "Something not found";
        yield ChechSomethingInvariantsPromise(something);  
        return something;
        
    });
}
```
