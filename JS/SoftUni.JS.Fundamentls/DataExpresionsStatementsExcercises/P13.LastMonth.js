/*jshint esversion:6*/

function lastMonth([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);
    let date = new Date(year, month - 1, 0);
    let days = date.getDate();

    console.log(days);
}


lastMonth([17, 1, 2002]);
lastMonth([13, 12, 2004]);