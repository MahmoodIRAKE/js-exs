function accum(str) {

    let res = '';
    str.split('').forEach((item, index) => {
        for (let i = 0; i <= index; i++) {
            if (i === 0) {

                res += item.toUpperCase();
            } else {
                res += item.toLowerCase();;
            }
        }
    });
    return res;
}
console.log(accum("cwAt"))