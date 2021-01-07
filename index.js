import * as mathFunctions from "./math_function.js";
import recursion from "./string_functions.js";

console.log(mathFunctions.addition(2,3)); 
console.log(mathFunctions.division(20, 50));
console.log(mathFunctions.multiplication(3, 5));
console.log(mathFunctions.subtraction(20, 5));

recursion(1, 8);

class Human {
    constructor(gender){
        this._gender = gender;
    }
    get gender(){
        return this._gender;
    }
    set gender(updatedGender){
        this._gender = updatedGender;
    }
}

const zaiha = new Human("female");
console.log(zaiha)
console.log(zaiha.gender)
zaiha.gender = "Mother";
console.log(zaiha.gender);