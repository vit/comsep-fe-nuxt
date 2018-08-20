<template>

<div>
  
  <!--div v-html="content">!!!!!!!</div-->

  <!--component :is="compiled_content"></component-->
  <wp-content-inner :content="content"></wp-content-inner>

</div>

</template>

<script>

/*
  import VueCompiler from 'vue/dist/vue';
  import VueCompilerEsm from 'vue/dist/vue.esm';
  import VueCompilerCommon from 'vue/dist/vue.common';

  let cc = null;
  if(process.client) {
    cc = VueCompiler;
  } else {
    cc = VueCompilerCommon;
  }
*/

//import VueCompiler from 'vue/dist/vue.common';
import Vue from 'vue';

Vue.component('wp-content-inner', {
  render: function (createElement) {
      console.log("in render!!!!!");
///*
    return createElement(
      'div',
//      'WWWWWWW WWWWWWW WWWWWWW'
//      VueCompiler.compile("<div>"+this.content+"</div>").render
      //cc.compile("<div>"+this.content+"</div>").render
      this.content
    );
//*/

/*
      if(process.client) {
//        this.templateRender = VueCompiler.compile("<div>"+this.content+"</div>").render;
        this.templateRender = VueCompiler.compile("<div>"+this.content+"</div>").render;
        return this.templateRender();
      } else {
        return createElement(
          'div',
          'WWWWWWW WWWWWWW WWWWWWW'
//          this.content
        );
      }
*/

  },
  props: [
    'content'
  ]
});


    export default {
        props: [
          'content'
        ],
        data() {
          return {
            compiled_content: null
          }
        },
/*
        render(h) {
          console.log("render(h)!!!");
          const res = VueCompiler.compile("<div>"+this.content+"</div>");
          this.templateRender = res.render;
          this.$options.staticRenderFns = [];
          this._staticTrees = [];
          for (var i in res.staticRenderFns) {
            this.$options.staticRenderFns.push(res.staticRenderFns[i])
          }
          return this.templateRender(h);
        },
*/
//        computed: {
//          compiled_content: () => {
//            return null;
//            console.log("COMPILED!!!");
//            return VueCompiler.compile("<div>"+this.content+"</div>");
//            return VueCompiler.compile("<div> eeeeeeeee </div>");
//          }
//        },
        mounted(){
//          this.compiled_content = VueCompiler.compile("<div> eeeeeeeee </div>");
//          setTimeout(() => {
//            this.compiled = VueCompiler.compile(template);
//            this.compiled_content = VueCompiler.compile("<div>"+this.content+"</div>");
//            console.log(this.content);
//            console.log("COMPILED!!!");
//          }, 1500);
        },
        methods: {
        }

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

