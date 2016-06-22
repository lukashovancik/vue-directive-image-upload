
var Vue = require('vue');
var VueRouter = require('vue-router');
var VueValidator = require('vue-validator')
//Register the routes with the route
var configureRoutes = require('./routes');

Vue.use(VueRouter);
Vue.use(require('vue-resource'));
Vue.use(VueValidator);

//Create a router instance
var router = new VueRouter();

//Register the global components
var components = require('./components/register');
components.registerAllGlobalComponents();

//Register the global directives
var directives = require('./directives/register');
directives.registerAllGlobalDirectives();

var App = require('./app.vue');

router.start(App, '#container');