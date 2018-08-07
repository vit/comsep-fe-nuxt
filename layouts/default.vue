<template>
  <v-app light>

    <v-toolbar fixed app :clipped-left="clipped" color="cyan lighten-2">
      <!--v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>remove</v-icon>
      </v-btn-->

      <nuxt-link to="/"><v-toolbar-title vvv-text="title"></v-toolbar-title></nuxt-link>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/events">Events</v-btn>
        <v-btn flat to="/gn">Jounal</v-btn>
        <v-btn flat to="/lib">Library</v-btn>
      </v-toolbar-items>


      <!--v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn-->


    </v-toolbar>


    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
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
    }
  }
</script>
