/**
 * Write a function that will take 2 arrays (name list, address list) to create a single array of
 * objects with name and address attributes
 * a. Implement the solution to the above question, if the lists are provide by 2
 * asynchronous sources. For eg: if I have one API that returns the name list and
 * another API that returns the address list - how to merge the output after both
 * API return value.
 */

const nameListApiCall = () => {
    //mimic the api cal using setTimeout and Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Sathish', 'Kumar', 'Steve', 'Raja', 'Ravi'])
        }, 4000)
    });
}

const addressListApiCall = () => {
    //mimit the api call using setTimeout and Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Chennai', 'Trichy', 'USA', 'Madurai', 'Trichy'])
        }, 4000)
    })
};

async function mergeInfo() {
    let result = await Promise.all([nameListApiCall(), addressListApiCall()]);
    if (result) {
        let mergeResult = [];
        //find the length of name array list
        let nameListLength = result[0].length;
        for (let i = 0; i < nameListLength; i++) {
            mergeResult.push({ name: result[0][i], address: result[1][i] });
        }
        return mergeResult;
    }
}

//Test mergeInfo function 
mergeInfo().then(data=>console.log(data));


