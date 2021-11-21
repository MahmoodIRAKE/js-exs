const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(item => {
    console.log(item * 2);
});
console.log(arr.filter(item => item % 2 == 0));
let res = arr.map(item => {
    if (item % 2 !== 0) {
        return item;
    }
    return "even number"
});
console.log(res);