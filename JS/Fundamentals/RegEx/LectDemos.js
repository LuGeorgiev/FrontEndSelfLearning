let string = '123 7c 7r X8'; // only digit space and hex or dec

//console.log(string.replace(/[^0-9a-fA-F ]/g, '')); // this way 7r and X8 will become only 7 if we want to erease 7r also:
console.log(string.replace(/\S*[^0-9a-fA-F ]\S*/g, '') // NOT Space, afrewards unvalid symbols, then NOt Space again
    .trim()
    .replace(/ +/, ' ')); // remove spaces


//Print the first word on each line which contains DIGIT
let str = `he following figures provide a visual illustration
of how the Fourier transform meas 6 ures whether a frequency is present in a par
ticular function. The depicted function
llates at 3 Hz (if t measures seconds) and tends quickly to 0. (The second factor in this equ
ation is an envelope function that shapes the continuous sinusoid into a short pulse. Its general form is a 
Gaussian function). This function was specially chosen to have a real Fourier tra
nsform that can easily be plotted. The first image contains its graph. In order to calculate f̂ (3) we must integr The second image shows the plot of the real and imaginary parts of this function. The real part of the integrand is almost always positive,
because when f (t) is negative, the real part of ) is negative as well. Because they oscillate at the same rate, when f (t) is positive, so is the real part of . The result is that when you integrate the real part of the integrand you get a relatively large number (in this case 
werqerwer 88   
dfg dgd ertert ertOn the other hand, when you try to measure`;

let words = str.match(/^.*[0-9].*$/gm) // find lines with digits in them
    .map(x => x.replace(/\s.*$/gm, '')); // match result is array have to join it
// everyting from first space till end of line is deleted (first word only stays)
console.log(words);