class Point2D {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    static get ZERO() {
        return new Point2D(0, 0);
    }

    static getDistance(pointA, pointB) {
        const sqrDistance =
            (pointA._x - pointB._x) * (pointA._x - pointB._x) +
            (pointA._y - pointB._y) * (pointA._y - pointB._y);
        return Math.sqrt(sqrDistance);
    }

    distanceTo(otherPoint) {
        return Point2D.getDistance(this, otherPoint);
    }
    get distanceToCenter() {
        return Point2D.getDistance(this, Point2D.ZERO);
    }

}
//to creat readonly properties
Object.defineProperty(Point2D, 'theAnswerOfEverything', {
    value: 42,
    writable: false
});

let p1 = new Point2D(3, 7);
let p2 = new Point2D(-6, 4);

console.log(Point2D.getDistance(p1, p2));
console.log(p1.distanceTo(p2));

console.log(p1.distanceToCenter);
console.log(p2.distanceToCenter);

console.log(Point2D.theAnswerOfEverything);
Point2D.theAnswerOfEverything = 4;
console.log(Point2D.theAnswerOfEverything); // CANNOT eb changed