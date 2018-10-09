/*jshint esversion:6*/

function solve(lines) {;
    const regex = /w{3}\.[A-Za-z-0-9]+(\.([A-Za-z])+){1,}/g;
    lines.forEach(element => {
        let match = regex.exec(element);

        while (match) {
            console.log(match[0]);
            match = regex.exec(element);
        }
    });

}

solve(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko '
]);