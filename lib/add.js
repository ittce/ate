function getChar(s, i) {
    return s[i] ? ~~s[i] : 0;
}

function add(a,b) {
    let j = a.length - 1;
    let k = b.length - 1;
    let curr = 0;
    let result = '';
    while(j >= 0 || k >= 0) {
        let temp = getChar(a, j) + getChar(b, k) + curr;
        curr = ~~(temp / 10);
        result = `${temp % 10}${result}`;
        j--;
        k--;
    }
    if (curr) {
        result = `${curr}${result}`;
    }
    return result;
}

module.exports = add;