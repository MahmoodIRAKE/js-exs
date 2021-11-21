function CountDups(str) {
    let counter = 0;
    let temp = str.slice();
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i).toLowerCase();

        temp = str.slice(i + 1, str.length).toLowerCase();

        if (temp.includes(char)) {
            counter++;
        }

    }
    return counter;

}
console.log(CountDups('aA11cc'));