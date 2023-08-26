function tram(stops, descending, onboarding){
    let a = []
    let value = 0
    for(let i = 0; i < stops; i++){
        value = value + onboarding[i] - descending[i]
        a.push(value)
    }
    
    return Math.max(...a)
  }