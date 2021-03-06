app.component('photo-view', {
    props: {
        iszoom: {
            type: Boolean,
            require: true
        },
        current_img: {
            type: String,
            require: true
        }
    },
    emits:["zoom-out-images"]
    ,
    template:
        /*html*/
        `
        <div class="bg-black min-h-screen w-full flex justify-center fixed left-0 top-0 bg-opacity-80" v-if="iszoom">
            <div class="container flex flex-col h-full justify-center  mt-10">
                <div class="flex items-center justify-end cursor-pointer">
                    <i v-on:click="zoomOutImages" class="fas fa-window-close text-white text-5xl"></i>
                </div>
                <div class="bg-red-300 w-8/12  ml-24">
                    <img :src="current_img" >
                </div>
            </div>
        </div>
    `,
    methods: {
        zoomOutImages() {
            this.$emit('zoom-out-images')
        }

    }

})