const url = 'http://telerikacademy.com/Courses/Courses/Details/239';
let doubleSlashIndex = url.indexOf('://'),
    singleSlashIndex = url.indexOf('/', doubleSlashIndex + 3);

console.log('protocol: ' + url.substring(0, doubleSlashIndex));
console.log('server: ' + url.substring(doubleSlashIndex + 3, singleSlashIndex));
console.log('resource: ' + url.substring(singleSlashIndex));