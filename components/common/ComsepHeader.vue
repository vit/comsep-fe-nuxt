<template>

    <div>

    <v-toolbar fixed app dense v-bind="toolbarAttr">

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <!--v-btn flat to="/">Home</v-btn-->


    <v-menu offset-y open-on-hover>
        <v-btn
          flat
          to="/"
          slot="activator"
          сcolor='deep-orange accent-4'
        >
          Home
        </v-btn>


        <MenuList :list="home_menu" />

        <!--v-list ttwo-line>
          <template v-for="(item, index) in home_menu">
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
              :to='item.href'
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>

            </v-list-tile>
          </template>
        </v-list-->


    </v-menu>




        <v-btn flat to="/events">Events</v-btn>
        <v-btn flat to="/gn">Journal</v-btn>
        <!--v-btn flat to="/lib">Library</v-btn-->






    <v-menu offset-y open-on-hover>
        <v-btn
          flat
          to="/lib"
          slot="activator"
          color='deep-orange accent-4'
        >
          Library
        </v-btn>

        <MenuList :list="lib_menu" />

        <!--v-list ttwo-line>
          <template v-for="(item, index) in lib_menu">
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
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>

            </v-list-tile>
          </template>
        </v-list-->


    </v-menu>











      </v-toolbar-items>

        <!--v-btn
          icon
          ffab
        >
          <v-icon>bookmark</v-icon>
        </v-btn-->

      <!--v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn-->

    <v-menu offset-y open-on-hover>
      <v-btn
        icon
        flat
        ffab
        slot="activator"
        ccolor="primary"
        ddark
      >
        <v-icon>person</v-icon>
      </v-btn>

        <MenuList :list="user_menu" />


        <!--v-list ttwo-line>
          <template v-for="(item, index) in user_menu">
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
              v-else
              :key="item.title"
              avatar
              @click=""
            >
              <v-list-tile-avatar>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>

            </v-list-tile>
          </template>
        </v-list-->


    </v-menu>

    </v-toolbar>



    </div>

</template>

<script>

import MenuList from '~/components/common/MenuList.vue';

    export default {
        props: [
          'toolbarAttr',
          'title'
        ],
        components: {
          MenuList
        },
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
};
</script>

