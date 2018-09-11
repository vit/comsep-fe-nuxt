<template>

        <v-list ttwo-line>
          <template v-for="(item, index) in list">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :inset="item.inset"
              :key="index"
            ></v-divider>

            <v-list-tile
              nuxt
              :tto='item.href'
              :hhref='item.href'
              v-bind="item.external ? {'href': item.href} : {'to': item.href}"
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar v-if="item.icon">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>

            </v-list-tile>
          </template>
        </v-list>

</template>

<script>

//import { mapMutations, mapGetters } from 'vuex';

    export default {
        props: [
          'list'
        ],
/*
        data() {
            return {
          //    title: 'COMSEP',
              attrs: {fixed: true, app: true, dense: true, color: "teal lighten-2"},
              user_menu: [
                { header: 'Vitaliy Shiegin' },
                {
                  icon: 'person',
                  title: 'Profile',
                },
                {
                  icon: 'settings',
                  title: 'Settings',
                },
                {
                  icon: 'exit_to_app',
                  title: 'Logout',
                },
                //{ divider: true, inset: true },
              ],
              lib_menu: [
                {
                  icon: 'favorite',
                  title: 'My Favorites',
                  href: '/lib/favorites',
                },
              ],
              home_menu: [
                {
                  icon: 'info',
                  title: 'About',
                  href: '/about',
                },
                {
                  icon: 'email',
                  title: 'Contacts',
                  href: '/contacts',
                },
              ]
            };
        },
*/
};
</script>

