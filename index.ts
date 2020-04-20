
// enforce object shape with an interface
interface Person {
    first: string;
    last: string;
    [key: string]: any
}

const person: Person = {
    first: 'Jim',
    last: 'Op'
}

const person2: Person = {
    first: 'Jim',
    last: 'Op',
    fast: true
}

function pow(x:number, y:number): string{
    return Math.pow(x, y).toString();
}

pow(5, 10)

// Arrays

const arr: number[] = []

arr.push(1)
arr.push(23)
arr.push(4)

type MyList = [number?, string?, boolean?]
const tup: MyList = []

tup.push(1)
tup.push('22')
tup.push(true)

// Generics

class Observable<T> {
    constructor(public value: T) {}
}

let x: Observable<number>;

let y: Observable<Person>;

// implicit type of number
let z = new Observable(23)


