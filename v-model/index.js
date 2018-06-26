new Vue ({
    el: "#app",
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        increase: function(){
            return this.counter++
        },
        updateCoordinates: function(event){
            console.log("here")
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
})