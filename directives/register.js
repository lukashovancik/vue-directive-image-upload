var Vue = require('vue');

var uploadImage = require('./general/upload-image.vue');

module.exports = {
    registerAllGlobalDirectives:function () {
        Vue.directive('image-upload',uploadImage);
    }
}