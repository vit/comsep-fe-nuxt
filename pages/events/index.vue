<template>

  <!--v-container grid-list-md ttext-xs-center-->
    <!--v-layout row wrap flex-->
    <div>
      <h1 class="text-xs-center display-2">Conferences</h1>

      <Timeline>
        <template v-for="event in events">
          <!--div>{{event.type}}</div-->
          <TimelineBlock v-if="event.type==='item'" :deadline="event.deadline" :key="event.item.id">
            <ConfCardItem :event="event.item" />
            <!--ConfCardItem :event="event.item" :deadline="true" /-->
          </TimelineBlock>
          <h2 v-if="event.type==='year'" class="ttext-xs-center display-1 year">{{event.year}}</h2>
        </template>
      </Timeline>

    </div>
  <!--/v-layout-->

<!--/v-container-->

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

import ConfCardItem from '@/components/conf/ConfCardItem';
import TimelineBlock from "@/components/c/TimelineBlock";
import Timeline from "@/components/c/Timeline";

export default {

    components: {
      ConfCardItem,
      TimelineBlock,
      Timeline
    },

    data () {
      return {
      };
    },
    computed: {
      events() {
        return this.$store.state.events
//          .slice(0)
//          .reverse()
          .reduce((acc, item) => {
            const year = this.$moment(item.start_date).year();
            const arr = acc.arr;
            if(acc.year != year) {
              arr.push({type: 'year', year});
            }
            arr.push({type: 'item', item, deadline: this.$moment(item.start_date).year() == this.$moment().year()});
//            arr.push({type: 'item', item});
            const res = {year, arr};
            return res;
          }, {year: null, arr: []}).arr;
      }
    }
    
};
</script>


<style scoped lang="scss">
  .confCard {
  }
  h1 {
    margin: 10px 0px 25px 0px;
  }
  h2.year {
    margin: 25px 0px 25px 24px;
  }
</style>