app.component('photo-search', {
    props: {
        searchtab: {
            type: Boolean,
            require: true
        },
        result:{
            type:Number,
            require:true
        }
    },
    emits:["toggel-show-search-tab","cancle-Search"]
    ,
    template:
        /*html*/
        `            
    <div class="flex space-x-3 h-8">
    <button v-on:click="toggelShowSearchTab">
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
            clip-rule="evenodd">
            <path
                d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7zm-3-8c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
        </svg>
    </button>
    <input type="search" v-model.lazy.trim="searchword" v-show="searchtab" placeholder="Type Anythings"
        class="border border-gray-300 p-1 w-10/12">
    <button class="bg-red-500 w-2/12 text-md text-white" v-show="searchtab"
        v-on:click="cancleSearch">Cancel!</button>
</div>
<h2 class="text-3xl font-semibold" v-if="result==0">No Found!</h2>
`,
    data() {
        return {
            searchword : ""
        }
    },
    methods: {
        toggelShowSearchTab() {
            this.$emit("toggel-show-search-tab")
        },
        cancleSearch() {
            this.$emit("cancle-Search")
        }
    },
    watch: {
        searchword (){
            //sconsole.log(`word has changed! : ${this.searchword}`)
            this.$root.searchWord = this.searchword
        }

    }
})