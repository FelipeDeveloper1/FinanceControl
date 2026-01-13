// variables

const popup = document.querySelector(".popup")
const close = document.querySelector(".close")

const active = document.querySelectorAll(".btn")
const submit = document.querySelector(".submit")    

close.addEventListener('click', () => { 
    popup.classList.add("disable")

})

active.forEach((value) => { 
    value.addEventListener('click', () => { 
        popup.classList.remove("disable")
    })
})

submit.addEventListener('click', () => { 
    const spend = document.querySelector("#spend").value
    const metodo = document.querySelector("#metodo")

})