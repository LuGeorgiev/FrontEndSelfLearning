/*jshint esversion:6*/
function resolveAfterTwoSeconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolve Two Sec');
        }, 2000);
    });
}

function resolveAfterOneSeconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolve One Sec');
        }, 1000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfterTwoSeconds();
    console.log(result);
    //expected output: 'resolved'
}

const concurentStart = async function() {
    console.log(new Date());

    let sec2 = resolveAfterTwoSeconds();
    let sec1 = resolveAfterOneSeconds();
    await sec2;
    await sec1;
    console.log(new Date());
}

promiseAllStart = function() {
    console.log(new Date());

    Promise.all([resolveAfterTwoSeconds(), resolveAfterOneSeconds()])
        .then(function(data) {
            console.log(new Date());
        });
}

const paralelStart = function() {
    console.log(new Date());

    resolveAfterTwoSeconds()
        .then((date) => { console.log(new Date()) });
    resolveAfterOneSeconds()
        .then((date) => { console.log(new Date()) });
}