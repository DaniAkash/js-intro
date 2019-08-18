/**
 * Selecting an individual selected radio input
 * 
 * document.querySelector("input[name=\"gender\"]:checked")
 */

class RegistrationForm {
    constructor() {
        this.$name = document.querySelector("#name");
        this.$email = document.querySelector("#email");
        this.$password = document.querySelector("#password");
        this.$retypePassword = document.querySelector("#retype-password");
        this.$dob = document.querySelector("#dob");
        this.$gender = document.querySelectorAll(".gender-input");
        this.$form = document.querySelector("form");

        this.startEventListeners();
    }

    startEventListeners() {
        this.$form.addEventListener('submit', event => {
            event.preventDefault();
            this.submitForm();
        });
    };

    validateForm () {
        let name = this.$name.value;
        if(name.length <= 3) {
            this.$name.classList.add('is-invalid');
        } else {
            this.$name.classList.remove('is-invalid');
        }
    };

    getFormValues () {
        return {
            name: this.$name.value,
            email: this.$email.value,
            password: this.$password.value,
            dob: this.$dob.value,
            gender: document.querySelector("input[name=\"gender\"]:checked").value
        }
    }

    submitForm () {
        const formFields = this.getFormValues();

        const url = "https://mytestendpoint.free.beeceptor.com/api/data"
        const config = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(formFields)
        };

        fetch(url, config)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            })
    }
}

// class initialized
new RegistrationForm();