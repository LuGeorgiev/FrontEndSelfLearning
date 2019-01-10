// let data = new Promise(function(resolve, reject) {
//     let data;
//     $.get("https//api.github.com/users/lugeorgiev", function(response) {
//         data = response;
//         resolve(data);
//     });
// });

// let fakeData = new Promise(function(resolve, reject) {
//     reject("УЖАС!");
// });

function getAsync(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = () => {
            if (xhr.status < 400) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.responseText);
            }
        };
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}