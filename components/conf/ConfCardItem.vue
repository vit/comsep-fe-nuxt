<template>

      <v-card height="100%" ffluid ffill-height>
        <v-card-media
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          height="200px"
        >
          <div class="opaque">
        <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon flat color="orange">
                    <v-icon>star_border</v-icon>
                  </v-btn>
                  <v-btn icon flat color="orange">
                    <v-icon>favorite_border</v-icon>
                  </v-btn>
                  <v-btn icon flat color="orange">
                    <v-icon>bookmark_border</v-icon>
                  </v-btn>
        </v-card-actions>
          </div>

        </v-card-media>

        <v-card-title primary-title>

          <div>

            <h3 class="hheadline mmb-0" v-html="event.title"></h3>
            <div>
                <span v-if="event.all_day" class="grey--text">{{event.start_date | moment("LL")}} &mdash; {{event.end_date | moment("LL")}}</span>
                <span v-if="!event.all_day" class="grey--text">{{event.start_date | moment("LL")}}, {{event.start_date | moment("LT")}} &mdash; {{event.end_date | moment("LT")}}</span>
            </div>
            <div v-html="event.description"></div>
            <div>Categories: {{ event.categories.map(c => c.name) }}</div>
            <div>Tags: {{ event.tags.map(c => c.name) }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
                  <v-spacer></v-spacer>
          <v-btn flat color="orange">Details</v-btn>
          <v-btn flat color="orange">Submit</v-btn>
          <v-btn flat color="orange">Register</v-btn>
        </v-card-actions>

      </v-card>


</template>

<script>

//import { mapMutations, mapGetters } from 'vuex'

export default {
    props: ['event'],
};

</script>

<style scoped>
    .opaque {
        width: 100%;
        background-image: linear-gradient(to top, rgba(255,255,255,0), rgba(50,50,50,0.5));
    }
    .opaque:hover {
        background-image: linear-gradient(to top, rgba(255,255,255,0.5), rgba(0,0,0,1));
    }
</style>

