<template>
  <div class="wp-post-content">
    <component :is="compiled_content"></component>
  </div>
</template>

<script>
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
</script>
