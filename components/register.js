var Vue = require('vue');

//requires
var formComponent = require('./general/form.vue');


module.exports = {

    registerAllGlobalComponents: function() {
        //register vue components
        Vue.component('form-upload',formComponent);
        
    }

}
