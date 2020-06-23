<template>
  <div id="app">
    <div style="padding:1px; position: absolute; top: 0px; right: 0px;">
        <b-button id="buttonid" v-for="entry in languages" :key="entry.title" @click="changeLocale(entry.language)">
            <flag :iso="entry.flag" v-bind:squared=false /> {{entry.title}}
        </b-button>
    </div>
    <router-view></router-view>  
  </div>
</template>

<script>
import i18n from './plugins/i18n';
export default {
  name: 'App',
  data(){
    return{
      languages: [
            { flag: 'us', language: 'en', title: 'English' },
            { flag: 'vn', language: 'vn', title: 'Tiếng Việt'},
        ],
    }
  },
  components: {
  },
  methods:{
    changeLocale(locale) {
        i18n.locale = locale;
    },
    trigger(){
      this.$$refs.logo.style.visibility = "false";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
