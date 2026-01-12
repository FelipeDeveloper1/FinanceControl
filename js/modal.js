const popup = document.querySelector(".popup")

const close = document.querySelector(".close")
const active = document.querySelectorAll(".btn")


close.addEventListener('click', () => { 
    popup.classList.add("disable")

})

active.forEach((value) => { 
    value.addEventListener('click', () => { 
        popup.classList.remove("disable")
    })
})

