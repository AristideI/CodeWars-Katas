function cakes(recipe, available) {
    let recipeIng = Object.keys(recipe)
    let times = []
    for(elt of recipeIng){
        if(!available.hasOwnProperty(elt)){
            return 0
        }
        
        else{
            times.push(Math.floor(available[elt]/recipe[elt]))
        }
    }
    
    return Math.min(...times)
}