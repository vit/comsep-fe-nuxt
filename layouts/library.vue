<template>
  <v-app light>
  <div class="app">


    <v-toolbar dark dense absolute sscroll-off-screen fixed app :clipped-left="clipped" ccolor="teal lighten-2">

      <!--nuxt-link to="/"--><v-toolbar-title v-text="title"></v-toolbar-title><!--/nuxt-link-->
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/events">Events</v-btn>
        <v-btn flat to="/gn">Jounal</v-btn>
        <v-btn flat to="/lib">Library</v-btn>
      </v-toolbar-items>

    </v-toolbar>

<!--h1 class="display-4">er gwerwer twert </h1-->


      <!--v-system-bar status ccolor="primary" lights-out fixed>
        <v-spacer></v-spacer>
        <v-icon>network_wifi</v-icon>
        <v-icon>signal_cellular_null</v-icon>
        <v-icon>battery_full</v-icon>
        <span>12:30</span>
      </v-system-bar-->



    <v-content>
      <v-container>
        <h1 class="display-3 text-xs-center">Electronic Library</h1>
        <SearchForm />
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>

  </div>
  </v-app>
</template>

<script>

  import SearchForm from '~/components/library/SearchForm';

  export default {
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
        title: 'Comsep'
      }
    },
    components: {
      SearchForm
    }
  }
</script>

<style scoped>
.app {
  overflow: hidden;
}
</style>
