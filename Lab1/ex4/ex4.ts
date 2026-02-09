// FUNCTIONS TO GET LENGTH OF STRING

// 1.
/**
 * @param value string parameter
 * @returns string length
 */
function strLength(value:string):number {
    return value.length;
}

// 2.
/**
 * @param value string parameter
 * @returns string length
 */
function strLengthTrimStart(value:string):number {
    return value.trimStart().length;
}

// 3. 
/**
 * @param value string parameter 
 * @param trim true to remove leading space
 * @returns string length
 */
function strLengthCombo(value:string, trim?:boolean):number {
    if (trim) {
        return value.trimStart().length;
    } else {
        return value.length;
    }
}


console.log(strLengthCombo(" noodle"));
console.log(strLengthTrimStart(" noodle"));