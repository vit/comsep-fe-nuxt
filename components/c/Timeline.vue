<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>

<script>
/*
  import Vue from 'vue';
  export default {
    props: [
      'content'
    ],
    created(){
      this.compiled_content = {
        template: "<div>"+this.content+"</div>",
        methods: {
          btnRegisterClick() {
            console.log('Register!!!');
          }
        }
      };
    }
  };
*/
</script>

<style lang="scss" scoped>

.timeline {
  -border: solid 1px red;
    margin: 40px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
    position: relative;
}
  
</style>
