import Axios from "axios";

class ClientArea {
    constructor() {
        this.injectHTML()
        this.form = document.querySelector(".client-area__form")
        this.field = document.querySelector("client-area__input")
        this.contentArea = document.querySelector("client-area__content-area")
        this.events()

    }

    events() {
        this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest();
        })
    }

    sendRequest() {
        Axios.post("http://127.0.0.1:5500/app/index.html",
            { password: this.field.value })
            .then(response => {
                this.form.remove()
                this.contentArea.innerHTML = response.data;
            })
            .catch(() => {
                this.contentArea.innerHTML = `<p class="client-area__error">Tani oruusan nuuts ug buruu baina. Dahin oroldono uu!</p>`;
                this.field.value = "";
                this.field.focus();
            });
    }

    injectHTML() {
        document.body.insertAdjacentElement(
            "beforeend",
            `
            <div class="client-area">
            <div class="wrapper wrapper--medium">
              <h2 class="section-title section-title--blue"> Hereglegchiin tusgaihuudas</h2>
              <form action="" class="client-area__form">
                <input type="text" class="client-area__input" placeholder="Nuuts ugee bichne uu">
                <button class="btn btn--orange">Nevterh</button>
              </form>
              <div class="client-area__content-area"></div>
            </div>
              </div>
        `)
    }
}

export default ClientArea