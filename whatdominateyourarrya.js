function dominator(arr) {
    let count = {};
    let dominator_value = -1;
    
    for (let i = 0; i < arr.length; i++) {
        count[arr[i]] = (count[arr[i]] || 0) + 1;
        if (count[arr[i]] > arr.length / 2) {
            dominator_value = arr[i];
            break;
        }
    }
    
    return dominator_value;
}   