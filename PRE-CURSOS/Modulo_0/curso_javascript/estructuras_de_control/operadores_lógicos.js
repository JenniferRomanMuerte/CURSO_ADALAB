// Operador AND (&&)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// Operador OR (||)
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// Operador NOT (!)
console.log(!true); // false
console.log(!false); // true
console.log(!(5 > 3)); // false

const a = 10;
const b = 20;
const c = "10";

// Comparaciones
if(a < b && c === "10") {
    console.log("a es menor que b y c es igual a '10'");
}
if(a > b || c === "10") {
    console.log("a es mayor que b o c es igual a '10'");
}
if(!(a === b)) {
    console.log("a no es igual a b");
}