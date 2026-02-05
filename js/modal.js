class modal {
    constructor(popup, close, active, content, form) {
        // public variables
        this.popup = document.querySelector(popup)
        this.close = document.querySelector(close)
        this.active = document.querySelectorAll(active)
        this.content = document.querySelectorAll(content)
        this.form = document.querySelector(form)
        this.AllExpenses = []
    }

    // functions - methods

    closemodal = () => {
        this.popup.classList.add("disable")
        this.content.forEach((value) => {
            value.classList.add("disable")
        })

    }
    openmodal = (index) => {
        console.log(this.content)
        this.popup.classList.remove("disable")
        this.content[index].classList.remove("disable")
    }

    getvalues = (spend, method) => {
        let _expenses = {}
        _expenses = { spend, method }

        this.AllExpenses.push(_expenses)
    }

    // event and call 

    click = () => {
        this.active.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.openmodal(index)

            })
        })
        this.close.addEventListener("click", () => {
            this.closemodal()
        })

        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            const element = e.target
            this.getvalues(element.spend.value, element.method.value)
            console.log(this.AllExpenses)
        })

    }





}








const InitModal = new modal('.popup', '.close', '.btn', '.content_in', '#form')
InitModal.click()