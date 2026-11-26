/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
        let stacknum = [];
    let stackletter = [];
    let num = "";
    let letter = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "[") {
            stacknum.push(Number(num));
            stackletter.push(letter);
            num = '';
            letter = '';
        }
        else if (s[i] === "]") {
            let count = stacknum.pop();
            let previous = stackletter.pop();
            letter = previous + letter.repeat(count);
        }

        else {
            if (!isNaN(s[i])) {
                num += s[i];
            }
            else {
                letter += s[i];
            }
        }
    }

    return letter;
    
};