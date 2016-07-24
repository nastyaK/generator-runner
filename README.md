# generator-runner
Run promises promises in a synchronous manner unitizing generators

#Installation
```
npm install run-generator
```

#API
```
generatorRunner = require('generator-runner')
```

#Example
```
function querySomethingPromise(id) {
    return generatorRunner.run(function *() {
        var something = yield activeREcord.findSomethingById(id);
        if (!something)
            throw "Something not found";
        yield ChechSomethingInvariantsPromise(something);  
        return something;
    });
}
```
