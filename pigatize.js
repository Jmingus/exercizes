vowel = ['a','e','i','o','u'];

function pigatize(text) {
    var word = text.slice(0,1);
    if (word.includes('vowel')) {
        output = text + 'way';
    }
    else {
       output = text + word + 'ay';
    }
    return output;
}

console.log(pigatize('apple'));