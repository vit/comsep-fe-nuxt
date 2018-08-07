import Vue from 'vue';
//Vue.use(require('vue-moment'));

//import Vue from 'vue';
//import VueMoment from 'vue-moment';

//Vue.use(VueMoment);


//const moment = require('moment')
import moment from 'moment';

require('moment/locale/ru');
//Vue.use(require('vue-moment'), {
//    moment
//})

//moment.locale('ru');
//moment.locale('en');


import VueMoment from 'vue-moment';
Vue.use(VueMoment, {
    moment
})


//Vue.moment().locale('ru');
//Vue.moment().locale('en');


//Vue.filter('moment2', VueMoment);

