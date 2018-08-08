<template>
  <v-layout column jjustify-center aalign-center>
      <dspace-item />
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
//       if(process.server) {
//            return context.store.dispatch("loadLibItemData", {});
            return context.store.dispatch("library/loadLibItemData", {});
//            return context.store.dispatch("library/loadLibItemData", context.params);
//        }
    },
//    computed: {
//        item() {
//            return this.$store.state.libItem;
//        }
//    },
    created() {
//        this.$store.dispatch("loadLibItemData", {});
    },

}
</script>
