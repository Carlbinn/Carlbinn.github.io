// DOM MANIPULATION - control element in html using javasript
const body = document.body
body.append("Hellow World", "test", "estt3")

const div = document.createElement("div")

// div.innerText = "<strong>Web</strong>"
div.innerHTML = "<strong>Test</strong>" //ways like this is hackable, search for innerHTML injection
body.append(div)


//for more security
const strong = document.createElement("strong")
strong.innerText = "hello"
body.append(strong) 


const div = document.querySelector('div')
const spanHello = document.querySelector('#hello')
const spanBye = document.querySelector('#bye')
body.remove(spanBye)
