new Vue({
        el: '#exercise',
        data: {
            value: 0,
        }, 
        computed: {
            result: function(){
                return this.value != 37 ? 'not there yet' : 'done'
            }
        },
        watch: {
            result: function(result){
                var vm = this;
                setTimeout(function(){
                    vm.value = 0;
                }, 5000)
            }
        }
    });