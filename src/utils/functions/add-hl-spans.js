const stringsToFind = ["rustic charm with ocean views", "tranquility amidst nature's beauty", "minimalist elegance", "clean lines and contemporary design,", "mid-century art", "serenity and elegance", "the integration of natural light", "exceptional architectural projects", "we combine our expertise", "wabi-sabi principles"]

export const addHlSpans = (p)=> {
  const innerText = p.innerHTML
  const strToPrint = ""
  stringsToFind.forEach((string)=>{
    if(innerText.includes(string.toUpperCase())){
      const pInnerHTML = p.innerHTML
      const uppercaseString = string.toUpperCase()
      const modP = pInnerHTML.replace(uppercaseString, `<span class="highlight-bg hide-bg">${string}</span>`)
      p.innerHTML = modP
    }
  })
}