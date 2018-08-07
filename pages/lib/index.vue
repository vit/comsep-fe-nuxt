<template>
  <v-layout column jjustify-center aalign-center>
      <dspace-item :item="item" />
  </v-layout>
</template>

<script>
import DspaceItem from '~/components/DspaceItem.vue';

//import { connect } from '@billypilgrim/dspace-rest-js';

//import dspace from '@billypilgrim/dspace-rest-js';

//const conn = connect("https://dspace.spbu.ru", "/rest");
//const conn = connect("https://lib-nuxt-vit2.c9users.io", "/dspace/rest");
//const conn = connect("https://nuxt-vit2.c9users.io", "/dspace/rest");

//const conn = dspace.connect("https://nuxt-vit2.c9users.io", "/dspace/rest");

//const conn = connect("https://dspace.comsep.ru", "/rest");



//console.log("<script>");


export default {
  components: {
    DspaceItem
  },
        data() {
            return {
                //item: { title: {}, content: {} }
            };
        },
//        asyncData(context) {
        fetch(context) {
//            if(process.server) {
                return context.store.dispatch("loadLibItemData", {});
//            }
        },
        computed: {
            item() {
                return this.$store.state.libItem;
            }
        },
        created() {
//            this.$store.dispatch("loadLibItemData", {});
        },

}
</script>
