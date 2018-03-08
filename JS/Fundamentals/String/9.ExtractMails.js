const input = `kl@us klir@byo.co.uk koaja
 ows 1123 klyu.er_23@gmail.com askoad kjue@klu.bg`;

String.prototype.extractEmails = function() {
    let eMails = [],
        atIndex = 0,
        begIndex = 0,
        dotIndex = 0,
        endIndex = 0;
    atIndex = this.indexOf('@', atIndex);
    while (atIndex !== -1) {
        begIndex = this.lastIndexOf(' ', atIndex);
        endIndex = this.indexOf(' ', atIndex);
        dotIndex = this.indexOf('.', atIndex);

        if (endIndex === -1 && atIndex + 2 < dotIndex && dotIndex + 2 < this.length) {
            endIndex = this.length;
        }
        if (begIndex === -1 && (atIndex > 4 && atIndex < 15)) {
            begIndex = 0;
        }
        if (atIndex >= 3 && (dotIndex < atIndex + 8) && endIndex < dotIndex + 8) {
            eMails.push(this.substring(begIndex + 1, endIndex));
        }

        atIndex = this.indexOf('@', atIndex + 1);
    }
    return eMails.join(', ');
}

console.log(input.extractEmails());