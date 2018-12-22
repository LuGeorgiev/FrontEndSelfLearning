function doSomethingSlow() {
    const count = 10;
    return new Promise(function(resolve, reject) {
        resolve(count);
        //reject("ERROR");
    });
}

doSomethingSlow()
    .then(function(data) {
        return "pesho"; //every NEXT THEN receives returned DATA
    })
    .then(function(data) { // this way we have access to PROMISED function
        console.log(data);
    })
    .catch(function(err) {
        console.log("in error" + err);
    });

console.log('after func')

$.ajax({
    url: "https://api.pesho.com"
}).then((date) => {
    //...
}).catch((err) => {
    //...
});

function evenSlowerFunction() {
    doSomethingSlow()
        .then(function(data) {
            return "pesho"; //every NEXT THEN receives returned DATA
        })
        .then(function(data) { // this way we have access to PROMISED function
            return data;
        })
        .catch(function(err) {
            console.log("in error" + err);
        });
}

evenSlowerFunction()
    .then((data) => {
        console.log(data);
    });