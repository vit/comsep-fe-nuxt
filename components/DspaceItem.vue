<template>

    <div v-if="item">
        <div v-if="item.uuid">
            <nuxt-link :to="'/lib'">Root</nuxt-link> &gt;
            <span v-for="ancestor in item.ancestors"><nuxt-link :to="'/lib/' + ancestor.type + '/' + ancestor.uuid">{{ ancestor.name }}</nuxt-link> &gt;</span>
        </div>

        <h1>{{ item.name || "Electronic Library" }}</h1>

        <div v-if="item.communities && item.communities.length > 0">
            <h2>Communities</h2>
            <ul>
                <li v-for="val in item.communities">
                        <nuxt-link :to="'/lib/communities/'+val.uuid">{{ val.name }}</nuxt-link>
                </li>
            </ul>
        </div>

        <div v-if="item.collections && item.collections.length > 0">
            <h2>Collections</h2>
            <ul>
                <li v-for="val in item.collections">
                        <nuxt-link :to="'/lib/collections/'+val.uuid">{{ val.name }}</nuxt-link>
                </li>
            </ul>
        </div>

        <div v-if="item.items && item.items.length > 0">
            <h2>Items</h2>
            <ul>
                <li v-for="val in item.items">
                        <nuxt-link :to="'/lib/items/'+val.uuid">{{ val.name }}</nuxt-link>
                </li>
            </ul>
        </div>

        <div v-if="item.metadata && item.metadata.length > 0">
            <h2>Metadata</h2>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="val in item.metadata">
                        <td>{{val.key}}</td>
                        <td>{{val.value}}</td>
                        <td>{{val.language}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'


    export default {
//        props: ['item'],
        data() {
            return {
            };
        },
        fetch(context) {
//          if(process.server) {
//            return context.store.dispatch("library/loadLibItemData", context.params);
//            return context.store.dispatch("loadLibItemData", context.params);
//          }
        },
//        computed: {
//            item() {
//                return this.$store.state.libItem;
//            }
//        },
        computed: mapGetters({
            item: 'library/item'
//            item: 'libItem'
        }),
//        mounted() {
        created() {
//          this.$store.dispatch("loadLibItemData", this.$route.params);
        },

        methods: {
        }

}
</script>

