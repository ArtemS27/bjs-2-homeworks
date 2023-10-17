//task 1
function parseCount(number) {
    let result = Number.parseFloat(number);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    } else {
        return result;
    }
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

//task 2
class Triangle {
    constructor (side_A, side_B, side_C) {
        if(side_A + side_B < side_C || side_A + side_C < side_B || side_B + side_C < side_A) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.side_A = side_A;
        this.side_B = side_B;
        this.side_C = side_C;
    }

    get perimeter() {
        return this.side_A + this.side_B + this.side_C;
    }

    get area() {
        const halfOfPerimeter = this.perimeter / 2;
        return +Math.sqrt(halfOfPerimeter*(halfOfPerimeter - this.side_A) * (halfOfPerimeter - this.side_B) * (halfOfPerimeter - this.side_C)).toFixed(3);
    } 
}

function getTriangle(side_A, side_B, side_C) {
    let errorMessage = "Ошибка! Треугольник не существует";
    try {
        let _triangle = new Triangle (side_A, side_B, side_C);
        return _triangle;
    } catch (error) {
        return {
            get perimeter() {
                return errorMessage;
            },
            get area() {
                return errorMessage;
            }
        }
    }    
}