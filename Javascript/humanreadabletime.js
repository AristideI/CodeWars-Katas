function humanReadable (seconds) {
    if (seconds > 359999) {
      return null;
    }
    
    let min = seconds / 60
    console.log("First minutes", min)
    
    let hours = min / 60
    console.log("First Hours", hours)
    
    let lilhours = Math.floor(hours)
    console.log("real hours", lilhours)
    let remainder1 = (hours - lilhours) * 60
    
    let lilmin = Math.floor(remainder1)
    console.log("real min", lilmin)
    let remainder2 = ((remainder1 - lilmin) * 60).toFixed()
    console.log("real seconds", remainder2)
    
    let final = String(lilhours).padStart(2, "0") + ":" + String(lilmin).padStart(2, "0") + ":" + String(remainder2).padStart(2, "0")
    
    console.log(final)
    return final;
  }