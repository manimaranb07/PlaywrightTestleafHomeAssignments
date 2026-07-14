//Example:1 "Hello World"
function lengthOfLastword(s){
    const words =s.split(' ');

    const lastword = words[words.length-1] ;

    return lastword.length
}
console.log(lengthOfLastword("Hello World"));

//Example:2 "fly me to the moon"

function lengthOfLastwordTrimmed(s){
    let trimmed = s.trim();

    let words = trimmed.split(' ');

    let lastword = words[words.length-1];

    return lastword.length;
}
console.log(lengthOfLastwordTrimmed("fly me to the moon"));

//Example: 3 "Check if two strings are anagrams"
function isAnagram(str1,str2) {
    str1 = str1.replace(/\s/g,"").toLowerCase();
    str2 = str2.replace(/\s/g,"").toLowerCase();

    let sorted1= str1.split("").sort().join("");
    let sorted2= str2.split("").sort().join("");

    return sorted1 === sorted2;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("Hello", "World"));


