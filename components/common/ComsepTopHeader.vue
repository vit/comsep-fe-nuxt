<template>

      <v-system-bar fixed status v-bind="toolbarAttr" style="height: 28px;">
        <v-spacer></v-spacer>

        <!--v-btn
          iicon
          flat
          small
          sstyle="height: 24px;"
        >
          Log in
        </v-btn-->


        <v-menu offset-y open-on-hover>
            <v-btn
              flat
              small
              to="/"
              slot="activator"
            >
              Log in
            </v-btn>
            <MenuList :list="login_menu" />
        </v-menu>


        <!--v-btn
          icon
          flat
          small
          sstyle="height: 24px;"
        >
          <v-icon ssmall>person</v-icon>
        </v-btn-->

      <v-menu offset-y open-on-hover>
        <v-btn
          icon
          flat
          small
          slot="activator"
        >
          <v-icon>person</v-icon>
        </v-btn>
          <MenuList :list="user_menu" />
      </v-menu>


      </v-system-bar>


    <!--div>

    <v-toolbar fixed app dense v-bind="toolbarAttr" style="top: 28px;">

      <v-toolbar-title v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">

        <v-menu offset-y open-on-hover>
            <v-btn
              flat
              to="/"
              slot="activator"
            >
              Home
            </v-btn>
            <MenuList :list="home_menu" />
        </v-menu>

        <v-btn flat to="/news">News</v-btn>
        <v-btn flat to="/events">Events</v-btn>

        <v-menu offset-y open-on-hover>
            <v-btn
              flat
              to="/gn"
              slot="activator"
            >
              Journal
            </v-btn>
            <MenuList :list="gn_menu" />
        </v-menu>

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
        </v-menu>

      </v-toolbar-items>

      <v-btn
        title="Log in"
        icon
        flat
        ffab
        sslot="activator"
        ccolor="primary"
        ddark
        to="/auth/google"
      >
        <v-icon>exit_to_app</v-icon>
      </v-btn>


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
      </v-menu>

    </v-toolbar>


    </div-->

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
//                  icon: 'exit_to_app',
                  icon: 'power_settings_new',
                  title: 'Logout',
                  href: '/api/logout'
                },
                //{ divider: true, inset: true },
              ],
              login_menu: [
                {
                  //icon: 'info',
                  title: 'Use Google account',
                  href: '/auth/google',
                  external: true
                },
              ]
            };
        },
};
</script>

