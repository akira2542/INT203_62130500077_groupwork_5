app.component('photo-search', {
    data() {
        return {
            isSearchOn : false,
            searchtext : ''
        }
    }
    ,
    template: /*html*/`
    <div id="search container">
    <div v-if="isSearchOn" id="search-bar">
      <input v-model="searchtext" type="text" placeholder="type to search"
        class="rounded-md h-8 mt-2 bg-gray-200 w-12/12">
      <input @click="toggleSearch()" type="button"
        class="rounded-xl bg-red-500 p-1.5 ml-2 font-bold text-white cursor-pointer" value="Cancel">
    </div>
    <div @click="toggleSearch()" v-else id="search-button" class="cursor-pointer">
      <i class="material-icons md-28 mr-1 md-dark">search</i><span class="font-bold">Search</span>
    </div>
  </div>
    `,
    methods : {
        toggleSearch() {
            this.isSearchOn = !this.isSearchOn
        }
    },
    watch : {
        searchtext : function() {
            this.$emit('searched',this.searchtext)
        }
    }
})