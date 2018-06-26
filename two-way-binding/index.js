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
        result: 0
    },
    methods: {
        increase: function(){
            this.counter++
            this.result = this.counter > 5 ? 'Greater 5' : 'Smaller 5'
        }
    }
})