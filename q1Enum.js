/**
 * Questioon :
 * Write a simple enum for days of the week. Write a function that accepts an instance of
 * above enum as input and returns true if above input is a business day (Monday to
 * Friday).
 * 
 */

 //Days of week enum creation 
 let daysOfWeek = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday']; 

 //function for find the given input is enum or not
 function isBusinessDay(day){
    //convert input to lowercase for better finding
    day = day.toLowerCase();
    //compare the input with daysOfWeek
    if(daysOfWeek.includes(day))
        return true;
    else 
        return false;
 }

 console.log(isBusinessDay('Monday'));