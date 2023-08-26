function domainName(url){
    if(!url.includes("http") && !url.includes("www")){
        return url.split(".")[0]
    }
    
  let splited = url.split(".")
  if(url.includes("www")){
      return splited[1]
  }
  
  else{
    return splited[0].split("/")[2]  
  }
}