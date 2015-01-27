function fizzbuzz(item) {
    switch (true) {
        case item % 15 === 0:
            console.log('fizzbuzz');
            break;
        case item % 3 === 0:
            console.log('fizz');
            break;
        case item % 5 === 0:
            console.log('buzz');
            break;
        default:
            console.log(item);
            break;
    }
};