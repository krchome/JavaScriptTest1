//Write a function that takes a string as input and returns the string reversed.
//Example:
//Given s = "hello", return "olleh".
//Now write the function that reverses the string.
function reverseString(s) {
    return s.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: olleh
//Solve the problem with another approach.
function reverseString2(s) {
    let reversed = '';
    for (let i = s.length - 1; i >= 0; i--) {
        reversed += s[i];
    }
    return reversed;
}   
console.log(reverseString2('hello')); // Output: olleh
//Solve the problem with another approach.
function reverseString3(s) {
    return s.split('').reduce((reversed, character) => character + reversed, '');
}
console.log(reverseString3('hello')); // Output: olleh
//Solve the problem with another easier approach.
function reverseString4(s) {
    return [...s].reverse().join('');//Explain this line of code
    

}
console.log(reverseString4('hello'));

