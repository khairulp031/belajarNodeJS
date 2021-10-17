let elementDiv = document.getElementById("testDiv")
console.log(elementDiv)
elementDiv.innerHTML = '<strong>diubah sama javascript</strong>'
//diubah sama javascript</strong>'
elementDiv.style.color = 'blue'
elementDiv.style.cursor = 'pointer'
//elementDiv.classList.add('hide')
/*setTimeout(() => {
    elementDiv.classList.remove('hide')
}, 5000)*/
elementDiv.classList.remove('hide')

elementDiv.onclick = function (event) {
    let resultDiv = document.getElementById("resultDiv")
    resultDiv.innerHTML = '<strong>diubah sama testDiv onclick</strong>'
}

let testInput = document.getElementById("testInput")
testInput.onchange = function (event) {
    console.log(event.target.value)
    let resultInput = document.getElementById("resultInput")
    resultInput.innerHTML = event.target.value
}


let btn = document.createElement("BUTTON");   // Create a <button> element
btn.innerHTML = "CLICK ME";                   // Insert text


document.body.appendChild(btn);               // Append <button> to <body>

