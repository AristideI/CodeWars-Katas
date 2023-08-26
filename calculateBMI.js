function bmi(weight, height) {
    let bmiVal = weight / (height ** 2)
    if (bmiVal <= 18.5) {
      return "Underweight"
    }
    
    else if (bmiVal <= 25.0) {
      return "Normal"
    }
    
    else if (bmiVal <= 30.0) {
      return "Overweight"
    }
    
    else {
      return "Obese"
    }
  }