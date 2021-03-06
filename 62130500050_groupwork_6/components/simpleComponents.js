app.component('sim',{
    props: {
        iszoom: {
            type:Boolean,
            require:true
        },
        current: {
            type:String,
            require:true
        }
    },
    template:
        /*html*/
        `
    <h1>{{iszoom}}</h1>
    <h1>{{current}}</h1>
    `

})