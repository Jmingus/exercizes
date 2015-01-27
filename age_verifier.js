function age_verifier() {
    var userInput = prompt("Enter Age.", "");
    if(userInput > 21) {
        return 'Allowed';
    }else
        return 'Not Allowed';
}

console.log(age_verifier());