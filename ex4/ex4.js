// function strLength(value:string):number {
//     return value.length;
// }
function strLengthTrimStart(value) {
    return value.trimStart().length;
}
function strLength(value, trim) {
    if (trim) {
        return value.trimStart().length;
    }
    else {
        return value.length;
    }
}
console.log(strLength(" noodle", false));
console.log(strLengthTrimStart(" noodle"));
