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
          tto="/"
          slot="activator"
        >
          Log in
        </v-btn>
        <MenuList :list="login_menu" />
    </v-menu>

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
                  href: '/api/logout',
                  external: true
                },
                //{ divider: true, inset: true },
              ],
              login_menu: [
                {
                  icon_fab: 'faGoogle',
                  title: 'Sign in with Google',
                  href: '/auth/google',
                  external: true
                },
                {
                  icon_fab: 'faFacebookF',
                  title: 'Sign in with Facebook',
                  href: '/auth/facebook',
                  external: true
                },
                {
                  icon_fab: 'faVk',
                  title: 'Sign in with VKontakte',
                  href: '/auth/vkontakte',
                  external: true
                },

              ]
            };
        },
};
</script>

