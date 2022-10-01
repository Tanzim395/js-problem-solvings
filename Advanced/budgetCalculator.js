// Write a Function that name will be "paperRequirements". This function will have three parameters. First parameter will be: What will be the number of 1st book publishing, second parameter will be: what will be the number of 2nd book publishing, third parameter will be: what will be the number of 3rd book publishing.
// Now look these 3:
// Page required for the first book publishing: 100;
// Page required for the second book publishing: 200;
// Page required for the third book publishing: 300;

// Now declare paperRequirements function which will determine how many book of copy need to be publish. and also returns how many pages will be require.
// The result will be number.

// -------------------------------#$^&*--------------------------------------//

//Basic Mathematical calculations
// For publishing two copy of first book: 2 --> 100*2 = 200
// For publishing two copy of second book: 2 --> 200*2 = 400
// For publishing three copy of third book: 3 --> 300*3 = 900
//----------------------------------------------------------------------
// So, Total Pages                                      = 1500

function paperRequirements(chomok, jhankar, subin) {
    let chomokEachBook = 100;
    let jhankarEachBook = 200;
    let subinEachBook = 300;

    if (chomok < 0 || jhankar < 0 || subin < 0 || chomok % 1 !== 0 || jhankar % 1 !== 0 || subin % 1 !== 0) {
        return "Invalid Copy number. Check it again."
    }

    let chomokPageNumbers = 100 * chomok;
    let jhankarPageNumbers = 200 * jhankar;
    let subinPageNumbers = 300 * subin;

    let totalPages = chomokPageNumbers + jhankarPageNumbers + subinPageNumbers;
    return totalPages;
}
let result = paperRequirements(2, 3, 4);
console.log(result);