<template>
  <v-app light>

    <ComsepTopHeader :toolbarAttr='{ccolor:"teal darken-2", dark: true}' />

    <ComsepHeader :toolbarAttr='{dark:true, ccolor:"teal lighten-2"}' :title='title' />

    <v-content>
      <v-container>
        <h1 class="display-3 text-xs-center">Electronic Library</h1>
        <SearchForm />
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

  import SearchForm from '~/components/library/SearchForm';

  export default {
    components: {
      ComsepTopHeader,
      ComsepHeader,
      ComsepFooter,
      SearchForm
    },
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
//        fixed: true,
        items: [
//          { icon: 'apps', title: 'Welcome', to: '/' },
//          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'ComsEP/Library'
      }
    },
  }
</script>

<style scoped>
.app {
  overflow: hidden;
}
</style>
