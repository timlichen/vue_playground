new Vue({
        el: '#exercise',
        data: {
            value: '',
            value2: ''
        },
        methods: {
            alertMe: function(event){
                alert("This is an alert!")
            },
            storeValue: function(event){
                this.value = event.target.value;
                console.log(this.value)
            },
            enterValue: function(event){
                this.value2 = event.target.value;
            }
        }
    });