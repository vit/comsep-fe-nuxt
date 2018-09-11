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
        <v-list-tile-avatar v-if="item.icon_fab">
          <fa :icon="fab[item.icon_fab]" />
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

import { fab } from '@fortawesome/free-brands-svg-icons'

    export default {
        props: [
          'list'
        ],
        computed: {
          fab () {
             return fab
          }
        }
};
</script>

