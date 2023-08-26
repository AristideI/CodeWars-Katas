function triangular( n ) {
    if(n<=0){
      return 0
    }
  
    return (n % 2 === 0) ? (n*(n/2)) + n/2 : n*(Math.ceil(n/2))
  }