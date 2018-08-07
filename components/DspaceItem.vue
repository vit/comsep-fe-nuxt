<template>
    <div v-if="item">

<!--div>{{ JSON.stringify(item.ancestors) }}</div-->

        <!--div v-if="item.uuid">
            <a :href="'/'">Root</a> &gt;
            <span v-for="ancestor in item.ancestors"><a :href="'/' + ancestor.type + '/' + ancestor.uuid">{{ ancestor.name }}</a> &gt;</span>
        </div-->
        <div v-if="item.uuid">
            <nuxt-link :to="'/lib'">Root</nuxt-link> &gt;
            <span v-for="ancestor in item.ancestors"><nuxt-link :to="'/lib/' + ancestor.type + '/' + ancestor.uuid">{{ ancestor.name }}</nuxt-link> &gt;</span>
        </div>

        <h1>{{ item.name || "Electronic Library" }}</h1>

        <div v-if="item.communities && item.communities.length > 0">
            <h2>Communities</h2>
            <ul>
                <li v-for="val in item.communities">
                        <!--a :href="'/communities/'+val.uuid">{{ val.name }}</a-->
                        <nuxt-link :to="'/lib/communities/'+val.uuid">{{ val.name }}</nuxt-link>
    
                </li>
            
            </ul>
        </div>

        <div v-if="item.collections && item.collections.length > 0">
            <h2>Collections</h2>
            <ul>
                <li v-for="val in item.collections">
                        <!--a :href="'/collections/'+val.uuid">{{ val.name }}</a-->
                        <nuxt-link :to="'/lib/collections/'+val.uuid">{{ val.name }}</nuxt-link>
    
                </li>
            
            </ul>
        </div>

        <div v-if="item.items && item.items.length > 0">
            <h2>Items</h2>
            <ul>
                <li v-for="val in item.items">
                        <!--a :href="'/items/'+val.uuid">{{ val.name }}</a-->
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

//import { connect } from '@billypilgrim/dspace-rest-js';
//const conn = connect("https://dspace.spbu.ru", "/rest");

//            console.log("<script>");


    export default {
        props: ['item'],
        data() {
            return {
                //item: { title: {}, content: {} }
            };
/*
        },
        asyncData(context) {
    
            console.log("asyncData(context)");
    
            return conn.getItem()
                .then( item => {
                    console.log("getItem()");
                    console.log(item);
                    return {
                        item: item
                    };
                });
*/
        }
    };


</script>
