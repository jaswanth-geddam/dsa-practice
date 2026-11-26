/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
      
    let stack = [];

    for (let i = 0; i < s.length; i++) {

        if (s[i] !== ']') {
            stack.push(s[i]);
        } 
        else {
            // Step 1: Get the string inside []
            let subStr = '';

            while (stack[stack.length - 1] !== '[') {
                subStr = stack.pop() + subStr;
            }

            // Step 2: Remove '['
            stack.pop();

            // Step 3: Get the repeat number
            let k = '';

            while (stack.length && !isNaN(stack[stack.length - 1])) {
                k = stack.pop() + k;
            }

            // Step 4: Repeat the substring
            stack.push(subStr.repeat(Number(k)));
        }
    }

    return stack.join('');
};

    