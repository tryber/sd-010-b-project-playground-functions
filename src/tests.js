function splitSentence(string) {
array = [];
splittedString = '';
for (let index in string) {
    if (string[index] == ' '){
    array.push(splittedString);
    splittedString = ''
    } else {
        splittedString += string[index]
    }
}
array.push(splittedString)
return array }
