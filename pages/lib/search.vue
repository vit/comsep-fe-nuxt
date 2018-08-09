<template>

    <v-layout md12>
        <v-flex xs12>
        
<div class="display-2 text-xs-center">Library search is not implemented yet, sorry</div>

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
            console.log( context.query );
            if( context.query && context.query.q ) {
                return context.store.dispatch("library/findLibItems", context.route.query);
            }
        },
        created() {
        },
        methods: {
            onSave(e) {
//                console.log(e);
            }
        },
        layout: 'library'
    };

</script>

<style scoped>
.form, .input {
    -max-width: 300px;
    -width: 200px;
}
</style>
