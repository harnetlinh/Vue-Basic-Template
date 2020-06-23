import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './lang/en.json';
import vn from './lang/vn.json';
Vue.use(VueI18n);

const messages = {
  'en': en,
  'vn': vn
};

const i18n = new VueI18n({
  locale: 'vn', 
  fallbackLocale: 'vn', 
  messages, 
});

export default i18n;