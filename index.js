// Your code here

class Polygon {
    constructor(arr) {
        this.arr = arr
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        let sum = 0
        for (let number of this.arr) {
            sum += number
        }
        return sum;
    }
}

class Triangle extends Polygon {
    constructor(arr) {
        super(arr)
    }

    get isValid() {
        if(this.arr.length === 3) {
            let pair1 = this.arr[0] + this.arr[1]
            let pair2 = this.arr[0] + this.arr[2]
            let pair3 = this.arr[1] + this.arr[2]
            if(pair1 > this.arr[2] && pair2 > this.arr[1] && pair3 > this.arr[0]){
                return true
            }
            else {
                return false
            }
            
        }
    }
}


class Square extends Polygon {
    constructor(arr) {
        super(arr)
    }

    get isValid() {
        if(this.arr.length === 4) {
            if(this.arr[0] === this.arr[1] && this.arr[1] === this.arr[2] && this.arr[2] === this.arr[3]) {
                return true
            }
            else {
                return false
            }
        }
    }

    get area() {
        return this.arr[0]**2
    }
}

let newSquare = new Square([5,5,5,5])
console.log(newSquare.isValid)