app.component('photo-item',{
    props: {
        pic : Object,
        index: Number
    },
    template :/*html*/`
    <div @dblclick="emitliked(index)" @click="emitSelected(index)" id="gallery-item"
    :class="{selected : pic.selected}"
    class="w-80 gallery-item overflow-hidden cursor-pointer m-3 flex flex-col bg-gray-200 hover:bg-gray-400 rounded-xl transition-colors">
    <div class="gallery w-80 h-72" :style="pic.style">
    </div>
        <h2 class="m-3 mr-2 font-semibold"> {{ pic.title }}
        <span :class="{'text-red-500': pic.like}"
        class="text-gray-300 transition-all text-sm material-icons transform scale-150">favorite</span>
      </h2>
  </div>
    `
    ,
    methods: {
        emitliked(index) {
            this.$emit('liked',index)
        },
        emitSelected(index) {
            this.$emit('selected',index)      
        }
    }
}
    )