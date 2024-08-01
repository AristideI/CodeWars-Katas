function generateHashtag (str) {
    let pro = str.split(" ").filter(a => a !== " " && a !== "").map(a => a[0].toUpperCase() + a.slice(1))
    pro.unshift("#")
    return (pro.length === 1 || pro.join("").length > 140) ? false : pro.join("")
  }