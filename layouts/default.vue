<template>
  <v-app light>

    <ComsepHeader :toolbarAttr='{color:"teal lighten-2"}' :title='title' />


    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>


    <ComsepFooter color='' />





  </v-app>
</template>

<script>
  import ComsepHeader from '~/components/common/ComsepHeader.vue';
  import ComsepFooter from '~/components/common/ComsepFooter.vue';

  export default {
  components: {
    ComsepHeader,
    ComsepFooter
  },


    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
//        fixed: true,

        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'ComsEP',

        icons: [
          'facebook-box',
//          'fab fa-facebook',
          'fab fa-twitter',
          'fab fa-google-plus',
          'fab fa-linkedin',
          'fab fa-instagram'
        ],
      }
    }
  }
</script>



