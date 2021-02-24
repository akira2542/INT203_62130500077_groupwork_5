app.component('photo-view',{
    props : {
        pic : Object
    },
    template: /*html*/`
    <div id="crousel-container" class="flex bg-gray-500 flex justify-center w-screen">
    <div class="gallery w-8/12 flex justify-end" :style="pic.style">
      <div @click="this.$emit('close')" class="cursor-pointer">
        <i class="material-icons lg mr-1 md-dark">clear</i>
      </div>
    </div>
  </div>
    `
})