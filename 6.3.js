function longest(a, b) {
    let hist = new Array(26).fill(0);
    a.split('').forEach(element => {
        hist[element.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
    });
    b.split('').forEach(element => {
        hist[element.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
    });
    let res = '';
    hist.forEach((item, index) => {
        if (item === 1) {
            res += String.fromCharCode(index + 'a'.charCodeAt(0));
        }
    });
    return res;
}
console.log(longest("dsafkjdsalfsfasdcfhgwuqitrrieykte", "afjkdshfgasdhfkdshagfywqfbrwelhweufsaudas"));