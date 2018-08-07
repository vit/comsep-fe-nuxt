
import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

import {connect} from '@billypilgrim/dspace-rest-js';
const libConn = connect(process.env.libServerURL, process.env.libServerPath);


      const getItemData = e => {
        {
//          return {id: e.id, link: e.link.replace("https://acanud.ru", ""), title: e.title.rendered};
          return {id: e.id, link: e.link.replace("https://comsep-wp-vit2.c9users.io", ""), title: e.title.rendered};
        }
      };


const store = () => new Vuex.Store({

    state: {
        pages: [
        ],
        events: [
            {"id":138,"global_id":"acanud.ru?id=138","global_id_lineage":["acanud.ru?id=138"],"author":"1","status":"publish","date":"2017-01-01 20:00:55","date_utc":"2017-01-01 17:00:55","modified":"2018-03-11 02:51:37","modified_utc":"2018-03-10 23:51:37","url":"https:\/\/acanud.ru\/event\/cys-2017\/","rest_url":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/events\/138","title":"XIX \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044f \u043c\u043e\u043b\u043e\u0434\u044b\u0445 \u0443\u0447\u0435\u043d\u044b\u0445 &#171;\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0435\u043c&#187; (\u041a\u041c\u0423 2017)","description":"","excerpt":"","slug":"cys-2017","image":false,"all_day":true,"start_date":"2017-03-14 00:00:00","start_date_details":{"year":"2017","month":"03","day":"14","hour":"00","minutes":"00","seconds":"00"},"end_date":"2017-03-17 23:59:59","end_date_details":{"year":"2017","month":"03","day":"17","hour":"23","minutes":"59","seconds":"59"},"utc_start_date":"2017-03-13 21:00:00","utc_start_date_details":{"year":"2017","month":"03","day":"13","hour":"21","minutes":"00","seconds":"00"},"utc_end_date":"2017-03-17 20:59:59","utc_end_date_details":{"year":"2017","month":"03","day":"17","hour":"20","minutes":"59","seconds":"59"},"timezone":"UTC+3","timezone_abbr":"UTC+3","cost":"","cost_details":{"currency_symbol":"","currency_position":"prefix","values":[]},"website":"http:\/\/elektropribor.spb.ru\/kmu2017\/","show_map":true,"show_map_link":false,"hide_from_listings":false,"sticky":false,"featured":false,"categories":[{"name":"\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438","slug":"conferences","term_group":0,"term_taxonomy_id":4,"taxonomy":"tribe_events_cat","description":"","parent":0,"count":6,"filter":"raw",
                "id":4,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories\/4","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories"}}],"tags":[{"name":"2017","slug":"2017","term_group":0,"term_taxonomy_id":15,"taxonomy":"post_tag","description":"","parent":0,"count":4,"filter":"raw",
                "id":15,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/15","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"\u041a\u041c\u0423","slug":"%d0%ba%d0%bc%d1%83","term_group":0,"term_taxonomy_id":16,"taxonomy":"post_tag","description":"","parent":0,"count":1,"filter":"raw",
                "id":16,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/16","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}}],"venue":{"id":127,"author":"1","status":"publish","date":"2018-03-10 19:49:44","date_utc":"2018-03-10 16:49:44","modified":"2018-03-10 19:53:55","modified_utc":"2018-03-10 16:53:55","url":"https:\/\/acanud.ru\/%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F\/127\/","venue":"\u0426\u041d\u0418\u0418 &#171;\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u0440\u0438\u0431\u043e\u0440&#187;","slug":"127","address":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u041c\u0430\u043b\u0430\u044f \u041f\u043e\u0441\u0430\u0434\u0441\u043a\u0430\u044f, 30.","city":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","country":"Russian Federation","phone":"+7 (812) 499 82 10","website":"http:\/\/elektropribor.spb.ru\/","show_map":true,"show_map_link":true,"global_id":"acanud.ru?id=127","global_id_lineage":["acanud.ru?id=127"]},"organizer":[]},
            {"id":136,"global_id":"acanud.ru?id=136","global_id_lineage":["acanud.ru?id=136"],"author":"1","status":"publish","date":"2017-01-01 20:00:02","date_utc":"2017-01-01 17:00:02","modified":"2018-03-11 02:50:54","modified_utc":"2018-03-10 23:50:54","url":"https:\/\/acanud.ru\/event\/icins-2017\/","rest_url":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/events\/136","title":"XXIV \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044f \u043f\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c (\u041c\u041a\u0418\u041d\u0421 2017)","description":"","excerpt":"","slug":"icins-2017","image":false,"all_day":true,"start_date":"2017-05-29 00:00:00","start_date_details":{"year":"2017","month":"05","day":"29","hour":"00","minutes":"00","seconds":"00"},"end_date":"2017-05-31 23:59:59","end_date_details":{"year":"2017","month":"05","day":"31","hour":"23","minutes":"59","seconds":"59"},"utc_start_date":"2017-05-28 21:00:00","utc_start_date_details":{"year":"2017","month":"05","day":"28","hour":"21","minutes":"00","seconds":"00"},"utc_end_date":"2017-05-31 20:59:59","utc_end_date_details":{"year":"2017","month":"05","day":"31","hour":"20","minutes":"59","seconds":"59"},"timezone":"UTC+3","timezone_abbr":"UTC+3","cost":"","cost_details":{"currency_symbol":"","currency_position":"prefix","values":[]},"website":"http:\/\/www.elektropribor.spb.ru\/icins2017\/rindex","show_map":true,"show_map_link":false,"hide_from_listings":false,"sticky":false,"featured":false,"categories":[{"name":"\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438","slug":"conferences","term_group":0,"term_taxonomy_id":4,"taxonomy":"tribe_events_cat","description":"","parent":0,"count":6,"filter":"raw",
                "id":4,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories\/4","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories"}}],"tags":[{"name":"2017","slug":"2017","term_group":0,"term_taxonomy_id":15,"taxonomy":"post_tag","description":"","parent":0,"count":4,"filter":"raw",
                "id":15,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/15","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"ICINS","slug":"icins","term_group":0,"term_taxonomy_id":9,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":9,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/9","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"\u041c\u041a\u0418\u041d\u0421","slug":"%d0%bc%d0%ba%d0%b8%d0%bd%d1%81","term_group":0,"term_taxonomy_id":10,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":10,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/10","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}}],"venue":{"id":127,"author":"1","status":"publish","date":"2018-03-10 19:49:44","date_utc":"2018-03-10 16:49:44","modified":"2018-03-10 19:53:55","modified_utc":"2018-03-10 16:53:55","url":"https:\/\/acanud.ru\/%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F\/127\/","venue":"\u0426\u041d\u0418\u0418 &#171;\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u0440\u0438\u0431\u043e\u0440&#187;","slug":"127","address":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u041c\u0430\u043b\u0430\u044f \u041f\u043e\u0441\u0430\u0434\u0441\u043a\u0430\u044f, 30.","city":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","country":"Russian Federation","phone":"+7 (812) 499 82 10","website":"http:\/\/elektropribor.spb.ru\/","show_map":true,"show_map_link":true,"global_id":"acanud.ru?id=127","global_id_lineage":["acanud.ru?id=127"]},"organizer":[]},
            {"id":134,"global_id":"acanud.ru?id=134","global_id_lineage":["acanud.ru?id=134"],"author":"1","status":"publish","date":"2018-01-01 20:00:59","date_utc":"2018-01-01 17:00:59","modified":"2018-03-11 02:49:59","modified_utc":"2018-03-10 23:49:59","url":"https:\/\/acanud.ru\/event\/icins-2018\/","rest_url":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/events\/134","title":"\u042e\u0431\u0438\u043b\u0435\u0439\u043d\u0430\u044f XXV \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044f \u043f\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c (\u041c\u041a\u0418\u041d\u0421 2018)","description":"","excerpt":"","slug":"icins-2018","image":false,"all_day":true,"start_date":"2018-05-28 00:00:00","start_date_details":{"year":"2018","month":"05","day":"28","hour":"00","minutes":"00","seconds":"00"},"end_date":"2018-05-30 23:59:59","end_date_details":{"year":"2018","month":"05","day":"30","hour":"23","minutes":"59","seconds":"59"},"utc_start_date":"2018-05-27 21:00:00","utc_start_date_details":{"year":"2018","month":"05","day":"27","hour":"21","minutes":"00","seconds":"00"},"utc_end_date":"2018-05-30 20:59:59","utc_end_date_details":{"year":"2018","month":"05","day":"30","hour":"20","minutes":"59","seconds":"59"},"timezone":"UTC+3","timezone_abbr":"UTC+3","cost":"","cost_details":{"currency_symbol":"","currency_position":"prefix","values":[]},"website":"http:\/\/elektropribor.spb.ru\/icins2018\/rindex","show_map":true,"show_map_link":false,"hide_from_listings":false,"sticky":false,"featured":false,"categories":[{"name":"\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438","slug":"conferences","term_group":0,"term_taxonomy_id":4,"taxonomy":"tribe_events_cat","description":"","parent":0,"count":6,"filter":"raw",
                "id":4,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories\/4","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories"}}],"tags":[{"name":"2018","slug":"2018","term_group":0,"term_taxonomy_id":14,"taxonomy":"post_tag","description":"","parent":0,"count":2,"filter":"raw",
                "id":14,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/14","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"ICINS","slug":"icins","term_group":0,"term_taxonomy_id":9,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":9,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/9","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"\u041c\u041a\u0418\u041d\u0421","slug":"%d0%bc%d0%ba%d0%b8%d0%bd%d1%81","term_group":0,"term_taxonomy_id":10,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":10,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/10","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}}],"venue":{"id":127,"author":"1","status":"publish","date":"2018-03-10 19:49:44","date_utc":"2018-03-10 16:49:44","modified":"2018-03-10 19:53:55","modified_utc":"2018-03-10 16:53:55","url":"https:\/\/acanud.ru\/%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F\/127\/","venue":"\u0426\u041d\u0418\u0418 &#171;\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u0440\u0438\u0431\u043e\u0440&#187;","slug":"127","address":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u041c\u0430\u043b\u0430\u044f \u041f\u043e\u0441\u0430\u0434\u0441\u043a\u0430\u044f, 30.","city":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","country":"Russian Federation","phone":"+7 (812) 499 82 10","website":"http:\/\/elektropribor.spb.ru\/","show_map":true,"show_map_link":true,"global_id":"acanud.ru?id=127","global_id_lineage":["acanud.ru?id=127"]},"organizer":[]},
            {"id":132,"global_id":"acanud.ru?id=132","global_id_lineage":["acanud.ru?id=132"],"author":"1","status":"publish","date":"2018-01-01 21:00:51","date_utc":"2018-01-01 18:00:51","modified":"2018-03-11 02:49:29","modified_utc":"2018-03-10 23:49:29","url":"https:\/\/acanud.ru\/event\/icins-2019\/","rest_url":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/events\/132","title":"XXVI \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044f \u043f\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c (\u041c\u041a\u0418\u041d\u0421 2019)","description":"","excerpt":"","slug":"icins-2019","image":false,"all_day":true,"start_date":"2019-05-27 00:00:00","start_date_details":{"year":"2019","month":"05","day":"27","hour":"00","minutes":"00","seconds":"00"},"end_date":"2019-05-29 23:59:59","end_date_details":{"year":"2019","month":"05","day":"29","hour":"23","minutes":"59","seconds":"59"},"utc_start_date":"2019-05-26 21:00:00","utc_start_date_details":{"year":"2019","month":"05","day":"26","hour":"21","minutes":"00","seconds":"00"},"utc_end_date":"2019-05-29 20:59:59","utc_end_date_details":{"year":"2019","month":"05","day":"29","hour":"20","minutes":"59","seconds":"59"},"timezone":"UTC+3","timezone_abbr":"UTC+3","cost":"","cost_details":{"currency_symbol":"","currency_position":"prefix","values":[]},"website":"http:\/\/elektropribor.spb.ru\/icins2019\/ru","show_map":true,"show_map_link":false,"hide_from_listings":false,"sticky":false,"featured":false,"categories":[{"name":"\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438","slug":"conferences","term_group":0,"term_taxonomy_id":4,"taxonomy":"tribe_events_cat","description":"","parent":0,"count":6,"filter":"raw",
                "id":4,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories\/4","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories"}}],"tags":[{"name":"2019","slug":"2019","term_group":0,"term_taxonomy_id":13,"taxonomy":"post_tag","description":"","parent":0,"count":1,"filter":"raw",
                "id":13,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/13","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"ICINS","slug":"icins","term_group":0,"term_taxonomy_id":9,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":9,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/9","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"\u041c\u041a\u0418\u041d\u0421","slug":"%d0%bc%d0%ba%d0%b8%d0%bd%d1%81","term_group":0,"term_taxonomy_id":10,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":10,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/10","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}}],"venue":{"id":127,"author":"1","status":"publish","date":"2018-03-10 19:49:44","date_utc":"2018-03-10 16:49:44","modified":"2018-03-10 19:53:55","modified_utc":"2018-03-10 16:53:55","url":"https:\/\/acanud.ru\/%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F\/127\/","venue":"\u0426\u041d\u0418\u0418 &#171;\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u0440\u0438\u0431\u043e\u0440&#187;","slug":"127","address":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u041c\u0430\u043b\u0430\u044f \u041f\u043e\u0441\u0430\u0434\u0441\u043a\u0430\u044f, 30.","city":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","country":"Russian Federation","phone":"+7 (812) 499 82 10","website":"http:\/\/elektropribor.spb.ru\/","show_map":true,"show_map_link":true,"global_id":"acanud.ru?id=127","global_id_lineage":["acanud.ru?id=127"]},"organizer":[]},
            {"id":120,"global_id":"acanud.ru?id=120","global_id_lineage":["acanud.ru?id=120"],"author":"1","status":"publish","date":"2018-01-01 22:00:55","date_utc":"2018-01-01 19:00:55","modified":"2018-03-11 02:49:13","modified_utc":"2018-03-10 23:49:13","url":"https:\/\/acanud.ru\/event\/icins-2020\/","rest_url":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/events\/120","title":"XXVII \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044f \u043f\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c (\u041c\u041a\u0418\u041d\u0421 2020)","description":"","excerpt":"","slug":"icins-2020","image":false,"all_day":true,"start_date":"2020-05-25 00:00:00","start_date_details":{"year":"2020","month":"05","day":"25","hour":"00","minutes":"00","seconds":"00"},"end_date":"2020-05-27 23:59:59","end_date_details":{"year":"2020","month":"05","day":"27","hour":"23","minutes":"59","seconds":"59"},"utc_start_date":"2020-05-24 21:00:00","utc_start_date_details":{"year":"2020","month":"05","day":"24","hour":"21","minutes":"00","seconds":"00"},"utc_end_date":"2020-05-27 20:59:59","utc_end_date_details":{"year":"2020","month":"05","day":"27","hour":"20","minutes":"59","seconds":"59"},"timezone":"UTC+3","timezone_abbr":"UTC+3","cost":"","cost_details":{"currency_symbol":"","currency_position":"prefix","values":[]},"website":"http:\/\/elektropribor.spb.ru\/icins2020\/ru","show_map":true,"show_map_link":false,"hide_from_listings":false,"sticky":false,"featured":false,"categories":[{"name":"\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438","slug":"conferences","term_group":0,"term_taxonomy_id":4,"taxonomy":"tribe_events_cat","description":"","parent":0,"count":6,"filter":"raw",
                "id":4,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories\/4","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories"}}],"tags":[{"name":"2020","slug":"2020","term_group":0,"term_taxonomy_id":11,"taxonomy":"post_tag","description":"","parent":0,"count":1,"filter":"raw",
                "id":11,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/11","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"ICINS","slug":"icins","term_group":0,"term_taxonomy_id":9,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":9,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/9","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"\u041c\u041a\u0418\u041d\u0421","slug":"%d0%bc%d0%ba%d0%b8%d0%bd%d1%81","term_group":0,"term_taxonomy_id":10,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":10,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/10","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}}],"venue":{"id":127,"author":"1","status":"publish","date":"2018-03-10 19:49:44","date_utc":"2018-03-10 16:49:44","modified":"2018-03-10 19:53:55","modified_utc":"2018-03-10 16:53:55","url":"https:\/\/acanud.ru\/%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F\/127\/","venue":"\u0426\u041d\u0418\u0418 &#171;\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u0440\u0438\u0431\u043e\u0440&#187;","slug":"127","address":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u041c\u0430\u043b\u0430\u044f \u041f\u043e\u0441\u0430\u0434\u0441\u043a\u0430\u044f, 30.","city":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","country":"Russian Federation","phone":"+7 (812) 499 82 10","website":"http:\/\/elektropribor.spb.ru\/","show_map":true,"show_map_link":true,"global_id":"acanud.ru?id=127","global_id_lineage":["acanud.ru?id=127"]},"organizer":[]},
            {"id":118,"global_id":"acanud.ru?id=118","global_id_lineage":["acanud.ru?id=118"],"author":"1","status":"publish","date":"2018-01-01 23:00:16","date_utc":"2018-01-01 20:00:16","modified":"2018-03-11 02:48:52","modified_utc":"2018-03-10 23:48:52","url":"https:\/\/acanud.ru\/event\/icins-2021\/","rest_url":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/events\/118","title":"XXVIII \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043a\u0430\u044f \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u044f \u043f\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c (\u041c\u041a\u0418\u041d\u0421 2021)","description":"","excerpt":"","slug":"icins-2021","image":false,"all_day":true,"start_date":"2021-05-31 00:00:00","start_date_details":{"year":"2021","month":"05","day":"31","hour":"00","minutes":"00","seconds":"00"},"end_date":"2021-06-02 23:59:59","end_date_details":{"year":"2021","month":"06","day":"02","hour":"23","minutes":"59","seconds":"59"},"utc_start_date":"2021-05-30 21:00:00","utc_start_date_details":{"year":"2021","month":"05","day":"30","hour":"21","minutes":"00","seconds":"00"},"utc_end_date":"2021-06-02 20:59:59","utc_end_date_details":{"year":"2021","month":"06","day":"02","hour":"20","minutes":"59","seconds":"59"},"timezone":"UTC+3","timezone_abbr":"UTC+3","cost":"","cost_details":{"currency_symbol":"","currency_position":"prefix","values":[]},"website":"http:\/\/elektropribor.spb.ru\/icins2021\/ru","show_map":true,"show_map_link":false,"hide_from_listings":false,"sticky":false,"featured":false,"categories":[{"name":"\u041a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438","slug":"conferences","term_group":0,"term_taxonomy_id":4,"taxonomy":"tribe_events_cat","description":"","parent":0,"count":6,"filter":"raw",
                "id":4,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories\/4","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/categories"}}],"tags":[{"name":"2021","slug":"2021","term_group":0,"term_taxonomy_id":12,"taxonomy":"post_tag","description":"","parent":0,"count":1,"filter":"raw",
                "id":12,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/12","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"ICINS","slug":"icins","term_group":0,"term_taxonomy_id":9,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":9,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/9","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}},{"name":"\u041c\u041a\u0418\u041d\u0421","slug":"%d0%bc%d0%ba%d0%b8%d0%bd%d1%81","term_group":0,"term_taxonomy_id":10,"taxonomy":"post_tag","description":"","parent":0,"count":5,"filter":"raw",
                "id":10,"urls":{"self":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags\/10","collection":"https:\/\/acanud.ru\/wp-json\/tribe\/events\/v1\/tags"}}],"venue":{"id":127,"author":"1","status":"publish","date":"2018-03-10 19:49:44","date_utc":"2018-03-10 16:49:44","modified":"2018-03-10 19:53:55","modified_utc":"2018-03-10 16:53:55","url":"https:\/\/acanud.ru\/%D0%BC%D0%B5%D1%81%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F\/127\/","venue":"\u0426\u041d\u0418\u0418 &#171;\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043f\u0440\u0438\u0431\u043e\u0440&#187;","slug":"127","address":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0443\u043b. \u041c\u0430\u043b\u0430\u044f \u041f\u043e\u0441\u0430\u0434\u0441\u043a\u0430\u044f, 30.","city":"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433","country":"Russian Federation","phone":"+7 (812) 499 82 10","website":"http:\/\/elektropribor.spb.ru\/","show_map":true,"show_map_link":true,"global_id":"acanud.ru?id=127","global_id_lineage":["acanud.ru?id=127"]},"organizer":[]}
        ]
    },
    mutations: {
        LOAD_PAGES(state, pages) {
            state.pages = pages
        },
        SET_LIB_ITEM(state, item) {
            state.libItem = item
        }
    },
    actions: {
        async nuxtServerInit({ commit }) {
            const res = await axios.get('https://comsep-wp-vit2.c9users.io/wp-json/wp/v2/pages');
            const data = res.data.map( e => getItemData(e) );
            commit('LOAD_PAGES', data);
        },
        async setLibItem(vuexContext, item) {
            vuexContext.commit('SET_LIB_ITEM', item);
        },
        loadLibItemData({commit, dispatch}, {type, id}) {
            dispatch('setLibItemPreviewData', {type, id});
            return libConn.getItem(type, id)
                .then( item => {
                    commit('SET_LIB_ITEM', item);
                });
        },
        setLibItemPreviewData({commit, state}, {type, id}) {
            const oldItem = state.libItem;
            const previewItem = libConn.getLinkedPreview(oldItem, type, id);
            if( previewItem )
                commit('SET_LIB_ITEM', previewItem);
        }

    }
})

export default store


