// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isunder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isunder25 && isUnique;

// Finally, log the results.
// console.log(isValid);

//  if (n1 / 5 || n2 / 5 || n3 / 5 || n4 / 5)
//    {
//     console.log('yes')
//    }else {
//     console.log('no')
//    }


// this proves that all the numbers are divisble by 5
//    const divby5 = n1 % 5 || n2 % 5 || n3 % 5 || n4 % 5 === 0
//    console.log(divby5)

// this proves that the n1 is larger than n4
// const firstlglast = n1 > n4 
// console.log(firstlglast)

// nonesense!!!!

// let arithchain = "-";
// switch(arithchain){
//     case "-":
//     console.log(n1 - n2);
//     break;
//     case "+":
//         console.log()
// }


// this is the arithmetic chain 

// const chainone = n1 - n2

// const chaintwo = chainone **3

// const chainthree = chaintwo % n4

// console.log(chainthree)






// part 2 of the lab


const roadtrip = 1500
let avgcost = 3
let budget = 175

let slowmph = 55
let slowmpg = 30
let slowgallons = ( roadtrip/ slowmpg)
let costperslowmph = (slowmph /slowmpg)
let slowcost = ((slowgallons * 3))
let slowhours = (roadtrip / slowmph)
// console.log(slowcost)
console.log(slowgallons)
console.log(slowhours)
if (budget > slowcost){
    console.log('that was a smooth trip')
}else{
    console.log('no bueno')
}


let medmph = 60
let medmpg = 28
let medgallons = (roadtrip / medmpg)
let costpermedmph= (medmph / medmpg)
let medcost = ((medgallons * 3))
let medhours = (roadtrip / medmph)
// console.log(medcost)
console.log(medgallons)
console.log(medhours)
if (budget>medcost){
    console.log('we lit')
}else{
    console.log('can you send me $20 plz')
}

let fastmph = 75
let fastmpg = 23
let fastgallons = (roadtrip / fastmpg)
let fastcost = (fastgallons * 3)
let fasthours = (roadtrip / fastmph)
// console.log(fastcost)
console.log(fastgallons)
console.log(fasthours)
if (budget>fastcost){
    console.log('we made it')
}else{
    console.log('the way my checking account is setup.....')
}


// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// i think the best option would be option 2 (60 mph) because it is the fastest way to get to the destination that is within the budget