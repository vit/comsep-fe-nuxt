<template>

    <v-layout md12 class="pa-2">
        <v-flex xs12 sm6 offset-sm3>
        
            <v-form ref="form" @submit.prevent="onSave">
                <v-text-field
                    v-model="query"
                    label="Library Search"
                    append-icon="search"
                ></v-text-field>
            </v-form>

        </v-flex>

    </v-layout>
</template>

<script>

//import { mapMutations, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                query: null
            };
        },
        fetch(context) {
        },
        created() {
        },
        methods: {
            onSave(e) {
//                    console.log( this.query );
                if( this.query ) {
//                    console.log(e);
//                    this.$router.push({ name: '/lib/search', path: '/lib/search', query: { q: this.query } });
                    this.$router.push({ path: '/lib/search', query: { q: this.query } });
                }
            }
        }
}
</script>

<style scoped>
</style>
