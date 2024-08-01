function getFreeUrinals(urinals) {
    let free = 0;
    let mistake = false;
    
    // add padding of free urinals at the ends to simplify the loop
    urinals = '0' + urinals + '0';
  
    for(let i = 1; i < urinals.length - 1; i++) {
      if(urinals[i] == '0') {
        if(urinals[i-1] == '0' && urinals[i+1] == '0') {
          free++; // increment free urinals counter
          i++; // skip next urinal to keep spacing
        }
      } else if(urinals[i-1] == '1' || urinals[i+1] == '1') {
        mistake = true; // found a mistake in the layout
        break;
      }
    }
  
    // return -1 if there was a mistake, otherwise the count of free urinals
    return mistake ? -1 : free;
  }