interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  side: number;
}
interface Rectangle {
  kind: 'rectangle';
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;
function getTrueShape(shape: Shape) {
  if (shape.kind === 'circle') {
    return shape.radius;
  }
}

// Never type in typescript helps us to narrow down the type of the variable

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    case 'rectangle':
      return shape.length * shape.width;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
