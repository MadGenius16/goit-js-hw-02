const blackword1= spam
const blackword2= sale
let=m1
function checkForSpam(message){

 m1= message.toLowerCase()
 return m1.includes(blackword1.toLowerCase())


}



console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of spaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true 




// toLowerCase()

// const username = 'Jacob Mercer';

// console.log(username.includes('Jacob')); // true