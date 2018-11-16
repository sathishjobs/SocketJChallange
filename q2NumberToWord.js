/**
 * Write an arrow function that can accept any number between 1 and 1 million and return
 * the word format of the number. For example, if the input is 157 - it should return One
 * hundred and fifty-seven 
 */

var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let findNumberToWord = (number) => {
    if (number == 0)
        return "Zero";
    else if(number >= 1000000)
        return _convert_millions(number)
    else if(number >= 1000)
        return _convert_thousands(number)
    else if (number > 99)
        return _convert_hundreds(number)
    else if (number <= 99)
        return _convert_tens(number);
}

//helper functions for convert tens
function _convert_tens(num) {
    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else {
        return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
}

//helper functions for convert hunderds 
function _convert_hundreds(num) {
    if (num > 99) {
        return ones[Math.floor(num / 100)] + " hundred " + _convert_tens(num % 100);
    }
    else {
        return _convert_tens(num);
    }
}

//helper function for convert thousands
function _convert_thousands(num) {
    if (num >= 1000) {
        return _convert_hundreds(Math.floor(num / 1000)) + " thousand " + _convert_hundreds(num % 1000);
    }
    else {
        return _convert_hundreds(num);
    }
}

//helper function for millions
function _convert_millions(num){
    if (num>=1000000){
        return _convert_millions(Math.floor(num/1000000))+" million "+_convert_thousands(num%1000000);
    }
    else {
        return _convert_thousands(num);
    }
}


console.log(findNumberToWord(1000000));