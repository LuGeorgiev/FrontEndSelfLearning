const input = `<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course.
 Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>`;

//RESULT: <p>Please visit [our site](http://academy.telerik.com) to choose a training course. 
//Also visit [our forum](www.devbg.org) to discuss the courses.</p>

String.prototype.replaceHRef = function() {
    let startHRefIndex = 0,
        closeHRefIndex = 0,
        strResult = [];

    startHRefIndex = this.indexOf('<a href=', startHRefIndex);
    closeHRefIndex = this.indexOf('">', startHRefIndex + 1);

    if (startHRefIndex === -1) {
        return this;
    }

    strResult.push(this.substring(0, startHRefIndex));
    strResult.push('[' + this.substring(closeHRefIndex + 2, this.length - 1) + '](');
    strResult.push(this.substring(startHRefIndex + 7, closeHRefIndex) + ')');

    return strResult.join('').toString();
}
let splitString = input.split('</a>')
    .map(x => x.replaceHRef())
    .join('');;
console.log(splitString);