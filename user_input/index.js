var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js'
    },
    methods : {
        reverseMessage: function () {
            console.log("here")
            this.message = this.message.split('').reverse().join('')
        }
    }
})