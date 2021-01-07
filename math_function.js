const addition = (x,y) => x + y;
const subtraction = (x,y) => {
    if(x > y){
        return x - y;
    }else {
        return y - x;
    }

};
const division = (x,y) => {
    if(x > y){
        return x/y;
    }
    return y/x;
};
const multiplication = (x,y) => x * y;

export {
    addition,
    subtraction,
    division,
    multiplication
}

