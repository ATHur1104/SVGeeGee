// shapes.js
class Shape {
    constructor() {
      this.svg2line = '';
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      return this.svg2line.replace('$color', this.color);
    }
  }
  
  class Circle extends Shape {
    constructor(bgColor) {
      super();
      this.svg2line = '<circle cx="50%" cy="50%" r="100" fill="$color"></circle>';
      this.setColor(bgColor);
    }
  }
  
  class Triangle extends Shape {
    constructor(bgColor) {
      super();
      this.svg2line = '<polygon points="0,200 300,200 150,0" fill="$color"></polygon>';
      this.setColor(bgColor);
    }
  }
  
  class Square extends Shape {
    constructor(bgColor) {
      super();
      this.svg2line = '<rect x="50" height="200" width="200" fill="$color"></rect>';
      this.setColor(bgColor);
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  