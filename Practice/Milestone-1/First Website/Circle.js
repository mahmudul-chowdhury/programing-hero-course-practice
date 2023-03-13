class Shape {
    constructor (x, y) {
      this.x = x;
      this.y = y;
    }
  
    move(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  class Circle extends Shape {
      constructor(radius, x, y) {
      super(radius);
      this.x = x;
      this.y = y;
  }
      getArea() {
          return(3.14159 * radius * radius);
      }
  }
  
  new Circle(0, 0, 2);

  
  