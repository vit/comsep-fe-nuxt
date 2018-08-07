<template>

  <v-container grid-list-md ttext-xs-center>
    <v-layout row wrap flex>


    <v-flex v-for="event in $store.state.events" xs12 sm6 :key="event.id">
      <v-card height="100%" ffluid ffill-height>
        <!--v-card-media
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          height="200px"
        ></v-card-media-->

        <v-card-title primary-title>
          <div>
            <h3 class="hheadline mmb-0" v-html="event.title"></h3>
            <!--div><span>{{event.start_date | moment("dddd, MMMM Do YYYY")}}</span></div-->
            <div>
                <span v-if="event.all_day">{{event.start_date | moment("LL")}} &mdash; {{event.end_date | moment("LL")}}</span>
                <span v-if="!event.all_day">{{event.start_date | moment("LL")}}, {{event.start_date | moment("LT")}} &mdash; {{event.end_date | moment("LT")}}</span>
            </div>
            <div v-html="event.description"></div>
            <div>Categories: {{ event.categories.map(c => c.name) }}</div>
            <div>Tags: {{ event.tags.map(c => c.name) }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

</v-layout>

</v-container>

</template>



<script>
//import Vue from 'vue';
//Vue.use(require('vue-moment'));

//const moment = require('moment')
//require('moment/locale/ru')
//Vue.use(require('vue-moment'), {
//    moment
//})

//Vue.moment().locale('ru');
//Vue.moment().locale('en');
//this.$moment.locale(myNewLocale);

//console.log(Vue.moment().locale());

export default {
    
}
</script>