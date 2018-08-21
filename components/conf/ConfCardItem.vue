<template>

      <v-card flat height="100%" ffluid ffill-height tile class="event-card">

        <v-card-title primary-title class="event-card-title" to="/events/asdf">

          <div>

            <v-chip small alert v-if="deadline" style="float: right;" class="chip-pulse">deadline</v-chip>
            <div class="event-dates">
                <span v-if="event.all_day" class="grey--text text-uppercase caption">{{event.start_date | moment("LL")}} &mdash; {{event.end_date | moment("LL")}}</span>
                <span v-if="!event.all_day" class="grey--text text-uppercase caption">{{event.start_date | moment("LL")}}, {{event.start_date | moment("LT")}} &mdash; {{event.end_date | moment("LT")}}</span>
            </div>
            <h3 class="hheadline mmb-0 event-title" v-html="event.title" to="/events/asdf"></h3>
            <div v-html="event.description"></div>
            <div>Categories: {{ event.categories.map(c => c.name) }}</div>
            <div>Tags: {{ event.tags.map(c => c.name) }}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn small flat color="orange">Details</v-btn>
          <v-btn small flat color="orange" v-if="deadline">Submit</v-btn>
          <v-btn small flat color="orange" v-if="deadline">Register</v-btn>
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

      </v-card>


</template>

<script>

//import { mapMutations, mapGetters } from 'vuex'

export default {
    props: ['event'],
    computed: {
      deadline() {
        return this.$moment(this.event.start_date).year() == this.$moment().year();
//        return this.event.start_date;
      }
    }
};

</script>

<style lang="scss" scoped>
    .event-card {
      margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 0px;
    }
    .opaque {
        width: 100%;
        background-image: linear-gradient(to top, rgba(255,255,255,0), rgba(50,50,50,0.5));
    }
    .opaque:hover {
        background-image: linear-gradient(to top, rgba(255,255,255,0.5), rgba(0,0,0,1));
    }
    .event-card {
      padding: 0px 0px 0px 0px;
      margin: 0px 0px 0px 0px;
      background-color: inherit;
    }
    .event-card-title {
      padding: 0px 0px 0px 0px;
      margin: 0px 0px 0px 0px;
    }
    .event-dates {
      margin: 0px 0px 10px 0px;
    }
    .event-title {
      -margin: 10px 0px 10px 0px;
      -padding: 0px 0px 0px 0px;
    }

.chip-pulse {
  background-color: #FF9E80;
  animation-name: color;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

@keyframes color {
  0% {
    background-color: #FF9E80;
  }
  50% {
    background-color: #FF3D00;
  }
  100 {
    background-color: #FF9E80;
  }
}

</style>

