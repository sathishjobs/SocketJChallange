/**
 * Question : 5
 * Given an array of Student objects (with name, country attributes) - write a function that
 * will group the students by country so that for given a country, it can output an array of
 * students from that country.
 * a. Generalize the above function as a higher order that will take any arrow function
 * & an array & use the arrow function to group the array
 */

let students = [];
students.push({ name: 'Sathish Kumar', country: "India" });
students.push({ name: 'Steve', country: 'USA' });
students.push({ name: 'Ravi', country: 'SriLanka' });
students.push({ name: 'RengaRaj', country: 'London' });

//filterBy params for which property you want to filer
const filter = (filterBy = { country: 'India' }) => (finder, array) => finder(array, filterBy);

//finder helper
const finder = (array, filterBy) => {
    // get the filterBy objet key for group the array 
    let keyToFilter = Object.keys(filterBy)[0];
    return array.filter((value) => value[keyToFilter].toLowerCase() == filterBy[keyToFilter].toLowerCase())
}

let operateFilter = filter({country : 'india'})(finder,students);

console.log(operateFilter);