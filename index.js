let textTitle = document.getElementById("pra-title")
let pra = document.querySelectorAll(".pra p")
let bold = document.querySelector("#bold")
let italic = document.getElementById("italic")
let fontColor = document.getElementById("font-color")
let plus = document.getElementById('plus')
let fontSize = document.getElementById("font-size")
let min = document.getElementById('min')

// Making all things default
window.onload = function(){
    document.querySelector(".visible").style.color = `${fontColor.value}`
    document.querySelector(".visible").style.fontSize = `${fontSize.value}`
}



// Changing whole text
textTitle.addEventListener("change", function(){
    pra.forEach(function(p){
        p.classList.remove("visible")
        if(p.classList.contains(textTitle.value)){
            p.classList.add("visible")
        }
    })
})

// making text bold
bold.addEventListener("click", function(){
    document.querySelector(".visible").classList.toggle("bold")
})

// making text italic
italic.addEventListener("click", function(){
    document.querySelector(".visible").classList.toggle("italic")
})

// Connecting fotsize
// textTitle.addEventListener("focusout",function(){
//     document.querySelector(".visible").style.fontSize = `${fontSize.value}`
// })

// Activating Plus button
plus.addEventListener("click", function(){
    fontSize.value = `${parseInt(fontSize.value) + 2 }px`
    document.querySelector(".visible").style.fontSize = `${fontSize.value}`
})

// Activating minus button
min.addEventListener("click", function(){
    fontSize.value = `${parseInt(fontSize.value) - 2 }px`
    document.querySelector(".visible").style.fontSize = `${fontSize.value}`
})

// Changing font color
fontColor.addEventListener("change", function(){
    document.querySelector(".visible").style.color = `${fontColor.value}`
})
