const html = ['<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
];

let tempStr = html.map(x => x.trim()),
    output = [];

for (const line of tempStr) {
    let smallerIndex = 0,
        biggerIndex = 0;

    while (true) {
        biggerIndex = line.indexOf('>', smallerIndex);
        smallerIndex = line.indexOf('<', biggerIndex);
        if (smallerIndex > biggerIndex) {
            output.push(line.substring(biggerIndex + 1, smallerIndex));
            break;
        } else if (biggerIndex === -1 && smallerIndex === -1) {
            output.push(line);
            break;
        } else if (biggerIndex + 1 === line.length) {
            break;
        } else if (biggerIndex > 0 && smallerIndex === -1 && biggerIndex < line.length) {
            output.push(line.substring(biggerIndex + 1));
            break;
        }
    }
}

console.log(output.join(''));