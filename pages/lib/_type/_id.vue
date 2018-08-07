<template>
  <v-layout column jjustify-center aalign-center>
    <v-flex xs12 sm8 md6>
    </v-flex>
      <dspace-item :item="item" />
  </v-layout>
</template>

<script>
import DspaceItem from '~/components/DspaceItem.vue';

export default {
  components: {
    DspaceItem
  },
        data() {
            return {
                //item: { title: {}, content: {} }
            };
        },
        fetch(context) {
//          if(process.server) {
            return context.store.dispatch("loadLibItemData", context.params);
//          }
        },
        computed: {
            item() {
                return this.$store.state.libItem;
            }
        },
//        mounted() {
        created() {
//          this.$store.dispatch("loadLibItemData", this.$route.params);
        },

        methods: {
        }

}
</script>
