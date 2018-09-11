<template>
  <v-app light>


    <ComsepTopHeader :toolbarAttr='{color:"teal darken-2", dark: true}' />

    <ComsepHeader :toolbarAttr='{color:"teal lighten-2"}' :title='title' />


    <v-content>
      <v-container grid-list-md>
        <nuxt />
      </v-container>
    </v-content>


    <ComsepFooter color='' />



  </v-app>
</template>

<script>
  import ComsepTopHeader from '~/components/common/ComsepTopHeader.vue';
  import ComsepHeader from '~/components/common/ComsepHeader.vue';
  import ComsepFooter from '~/components/common/ComsepFooter.vue';

  export default {
  components: {
    ComsepTopHeader,
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



