function humanReadable(seconds) {
    // Calculate the hours, minutes, and seconds
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;
  
    // Format the hours, minutes, and seconds as two-digit strings
    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = remainingSeconds.toString().padStart(2, '0');
  
    // Concatenate the formatted time with colons
    let formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  
    // Return the formatted time
    return formattedTime;
  }