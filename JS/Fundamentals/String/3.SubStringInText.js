const searched = 'in';
let text = 'We are LivIng in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';

function timesInText(serchFor, searchIn) {
    const text = searchIn.toLowerCase(),
        seeked = serchFor.toLowerCase();
    let ind = 0,
        count = 0;
    while (ind !== -1) {
        ind = text.indexOf(seeked, ind);
        if (ind > 0) {
            ind++;
            count++;
        }
    }
    return count;
}

console.log(timesInText(searched, text));