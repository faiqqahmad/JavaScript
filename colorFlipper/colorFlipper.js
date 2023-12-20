function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function clickMe() {
    let body = document.querySelector(".body")
    console.log('this is a test')
    let v1 = Math.random() * 255
    let v2 = Math.random() * 255
    let v3 = Math.random() * 255
    let display = `Background Color: ${rgbToHex(Math.round(v1),Math.round(v2),Math.round(v3))}`
    let s1 = `rgb(${v1},${v2},${v3})`
    body.style.backgroundColor = s1
    let info = document.querySelector('.info')
    info.textContent = display
}