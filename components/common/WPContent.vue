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
  data() {
    return {
      compiled_content: null
    }
  },
  computed: {
  },
  created(){
    this.compiled_content = {
      template: "<div>"+this.content+"</div>",
      methods: {
        btnClick() {
          console.log('%%%%%%%');
        },
        btnRegisterClick() {
          console.log('Register!!!');
        }
      }
    };
  },
  methods: {
  }
};
</script>

