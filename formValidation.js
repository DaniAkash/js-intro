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
            this.validateForm();
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
}

new RegistrationForm();