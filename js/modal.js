class modal {
    constructor(popup, close, active, form) {
        // public variables
        this.popup = document.querySelector(popup)
        this.close = document.querySelector(close)
        this.active = document.querySelectorAll(active)
        this.form = document.querySelector(form)
        this.AllExpenses = []
    }

    // functions - methods

    closemodal = () => {
        this.popup.classList.add("disable")
    }
    openmodal = () => {
        this.popup.classList.remove("disable")
    }

    getvalues = (spend, method) => {
        let _expenses = {}
        _expenses = { spend, method }
        this.AllExpenses.push(_expenses)
    }

    // event and call 

    click = () => {
        this.active.forEach(element => {
            element.addEventListener('click', () => {
                this.openmodal()
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








const InitModal = new modal('.popup', '.close', '.btn', '#form')
InitModal.click()