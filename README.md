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

The example is equivalent of code below, but it is much easier to follow:
``` javascript
function querySomethingPromise(id) {
    return new Promise(function (resolve, reject) {
        activeRecord.findSomethingById(id)
            .then(function (err, something) {
                if (err)
                    reject(err);
                if (!something)
                    reject("Something not found");
                else
                    ChechSomethingInvariantsPromise(something)
                        .then(function (err) {
                            if (err)
                                reject(err);
                            else
                                resolve(something);
                        });
            })
    });
}
```
# yield keyword means something like "when the promise will be resolved get back to this piece of code and continue execution"
# you can throw an exception and the exception will break execution flow immediately. If an exception have happened then result promise will be rejected.
# all errors which could happened during promise execution will be handled for you, you don't need to check  if (err) reject(err); every time
# your unit tests would become much easier to write, support and read
