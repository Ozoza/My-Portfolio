export default function recursion(startNum, endNum){
    if(endNum <= startNum){
        console.log([]);
        return [];
    }
    else if (endNum > startNum){
        let countNumber = recursion(startNum, endNum - 1);
        countNumber.unshift(endNum);
        console.log(countNumber);
        return countNumber;
    }
    console.log([startNum]);
    //return [startNum];
}