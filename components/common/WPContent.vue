<template>

<div>
  
  <div v-html="content">!!!!!!!</div>
  
</div>

</template>

<script>

//import VueWithCompiler from 'vue/dist/vue.esm';
//import Vue from 'vue';

    export default {
        props: [
          'content'
        ],
//        computed: {
//          compiled_content: () => {
//            return Vue.compile( "<div>aaa</div>" );
////            return Vue.compile( this.content || '' );
//          }
//        },

/*
        mounted() {
//        created() {
//          this.compiled = this.compiled_content;
//          this.compiled = Vue.compile( this.content || '' );
          console.log('mounted()');
          this.compiled = Vue.compile( '<div>ereee ee  er ryery erutyu rturtu</div>' );
        }
*/
/*
        render(h) {
          console.log('render(h)');
          return h({
            template: "<div>RRRRR</div>"
          });
        },
*/

//    created () {
//      const compiled = VueWithCompiler.compile(`<div>ereee ee  er ryery erutyu rturtu</div>`);
//      const compiled = Vue.compile(`<div>ereee ee  er ryery erutyu rturtu</div>`);
//      this.templateRender = compiled.render;
//      this.$options.staticRenderFns = [];
//      for (const staticRenderFunction of compiled.staticRenderFns) {
//        this.$options.staticRenderFns.push(staticRenderFunction);
//      }
//    }


};
</script>

