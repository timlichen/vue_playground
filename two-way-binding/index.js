// Two Way binding
// Cross property management
// Compute properties  
// Watching properties

new Vue ({
    el: "#app",
    data: {
        name: "Tim Chen"
    }
})

new Vue ({
    el: "#app2",
    data: {
        counter: 0,
        secondCounter: 0
        // result: 0
    },
    computed: {
        output: function(){
            console.log("Computed!")
            return this.counter > 5 ? 'Greater 5' : "Smaller 5" 
        }
    },
    watch: {
        counter: function(value){
            var vm = this;
            setTimeout(function(){
                vm.counter = 0;
            },2000)
        }
    },
    methods: {
        // increase: function(){
        //     this.counter++
        //     this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        // }, 
        // decrease: function(){
        //     this.counter--
        //     this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        // }
        result: function(){
            console.log("Method!")
            return this.counter > 5 ? 'Greater 5' : "Smaller 5"
        }
    }
})