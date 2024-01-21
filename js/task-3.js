function checkForSpam(message) {
  let spamWord = 'spam';
  let saleWord = 'sale';
  const lowerMessage = message.toLowerCase();
  let containsForbiddenWords;
  containsForbiddenWords = lowerMessage.includes(spamWord.toLowerCase()) || lowerMessage.includes(saleWord.toLowerCase());
  return containsForbiddenWords;
}






console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of spaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true 



