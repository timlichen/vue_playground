 new Vue({
     el: "#app",
     data: {
         x: 0,
         y: 0,
         counter: 0
     }, 
     methods: {
         increase: function(step, event){
             console.log(event)
             this.counter += step
         },
         updateCoordinates: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
         },
        //  dummy: function(event){
        //      event.stopPropagation();
        //  }
        alertMe: function(event){
            alert('Alert! ')
        }
     }
 })