"use strict";
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return shape.radius;
    }
}
// Never type in typescript helps us to narrow down the type of the variable
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.side ** 2;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
