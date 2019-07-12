console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

function checkForSpam(str) {
  if (typeof str === "string") {
    if (
      str.toUpperCase().includes("SPAM") ||
      str.toUpperCase().includes("SALE")
    ) {
      return true;
    } else {
      return false;
    }
  }
}
