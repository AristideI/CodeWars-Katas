function makeLooper(input){
    let index = 0;

    return function(){
        const result = input[index];
        index = (index + 1) % input.length;
        return result;
    };
}