class SmallestIntegerFinder {
    findSmallestInt(args) {
      let pro = args[0]
      for(let i = 0; i < args.length; i++){
        if(args[i] < pro) {
          pro = args[i]
        }
      }
      return pro
      
    }
  }