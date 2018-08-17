<template>

    <div>

  <v-footer
    app
    dark
    absolute
    height="auto"
  >

    <v-layout
      justify-center
      row
      wrap
    >

      <v-flex
        primary
        lighten-2
        py-1
        text-xs-center
        white--text
        xs12
      >
        <v-btn
          v-for="link in links"
          nuxt
          :key="link.to"
          :to="link.to"
          color="white"
          flat
          round
        >
          {{ link.name }}
        </v-btn>
      </v-flex>

    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>CSRI Elektropribor</strong>



      </v-card-actions>
    </v-card>

    </v-layout>


  </v-footer>



    </div>

</template>

<script>

//import { mapMutations, mapGetters } from 'vuex'

    export default {
        props: ['color'],
        data() {
            return {
                links: [
                  {name: 'Home', to: "/"},
                  {name: 'About', to: "/about"},
                  {name: 'News', to: "/news"},
                  {name: 'Contacts', to: "/contacts"},
                  {name: 'Terms of Service', to: "/tos"},
                ],
                icons: [
                  'facebook-box',
        //          'fab fa-facebook',
                  'fab fa-twitter',
                  'fab fa-google-plus',
                  'fab fa-linkedin',
                  'fab fa-instagram'
                ],
            };
        },
};
</script>

