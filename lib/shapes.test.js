const { Circle, Triangle, Square } = require('./shapes.js');

test('Triangle render method should return SVG', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="0,200 300,200 150,0" fill="blue"></polygon>');
});

test('Circle render method should return SVG', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="100" fill="red"></circle>');
});

test('Square render method should return SVG', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="50" height="200" width="200" fill="green"></rect>');
});