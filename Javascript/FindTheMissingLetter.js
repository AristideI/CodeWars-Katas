function findMissingLetter(array){
    let letters = array[0].toLowerCase() === array[0] ? "abcdefghijklmnopqrstuvwxyz" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let ind = letters.indexOf(array[0]);

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== letters[ind + i]) {
            return letters[ind + i];
        }
    }
    return '';
}