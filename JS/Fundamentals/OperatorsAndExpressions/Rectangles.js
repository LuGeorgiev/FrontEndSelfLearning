function solve(args) {

    const height = args[1],
        width = args[0];

    const area = height * width,
        perimeter = 2 * height + 2 * width;

    console.log(area.toFixed(2) + ' ' + perimeter.toFixed(2));
}