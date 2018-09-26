/*jshint esversion:6*/

function createTable(n) {
    let table = '<table border="1"> \n';

    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 && j === 0) {
                table += '\t<tr><th>x</th>';
            } else if (i === 0 && j !== n) {
                table += `<th>${j}</th>`;
            } else if (i === 0 && j === n) {
                table += `<th>${j}</th></tr>\n`;
            } else if (j === 0 && i !== 0) {
                table += `\t<tr><th>${i}</th>`;
            } else if (j === n && i !== 0) {
                table += `<td>${j*i}</td></tr>\n`;
            } else {
                table += `<td>${i*j}</td>`;
            }
        }
    }
    table += '\n</table>';

    console.log(table);
}

createTable(3);