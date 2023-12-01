class Shape {
  constructor(setColor, textColor, text) {
    this.setColor = setColor;
    this.textColor = textColor;
    this.text = text;
  }
}

class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.setColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

class Square extends Shape {
  render() {
    return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${this.setColor}" /><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}" font-size="60" font-family="Arial">${this.text}</text>
</svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" r="80" fill="${this.setColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
  }
}

module.exports = { Circle, Triangle, Square };
