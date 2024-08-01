function triangleType(a, b, c){
    if(a+b<=c || a+c<=b || b+c<=a){
      return 0;
    }
      let sides = [a,b,c]
      let hyp = Math.max(a,b,c)
      sides.splice(sides.indexOf(hyp), 1)
      let adj = sides[0]
      let opp = sides[1]
      
      let mainSide = hyp ** 2
      let otherSides = adj ** 2 + opp ** 2
      
      if(otherSides > mainSide) {
        return 1;
      }
      
      if(otherSides === mainSide) {
        return 2;
      }
      
      if(otherSides < mainSide) {
        return 3;
      }
      
    
      return 0;
    }