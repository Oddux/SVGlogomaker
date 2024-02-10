const { Circle } = require("./shapes");
const { Square } = require("./shapes");
const { Triangle } = require("./shapes");

describe("Tests for Circle Class", () => {
  // create a test that will check if the setColor is being passed from Parent to Child
  test("Will this set the color of my circle", () => {
    const expectedColor = "red";

    const circle = new Circle(expectedColor);

    expect(circle.setColor).toEqual(expectedColor);
  });

  test("Will this set the color of my text", () => {
    const expectedText = "blue";
    const circle = new Circle('red', expectedText);
    expect(circle.textColor).toEqual(expectedText);
  });

  test("will this return a circle", () =>{
    const expectedReturn = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">Arg</text></svg>`

    const circle = new Circle('red', 'blue', 'Arg');
    expect(circle.render()).toEqual(expectedReturn);
  });
});

describe("Tests for Square Class", () => {
    test("Will this set the color of my square", () => {
      const expectedColor = "red";
  
      const square = new Square(expectedColor);
  
      expect(square.setColor).toEqual(expectedColor);
    });
  
    test("Will this set the color of my text", () => {
      const expectedText = "blue";
      const square = new Square('red', expectedText);
      expect(square.textColor).toEqual(expectedText);
    });
  
    test("will this return a square", () =>{
      const expectedReturn = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="red" /><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="blue" font-size="60" font-family="Arial">Arg</text></svg>`

      const square = new Square('red', 'blue', 'Arg');
      expect(square.render()).toEqual(expectedReturn);
    });
  });

  describe("Tests for Triangle Class", () => {
    test("Will this set the color of my triangle", () => {
      const expectedColor = "red";
  
      const triangle = new Triangle(expectedColor);
  
      expect(triangle.setColor).toEqual(expectedColor);
    });
  
    test("Will this set the color of my text", () => {
      const expectedText = "blue";
      const triangle = new Triangle('red', expectedText);
      expect(triangle.textColor).toEqual(expectedText);
    });
  
    test("will this return a triangle", () =>{
      const expectedReturn = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" r="80" fill="red" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">Arg</text></svg>`
      
      const triangle = new Triangle('red', 'blue', 'Arg');
      expect(triangle.render()).toEqual(expectedReturn);
    });
  });