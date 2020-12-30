const fs = require('fs');
const faker = require('faker');

// We need to make this...

// price, street, city, state, zip

// Wait...
// You're trying to do too much all at once again.
// Don't over think it.
// Make it simple, then expand.
for (let i = 0; i < 3; i++) {

  //Prices


  //Addresses



  //Booleans for 'New', 'Sale', 'Sold', 'Construction' tags.
  let flags = [false, false, false, false];
  //console.log('after', i, tags);
  const tags = flags[0] + ', ' + flags[1] + ', ' + flags[2] + ', ' + flags[3] + ', '

  const link = 'https://loremflickr.com/320/240/house';


  //const line = price + street + region + tags + link + '\n';
  // Remember, callback cannot stay a parameter when invoking...
  fs.appendFile('./SDC_db/seed.csv', line, (err) => {
    if (err) console.log(err);
    console.log('Line written!')
  });
}

//https://loremflickr.com/320/240/house
//https://loremflickr.com/320/240/backyard
//https://loremflickr.com/320/240/door

// Notes:
// Why is it writing to main_gallery directory if the func invoke in this file and the csv file being written to are sharing the db directory? Does fs auto-use the package folder as the 'this' directory?

// Is it better to append one line at a time, or concat them all together as one giant string then write to file once?

// Should I worry about faker putting zeroes in front of street nums?



// Tested:
// √ npm script works
// √ writes to the right directory
// √ creates a file if doesn't exist
// √ basic faker test
// √ writes a faked name to file
// writes with comma separation