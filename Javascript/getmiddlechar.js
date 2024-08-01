function getMiddle(s)
{
  let pro = 0
  
  if (s.length == 1){
    pro = s
  }
  
  else if(s.length % 2 === 0){
    pro = s[(s.length /2)-1] + s[(s.length /2)]
  }
  
  else if (s.length%2 != 0) {
    pro = s[(s.length - 1)/2]
  }
  
  return pro
  
  
}