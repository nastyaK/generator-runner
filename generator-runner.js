module.exports.run = function (genFn) {
    return new Promise(function (resolve, reject) {
        var fn = genFn();
        var next = function (gen) {
            var value = gen.value;
            if (gen.done) {
                resolve(value);
                return;
            }
            value.then(function (result) {
                try {
                    next(fn.next(result));
                } catch (ex) {
                    reject(ex);
                }
            }, function (err) {
                reject(err);
            });
        };
        next(fn.next());
    });
};