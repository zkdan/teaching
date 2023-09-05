const arr = [68, 43, 5, 11];
const copiedArr = [...arr];
arr.push({jersey:12});
const thirdArr = [...arr];
thirdArr[4].jersey = 99
// What will thirdArr[4]['jersey'] be? Why?
// What will arr[4].jersey be? Why? 
// What will copiedArr[4] be? Why?
arr[1] = 8;
// What will copiedArr[1] be? Why?
// What will arr[2] be?

const player = {...thirdArr[4]};
const playerTwo = {...arr[4]};

// What will player.jersey be? Why?
// What will playerTwo.jersey be? Why?

arr[4].jersey = 15;

// What will playerTwo.jersey be? Why?
// What will thirdArr[4].jersey be? Why?
// What will player.jersey be? Why?