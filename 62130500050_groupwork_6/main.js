const constraints = {
    firstname: {
        presence: true,
        length:{
            minimum: 2
        }
    },
    lastname: {
        presence: true,
    },
    gender:{
        presence: true,
    },
    dob: {
        presence: true,
        //dateOnly: true,
    },
    address: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    city: {
        presence: true,
    },
    state: {
        presence: true,
    },
    zip: {
        presence: true,
        length:{
            is: 5,
            message:"Zip code must has 5 digits"
        }
    },
}


const app = Vue.createApp({
    data() {
        return {
            formsData: {
                firstname: null,
                lastname: null,
                dob: null,
                gender:null,
                address: null,
                email: null,
                city: null,
                state: null,
                zip: null,
            },
            errors: []
        }
    },

    methods: {
        checkForm(e) {
            this.errors = validate(this.formsData, constraints)
            console.log(this.errors)
            if(!this.errors) alert(`Your info have been saved! \n Hi! ${this.formsData.firstname} ${this.formsData.lastname}`)
        }
    },
    // computed: {
    //     returnSth() {
    //         return console.log(`${this.firstname}\n${this.lastname}\n ${this.dob}\n ${this.address}\n ${this.email}\n ${this.city}\n ${this.state}\n ${this.zip}`)
    //     }
    // }
})
app.component('show-error', {
    props: {
        errors: {
            require: true,
            type: Object
        },
        field: {
            require: true,
            type: String
        }
    },
    template:
        /*html*/
        `
        <div v-if="errors && errorList">
            <p v-for="error in errorList" class="text-red-500">{{error}}</p>
        </div>
        `,
    computed: {
        errorList() {
            return this.errors[this.field]
        }
    }

})

app.mount('#app')